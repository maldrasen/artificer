global.HasAspects = (function() {

  // addAspect() will add an aspect to the characters list of aspects. All of
  // the dependent aspects will also be added if the requirements for those
  // aspects are met. Normally you should call canAddAspect() first to avoid
  // this.
  //
  //  - strength: int
  //  - level: int
  //
  // The callback is slightly unreliable here. The callback will get called as
  // soon as an aspect is added. If dependent aspects are added though the
  // callback will be called for each of them as well. No idea how to fix that.
  function addAspect(code, options, callback) {
    if (options.strength == null && options.level == null) { throw 'Either strength or level is required when adding aspect.'; }
    if (options.strength && options.strength < 0 || options.strength > 3000) { throw 'Strength must be between 0 and 3000'; }
    if (options.level && options.level < 0 || options.level > 3) { throw 'Level must be between 1 and 3'; }

    addDependentAspects(code, options, this, () => {
      checkRequirements(code, options, this, (pass) => {
        if (pass == false) { return callback(false);}

        let params = {
          character_id: this.id,
          code: code
        };

        if (options.strength) { params.strength = options.strength; }
        if (options.level === 0) { params.strength = 0; }
        if (options.level === 1) { params.strength = 400; }
        if (options.level === 2) { params.strength = 1000; }
        if (options.level === 3) { params.strength = 2200; }

        CharacterAspect.create(params).then(callback);
      });
    });
  }

  function addAspectIfPossible(code, options, callback) {
    this.canAddAspect((possible) => {
      (possible) ? this.addAspect(code, options, callback) : callback(false);
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
  function adjustAspect(code, points, callback) {
    this.getCharacterAspect(code, (characterAspect) => {
      let aspect = Aspect.lookup(code);
      let level = (characterAspect == null) ? 0 : characterAspect.level;
      if (characterAspect) {
        return applyAspectAdjustment(characterAspect, points, callback);
      }

      // Only adjust downwise if the character currently has the aspect.
      if (points < 0) { return callback(false); }

      this.getMirroredAspects(code, (aspects) => {
        let oppositeAspect = Random.from(aspects);
        return (oppositeAspect) ?
          applyAspectAdjustment(oppositeAspect, -points, callback):
          applyAspectAdjustmentAddition(this, code, points, callback);
      });
    });
  }

  function canAddAspect(code, callback) {
    let aspect = Aspect.lookup(code);
    let checks = [ p_DoesNotHaveAspect(this, code) ];

    each(aspect.requires, (requirement) => {
      checks.push(p_RequirementMet(this,requirement))
    });
    each(aspect.refutes, (refutement) => {
      checks.push(p_DoesNotRefute(this,refutement))
    });

    Promise.all(checks).then((results) => {
      callback(results.indexOf(false) < 0);
    });
  }

  // canRemoveAspect() checks to see if it's possible for an aspect to be
  // removed. Aspects can be removed if it has no dependent aspects. To
  // determine this we get all of the character's aspects and check to see if
  // any are dependent on this one.
  function canRemoveAspect(code, callback) {
    this.hasAspect(code, (present) => {
      if (present == false) { return callback(false); }

      this.getCharacterAspects((characterAspects) => {
        let removable = true;

        each(characterAspects, (characterAspect) => {
          each(characterAspect.getAspect().requires, (requirement) => {
            if (requirement.aspect == code) { removable = false; }
          })
        });

        callback(removable);
      });
    });
  }

  // Force a character to have the given aspects even if none of the requirements
  // are met, and deleting any existing aspects. Should only be used in the unit
  // tests.
  function forceAspects(aspects, callback) {
    this.destroyAllCharacterAspects(() => {
      let tasks = [];

      each(aspects, (level, code) => {
        tasks.push(new Promise((resolve) => {
          aspect = new CharacterAspect({ character_id:this.id, code:code });
          aspect.setLevel(level);
          aspect.save().then(resolve);
        }));
      });

      Promise.all(tasks).then(callback);
    });
  }

  // Again, this assumes that the aspect is on a character.
  function getCharacterAspect(code, callback) {
    CharacterAspect.findOne({ where:{ character_id:this.id, code:code }}).then(callback);
  }

  function getMirroredAspects(code, callback) {
    let aspect = Aspect.lookup(code);
    let checks = [];

    each(aspect.refutes, (refutement) => {
      if (refutement.aspect) {
        checks.push(new Promise((resolve) => {
          this.getCharacterAspect(refutement.aspect, resolve);
        }));
      }
    });

    Promise.all(checks).then((mirrors)=>{
      callback(mirrors.filter(mirror => mirror != null));
    });
  }

  function hasAspect(code, callback) {
    this.getCharacterAspect(code, (aspect) => {
      callback(aspect != null);
    });
  }

  function hasMirroredAspect(code, callback) {
    this.getMirroredAspects(code, (aspects) => {
      callback(aspects.length > 0);
    });
  }

  function removeAspect(code, callback) {
    this.canRemoveAspect(code, (answer)=>{
      if (answer == false) { return callback(false); }
      this.getCharacterAspect(code, (aspect) => {
        aspect.destroy().then(callback);
      });
    })
  }

  // === Private Functions =============================================================================================

  // This setTimeout() is probably the wrong way to handle this, but when adding dependent aspects sometimes both an
  // aspect and it's dependent aspect will both depend on a third aspect. That can get added twice if we call
  // addAspect() too fast without giving time for the aspect to completely be added.
  function addDependentAspects(code, options, character, callback) {
    let aspect = Aspect.lookup(code);
    let chain = Promise.resolve();

    each(aspect.requires, (requirement) => {
      if (requirement.aspect) {
        chain.then((_) => new Promise((resolve) => {
          setTimeout(() => {
            character.getCharacterAspect(requirement.aspect, (requiredAspect) => {
              addDependentAspect(requirement.aspect, requiredAspect, character, resolve);
            });
          },10);
        }));
      }
    });

    chain.then(callback);
  }

  function addDependentAspect(aspect, requiredAspect, character, resolve) {
    if (requiredAspect == null || requiredAspect.level < 1) {
      character.addAspect(aspect, { level:1 }, () => {
        resolve();
      });
    } else {
      resolve();
    }
  }

  function checkRequirements(code, options, character, callback) {
    let aspect = Aspect.lookup(code);
    let checks = [];

    character.hasAspect(code, (present) => {
      each((aspect.requires||[]), (requirement) => {
        if (requirement.aspect == null) {
          checks.push(p_RequirementMet(character,requirement));
        }
      });

      each((aspect.refutes||[]), (refutement) => {
        checks.push(p_DoesNotRefute(character,refutement));
      });

      Promise.all(checks).then((results) => {
        callback(!present && results.indexOf(false) == -1);
      });
    });
  }

  function applyAspectAdjustment(characterAspect, points, callback) {
    characterAspect.adjustStrength(points);
    characterAspect.save().then(() => {
      completeAspectAdjustment(characterAspect);
      callback(true);
    });
  }

  function applyAspectAdjustmentAddition(character, code, points, callback) {
    character.canAddAspect(code, (possible) => {
      if (possible == false) { return callback(false); }

      character.addAspect(code, { strength:points }, () => {
        character.getCharacterAspect(code, (characterAspect) => {
          completeAspectAdjustment(characterAspect);
          callback(true);
        });
      });
    });
  }

  // TODO: If a character aspect's level has changed a message should be added
  //       to the queue. Need to implement a message queue first though.
  //
  // The completeAspectAdjustment() will remove an aspect if it's strength
  // drops to 0, this happens after the callback already returns, so don't
  // expect this to be correct immeadietly after the adjustment was made.
  function completeAspectAdjustment(characterAspect) {
    if (characterAspect.strength == 0) {
      characterAspect.destroy();
    }
  }

  // === Promises Private to Module ====================================================================================

  function p_DoesNotHaveAspect(character, code) {
    return new Promise((resolve) => {
      character.hasAspect(code, (present) => {
        resolve(present == false);
      });
    })
  }

  function p_DoesNotRefute(character, refutement) {
    return new Promise((resolve) => {
      if (refutement.aspect) {
        return character.hasAspect(refutement.aspect, (present) => { resolve(present == false); });
      }

      if (refutement.character == 'furry') {
        return resolve(character.species.isFurry == false);
      }

      throw `Unhandled refutement type: ${JSON.stringify(refutement)}`;
    });
  }

  function p_RequirementMet(character,requirement) {
    return new Promise((resolve) => {
      if (requirement.aspect) {
        return character.hasAspect(requirement.aspect, (present) => { resolve(present == true); });
      }

      if (requirement.body == 'pussy') {
        return character.getPussy(pussy => { resolve(pussy != null); });
      }

      if (requirement.body == 'cock') {
        return character.getCock(cock => { resolve(cock != null); });
      }

      if (requirement.body == 'tits') {
        return character.getTits(tits => { resolve(tits != null); });
      }

      throw `Unhandled requirement type: ${JSON.stringify(requirement)}`;
    });
  }

  // This only works because character's are the only model with aspects right
  // now, but that may change.
  function getCharacterAspects(callback) {
    CharacterAspect.findAll({ where:{ character_id:this.id }}).then(callback);
  }

  function destroyAllCharacterAspects(callback) {
    CharacterAspect.destroy({ where:{ character_id:this.id }}).then(callback);
  }

  return { isAppliedTo:function(model) {
    model.prototype.addAspect = addAspect;
    model.prototype.addAspectIfPossible = addAspectIfPossible;
    model.prototype.adjustAspect = adjustAspect;
    model.prototype.canAddAspect = canAddAspect;
    model.prototype.canRemoveAspect = canRemoveAspect;
    model.prototype.forceAspects = forceAspects;
    model.prototype.getCharacterAspect = getCharacterAspect;
    model.prototype.getMirroredAspects = getMirroredAspects;
    model.prototype.hasAspect = hasAspect;
    model.prototype.hasMirroredAspect = hasMirroredAspect;
    model.prototype.removeAspect = removeAspect;
    model.prototype.getCharacterAspects = getCharacterAspects;
    model.prototype.destroyAllCharacterAspects = destroyAllCharacterAspects;
  }};

})();
