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


  function applyTriggers(character, triggers) {
    return new Promise(resolve => {
      Promise.all(triggers.map(trigger => {
        return applyTrigger(character, trigger);
      })).then(resolve);
    })
  }

  function applyTrigger(character, trigger) {
    return new Promise(resolve => {
      // console.log(`=== ${character.name} get trigger : ${trigger} ===`)
      Adjustment.lookup(trigger).apply(character).then(resolve);
    })
  }


  // This applyAspects() function here has taken me like three days to write,
  // because I keep slamming my head against SQLite I think. The problem is
  // that I can add an apect to a character, but that takes a little time, so
  // if I add something and immeadietly ask if it's there, the database tells
  // me it isn't. Even the goddamn in memory database.
  //
  // This happens when I shotgun aspects onto a character from the names
  // because there can easily be duplications, and we can't allow duplicate
  // aspects on a character.
  //
  // The only working solution I've found is to carefully build an array of
  // aspects, including the required aspects, and adding them outside of the
  // HasAspect concern and the standard addAspect() function.
  //
  // This function will not work if a character already has any aspects. The
  // Adjustments class should only be used by the character builder though, so
  // at this point the character shouldn't have any.
  function applyAspects(character, aspects) {
    return new Promise(resolve => {
      let missing = [];

      let addToMissing = (aspect) => {
        let already = missing.find(miss => { return aspect.code == miss.code });
        if (already) {
          aspect.level = (aspect.level > already.level) ? aspect.level : already.level;
          ArrayUtility.remove(missing, already)
        }
        missing.push(aspect);
      }

      each(aspects, raw => {
        let code = raw.split('.')[0];
        let level = parseInt(raw.split('.')[1]||'1');
        let aspect = Aspect.lookup(code);

        addToMissing({ code:code, level:level });
        each(aspect.requires, (required) => {
          if (required.aspect) {
            addToMissing({ code:required.aspect, level:1 });
          }
        });
      });

      Promise.all(missing.map(aspect => {
        return new Promise(res => {
          let characterAspect = new CharacterAspect({
            character_id: character.id,
            code: aspect.code,
          });

          characterAspect.setLevel(aspect.level);
          characterAspect.save().then(res);
        });
      })).then(resolve);
    })
  }

  return { apply:apply };

})();
