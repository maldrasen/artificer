global.Adjustments = (function() {

  function apply(character, options, nameAdjustments) {
    return new Promise((resolve, reject) => {
      let triggers = nameAdjustments.triggers.concat(options.triggers||[]);
      let aspects = nameAdjustments.aspects.concat(options.aspects||[]);

      applyAspects(character,aspects).then(()=>{
        applyTriggers(character, triggers).then(resolve);
      });
    });
  }

  function applyAspects(character, aspects) {
    return new Promise(resolve => {
      Promise.all(aspects.map(aspect => {
        return applyAspect(character, aspect);
      })).then(resolve);
    });
  }

  function applyAspect(character, raw) {
    let code = raw.split('.')[0];
    let level = parseInt(raw.split('.')[1]||'1');

    return new Promise(resolve => {
      character.canAddAspect(code).then(possible => { (possible) ?
        character.addAspect(code, { level:level }).then(resolve):
        resolve();
      })
    })
  }

  function applyTriggers(character, triggers) {
    return new Promise(resolve => {
      Promise.all(triggers.map(trigger => {
        return applyTrigger(character, trigger);
      })).then(resolve);
    })
  }

  function applyTrigger(character, trigger) {
    return new Promise(resolve => {
      Adjustment.lookup(trigger).apply(character).then(resolve);
    })
  }

  return { apply:apply };

})();
