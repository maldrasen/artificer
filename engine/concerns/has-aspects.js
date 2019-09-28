global.HasAspects = (function() {

  // addAspect() will add an aspect to the characters list of aspects. All of
  // the dependent aspects will also be added if the requirements for those
  // aspects are met. Normally you should call canAddAspect() first to avoid
  // this.
  //
  //  - strength: int
  //  - level: int
  function addAspect(code, options) {
    return new Promise((resolve, reject)=>{
      if (options.strength == null && options.level == null) { reject('Either strength or level is required when adding aspect.'); }
      if (options.strength && options.strength < 0 || options.strength > 3000) { reject('Strength must be between 0 and 3000'); }
      if (options.level && options.level < 0 || options.level > 3) { reject('Level must be between 1 and 3'); }

      missingRequiredAspects(code, this).then(missingAspects => {
        missingAspects.push(code);
        Promise.all(missingAspects.map(missingAspect => {
          return new Promise(res => {
            checkRequirements(missingAspect, this).then(pass => {
              if (pass == false) { return reject(`Cannot add aspect ${missingAspect}. Character does not meet the requirements.`); }
              res(createCharacterAspect(missingAspect, (missingAspect == code) ? options : { level:1 }, this));
            });
          });
        })).then(resolve);
      });
    });
  }

  function addAspectIfPossible(code, options) {
    return new Promise(resolve => {
      this.canAddAspect().then(possible => {
        possible ? this.addAspect(code, options).then(resolve) : resolve(false);
      });
    });
  }

  // It's possible to change an aspect's strength over time. Aspect strength can
  // be raised or lowered. This function can be called for any aspect, even
  // aspects the character currently doesn't have. If they currently don't have
  // the aspect being adjusted it will be added. This function won't add
  // dependent aspects, if a dependent aspect is missing this will do nothing.
  // If an aspect is being increased, but the character has the opposite aspect,
  // that aspect will be lowered instead. Lowering an aspect won't increase the
  // opposite though. Once an aspect reaches 0 strength it will be removed.
  function adjustAspect(code, points) {
    return new Promise(resolve => {
      this.getCharacterAspect(code).then(characterAspect => {
        let aspect = Aspect.lookup(code);
        let level = (characterAspect == null) ? 0 : characterAspect.level;
        if (characterAspect) {
          return applyAspectAdjustment(characterAspect, points).then(resolve);
        }

        // Only adjust downwise if the character currently has the aspect.
        if (points < 0) { return resolve(false); }

        this.getMirroredAspects(code).then(aspects => {
          let oppositeAspect = Random.from(aspects);
          return (oppositeAspect) ?
            applyAspectAdjustment(oppositeAspect, -points).then(resolve):
            applyAspectAdjustmentAddition(code, points, this).then(resolve);
        });
      });
    });
  }

  function canAddAspect(code) {
    return new Promise(resolve => {
      let aspect = Aspect.lookup(code);
      let checks = [doesNotHaveAspect(this, code)];

      each(aspect.requires, (requirement) => {
        checks.push(requirementMet(this,requirement))
      });
      each(aspect.refutes, (refutement) => {
        checks.push(doesNotRefute(this,refutement))
      });

      Promise.all(checks).then(results => {
        resolve(results.indexOf(false) < 0);
      });
    });
  }

  // canRemoveAspect() checks to see if it's possible for an aspect to be
  // removed. Aspects can be removed if it has no dependent aspects. To
  // determine this we get all of the character's aspects and check to see if
  // any are dependent on this one.
  function canRemoveAspect(code) {
    return new Promise(resolve => {
      this.hasAspect(code).then(present => {
        if (present == false) { return resolve(false); }

        this.getCharacterAspects().then(characterAspects => {
          let removable = true;

          each(characterAspects, characterAspect => {
            each(characterAspect.getAspect().requires, requirement => {
              if (requirement.aspect == code) { removable = false; }
            })
          });

          resolve(removable);
        });
      });
    });
  }

  // Force a character to have the given aspects even if none of the requirements
  // are met, and deleting any existing aspects. Should only be used in the unit
  // tests.
  function forceAspects(aspects) {
    return new Promise(resolve => {
      this.destroyAllCharacterAspects().then(() => {
        let tasks = [];

        each(aspects, (level, code) => {
          tasks.push(new Promise(res => {
            aspect = new CharacterAspect({ character_id:this.id, code:code });
            aspect.setLevel(level);
            aspect.save().then(res);
          }));
        });

        Promise.all(tasks).then(resolve);
      });
    });
  }


  function getMirroredAspects(code) {
    return new Promise(resolve => {
      let aspect = Aspect.lookup(code);
      let checks = [];

      each(aspect.refutes, (refutement) => {
        if (refutement.aspect) {
          checks.push(this.getCharacterAspect(refutement.aspect));
        }
      });

      Promise.all(checks).then(mirrors => {
        resolve(mirrors.filter(mirror => mirror != null));
      });
    });
  }

  function hasAspect(code) {
    return new Promise(resolve => {
      this.getCharacterAspect(code).then(aspect => {
        resolve(aspect != null);
      });
    });
  }

  function hasMirroredAspect(code) {
    return new Promise(resolve => {
      this.getMirroredAspects(code).then(aspects => {
        resolve(aspects.length > 0);
      });
    });
  }

  function removeAspect(code) {
    return new Promise(resolve => {
      this.canRemoveAspect(code).then(answer => {
        (answer) ? this.getCharacterAspect(code).then(aspect => { aspect.destroy().then(resolve) }) : resolve(false);
      });
    });
  }

  // === Private Functions =============================================================================================

  function missingRequiredAspects(code, character) {
    return new Promise(resolve => {
      character.getCharacterAspects().then(characterAspects => {
        let currentCodes = characterAspects.map(aspect => { return aspect.code; })
        let missing = []

        each(Aspect.lookup(code).requires||[], required => {
          if (required.aspect && currentCodes.indexOf(required.aspect) < 0) {
            missing.push(required.aspect);
          }
        });

        resolve(missing);
      });
    });
  }

  function checkRequirements(code, character) {
    return new Promise(resolve => {
      let aspect = Aspect.lookup(code);
      let checks = [];

      character.hasAspect(code).then(present => {
        each((aspect.requires||[]), requirement => {
          if (requirement.aspect == null) {
            checks.push(requirementMet(character,requirement));
          }
        });

        each((aspect.refutes||[]), refutement => {
          checks.push(doesNotRefute(character,refutement));
        });

        Promise.all(checks).then(results => {
          resolve(!present && results.indexOf(false) == -1);
        });
      });
    })
  }

  function createCharacterAspect(code, options, character) {
    return new Promise(resolve => {
      let aspect = new CharacterAspect({
        character_id: character.id,
        code: code,
      });

      if (options.strength) { aspect.strength = options.strength; }
      if (options.level) { aspect.setLevel(options.level); }

      aspect.save().then(resolve);
    })
  }

  function applyAspectAdjustment(characterAspect, points) {
    return new Promise(resolve => {
      characterAspect.adjustStrength(points);
      characterAspect.save().then(completeAspectAdjustment(characterAspect)).then(resolve)
    });
  }

  function applyAspectAdjustmentAddition(code, points, character) {
    return new Promise(resolve => {
      character.canAddAspect(code).then(possible => {
        if (possible == false) { return resolve(false); }

        character.addAspect(code, { strength:points }).then(() => {
          character.getCharacterAspect(code).then(characterAspect => {
            completeAspectAdjustment(characterAspect);
          }).then(resolve);
        });
      });
    });
  }

  // TODO: If a character loses and aspect a message should be added to a
  //       message queue. Need to implement a message queue first though.
  //
  // The completeAspectAdjustment() will remove an aspect if it's strength
  // drops to 0.
  function completeAspectAdjustment(characterAspect) {
    return new Promise(resolve => {
      (characterAspect.strength == 0) ? characterAspect.destroy().then(resolve) : resolve(false);
    });
  }

  function doesNotHaveAspect(character, code) {
    return new Promise(resolve => {
      character.hasAspect(code).then(present => {
        resolve(present == false);
      });
    })
  }

  function doesNotRefute(character, refutement) {
    return new Promise((resolve, reject) => {
      if (refutement.aspect) {
        return character.hasAspect(refutement.aspect).then(present => { resolve(present == false); });
      }

      if (refutement.character == 'furry') {
        return resolve(character.species.isFurry == false);
      }

      reject(`Unhandled refutement type: ${JSON.stringify(refutement)}`);
    });
  }

  function requirementMet(character,requirement) {
    return new Promise((resolve, reject) => {
      if (requirement.aspect) {
        return character.hasAspect(requirement.aspect).then(present => { resolve(present == true); });
      }

      if (requirement.body == 'pussy') {
        return character.getPussy().then(pussy => { resolve(pussy != null); });
      }

      if (requirement.body == 'cock') {
        return character.getCock().then(cock => { resolve(cock != null); });
      }

      if (requirement.body == 'tits') {
        return character.getTits().then(tits => { resolve(tits != null); });
      }

      reject(`Unhandled requirement type: ${JSON.stringify(requirement)}`);
    });
  }

  // This only works because character's are the only model with aspects right
  // now, but that may change.
  function getCharacterAspects() {
    return CharacterAspect.findAll({ where:{ character_id:this.id }});
  }

  function getCharacterAspect(code) {
    return CharacterAspect.findOne({ where:{ character_id:this.id, code:code }});
  }

  function destroyAllCharacterAspects() {
    return CharacterAspect.destroy({ where:{ character_id:this.id }});
  }

  return { isAppliedTo:function(model) {
    model.prototype.addAspect = addAspect;
    model.prototype.addAspectIfPossible = addAspectIfPossible;
    model.prototype.adjustAspect = adjustAspect;
    model.prototype.canAddAspect = canAddAspect;
    model.prototype.canRemoveAspect = canRemoveAspect;
    model.prototype.destroyAllCharacterAspects = destroyAllCharacterAspects;
    model.prototype.forceAspects = forceAspects;
    model.prototype.getCharacterAspect = getCharacterAspect;
    model.prototype.getCharacterAspects = getCharacterAspects;
    model.prototype.getMirroredAspects = getMirroredAspects;
    model.prototype.hasAspect = hasAspect;
    model.prototype.hasMirroredAspect = hasMirroredAspect;
    model.prototype.removeAspect = removeAspect;
  }};

})();
