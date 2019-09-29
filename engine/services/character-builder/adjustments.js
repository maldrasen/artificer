global.Adjustments = (function() {

  function apply(character, options, nameAdjustments) {
    return new Promise((resolve, reject) => {
      let triggers = nameAdjustments.triggers.concat(options.triggers||[]);
      let aspects =  nameAdjustments.aspects.concat(options.aspects||[]);

      // If an adjustment fails because it's invalid for some reason, there's
      // probably something wrong with how the name is set up. That can be
      // nearly impossible to track down though.
      if (DEBUG && (triggers.length > 0 || aspects.length > 0)) {
        console.log(`\n=== Adjusting ${character.name} (${character.gender.code}) ===`)
        console.log(triggers);
        console.log(aspects);
      }

      applyAspects(character, aspects).then(()=>{
        applyTriggers(character, triggers).then(resolve);
      });
    });
  }

  function applyAspects(character, aspects) {
    return new Promise(resolve => {
      let valid = []

      // Need to ensure that each element in the valid array is unique and that
      // it has the highest level of the aspects being added.
      let add = aspect => {
        let existing = valid.find((entry) => { return entry.code == aspect.code; })
        if (existing == null) {
          valid.push(aspect);
        } else if (existing.level < aspect.level) {
          ArrayUtility.remove(valid, existing);
          valid.push(aspect);
        }
      }

      each(aspects, raw => {
        let code = raw.split('.')[0];
        let level = parseInt(raw.split('.')[1]||'1');
        add({ code:code, level:level })
      })

      Promise.all(valid.map(aspect => {
        return applyAspect(character, aspect);
      })).then(resolve);
    });
  }

  function applyAspect(character, aspect) {
    return new Promise(resolve => {
      character.canAddAspect(aspect.code).then(possible => { (possible) ?
        character.addAspect(aspect.code, { level:aspect.level }).then(resolve):
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
