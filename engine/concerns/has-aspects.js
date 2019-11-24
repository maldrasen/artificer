global.HasAspects = (function() {

  // addAspect() will add an aspect to the character's list of aspects.
  // Before calling addAspect() you should call canAddAspect() to make sure
  // that all the requirements are met.
  //
  //  - strength: int
  //  - level: int
  function addAspect(code, options) {
    return new Promise((resolve, reject)=>{
      if (options.strength == null && options.level == null) { reject('Either strength or level is required when adding aspect.'); }
      if (options.strength && options.strength < 0 || options.strength > 3000) { reject('Strength must be between 0 and 3000'); }
      if (options.level && options.level < 0 || options.level > 3) { reject('Level must be between 1 and 3'); }

      this.canAddAspect(code).then(pass => {
        if (pass == false) { return reject(`Cannot add aspect ${code}. Character does not meet the requirements.`); }

        let aspect = new CharacterAspect({
          character_id: this.id,
          code: code,
        });

        if (options.strength) { aspect.strength = options.strength; }
        if (options.level) { aspect.setLevel(options.level); }

        aspect.save().then(resolve);
      });
    });
  }

  // It's possible to change an aspect's strength over time. Aspect strength can
  // be raised or lowered. This function can be called for any aspect, even
  // aspects the character currently doesn't have. If they currently don't have
  // the aspect being adjusted it will be added. If an aspect is being
  // increased, but the character has the opposite aspect, that aspect will be
  // lowered instead. Lowering an aspect won't increase the opposite though.
  // Once an aspect reaches 0 strength it will be removed.
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
      this.getCharacterAspect(code).then(aspect => { aspect.destroy().then(resolve) })
    });
  }

  // === Private Functions =============================================================================================

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

  async function getCharacterAspectsForClient() {
    let aspects = await this.getCharacterAspects();

    let properties = {
      skillAspects: [],
      personalityAspects: [],
      sexualAspects: []};

    each(aspects, characterAspect => {
      let aspect = Aspect.lookup(characterAspect.code);
      let package = {
        name: aspect.name || TextUtility.titlecase(aspect.code),
        level: characterAspect.level,
        strength: characterAspect.strength,
      }

      if (aspect.type == 'skill')       { properties.skillAspects.push(package); }
      if (aspect.type == 'personality') { properties.personalityAspects.push(package); }
      if (aspect.type == 'sexual')      { properties.sexualAspects.push(package); }
    });

    return properties;
  }

  return { isAppliedTo:function(model) {
    model.prototype.addAspect = addAspect;
    model.prototype.adjustAspect = adjustAspect;
    model.prototype.canAddAspect = canAddAspect;
    model.prototype.destroyAllCharacterAspects = destroyAllCharacterAspects;
    model.prototype.getCharacterAspect = getCharacterAspect;
    model.prototype.getCharacterAspects = getCharacterAspects;
    model.prototype.getCharacterAspectsForClient = getCharacterAspectsForClient;
    model.prototype.getMirroredAspects = getMirroredAspects;
    model.prototype.hasAspect = hasAspect;
    model.prototype.hasMirroredAspect = hasMirroredAspect;
    model.prototype.removeAspect = removeAspect;
  }};

})();
