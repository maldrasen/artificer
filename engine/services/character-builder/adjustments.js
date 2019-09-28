global.Adjustments = (function() {

  function apply(character, options, nameAdjustments) {
    return new Promise((resolve, reject) => {


      let triggers = nameAdjustments.triggers.concat(options.triggers||[]);
      let aspects = nameAdjustments.aspects.concat(options.aspects||[]);

      // console.log(`\n=== Adjust ${character.name} ===`)

      applyAspects(character,aspects).then(resolve)
      // applyTriggers(character, triggers).
      // //   then().
      // //   then(resolve);
    });
  }

  function applyTriggers(character, triggers) {
    return new Promise((resolve, reject) => {
      Promise.all(triggers.map((code) => {
        applyTrigger(character,code);
      })).then(resolve);
    });
  }

  function applyTrigger(character, code) {
    return new Promise((resolve, reject) => {
      let adjustment = Adjustment.lookup(code);
      resolve();
    });
  }

  function applyAspects(character, aspects) {
    return new Promise((resolve, reject) => {
      Promise.all(aspects.map((code) => {
        return applyAspect(character,code)
      })).then(resolve);
    });
  }

  function applyAspect(character, raw) {
    return new Promise((resolve, reject) => {
      let code = raw.split('.')[0];
      let level = parseInt(raw.split('.')[1]||'1');
      let aspect = Aspect.lookup(code)

      character.getCharacterAspect(code, characterAspect => {
        if (characterAspect && characterAspect.level < level) {
          characterAspect.level = level
          characterAspect.save().then(resolve);
        }
        if (characterAspect == null) {
          character.addAspect(code, { level:level }, resolve)
        }
      });
    });
  }

  return { apply:apply };

})();
