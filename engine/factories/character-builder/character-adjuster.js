global.CharacterAdjuster = (function() {

  async function apply(character, options, nameAdjustments) {
    let triggers = nameAdjustments.triggers.concat(options.triggers||[]);
    let aspects =  nameAdjustments.aspects.concat(options.aspects||[]);

    // If an adjustment fails because it's invalid for some reason, there's
    // probably something wrong with how the name is set up. That can be
    // nearly impossible to track down though.
    if (triggers.length > 0 || aspects.length > 0) {
      log(`\n=== Adjusting ${character.name} (${character.gender.code}) ===`)
      log(triggers);
      log(aspects);
    }

    await applyAspects(character, aspects);
    await applyTriggers(character, triggers);
  }

  async function applyAspects(character, aspects) {
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

    return await Promise.all(valid.map(async aspect => {
      return await applyAspect(character, aspect);
    }));
  }

  async function applyAspect(character, aspect) {
    let possible = await character.canAddAspect(aspect.code)
    if (possible) {
      await character.addAspect(aspect.code, { level:aspect.level });
    }
  }

  async function applyTriggers(character, triggers) {
    return await Promise.all(triggers.map(async trigger => {
      return await applyTrigger(character, trigger);
    }));
  }

  async function applyTrigger(character, trigger) {
    return await Adjustment.lookup(trigger).apply(character);
  }

  return { apply:apply };

})();
