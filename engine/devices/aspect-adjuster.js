global.AspectAdjuster = (function() {

  // Adjust options
  //   subject    Either a character ID or some other signifier that the CharacterAgent can understand.
  //   aspect     An aspect, attribute, or code of something that can be adjusted.
  //   level      The amount to adjust, -3 to 3.
  async function adjust(options) {
    return await Promise.all((await lookupSubjects(options.subject)).map(async subject => {
      return await adjustCharacter(subject, options.aspect, options.level);
    }));
  }

  async function adjustCharacter(subject, aspect, level) {


    // === Adjust Attributes ===

    if (aspect == 'fear') {
      subject.adjustFear(level);
      return await subject.save();
    }

    if (aspect == 'loyal') {
      subject.adjustLoyaly(level);
      return await subject.save();
    }

    // === Adjust Sexual Preferences ===
    // TODO: Not sure yet how these sexual preferences will be implemented. For
    //       now i'll just ignore the attempts to set them, and we'll come back
    //       to this at some later date.
    if (aspect == 'rat-fucker') { return; }

    // === Adjust Aspects ===
    // If we're not adjusting an attribute or a sexual preference, we must be
    // adjusting an aspect.
    return await subject.adjustAspect(aspect, aspectAdjustmentStrength(level))
  }

  async function lookupSubjects(subjectName) {
    return subjectName.match(/^\d+$/) ?
       [(await Character.findByPk(subjectName))] :
       (await CharacterAgent.findActors(subjectName));
  }

  // Unlike attributes the amount of aspect strength gained doesn't depend on
  // the adjustment level. we just get a random number, based on the level, and
  // add that to the aspect strength. Aspect strength is a number between 0 and
  // 3000, so the amount of strength per level grows exponentially.
  function aspectAdjustmentStrength(level) {
    let points = {
      1: () => { return Random.upTo(20)+10;   },
      2: () => { return Random.upTo(60)+30;   },
      3: () => { return Random.upTo(200)+100; },
    }[Math.abs(level)]();

    return level > 0 ? points : points*-1;
  }

  return { adjust, aspectAdjustmentStrength };

})();
