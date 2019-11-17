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

    // Adjust Attributes.

    if (aspect == 'fear') {
      subject.adjustFear(level);
      return await subject.save();
    }
    
    if (aspect == 'loyal') {
      subject.adjustLoyaly(level);
      return await subject.save();
    }

    raise `Unrecognized aspect to adjust - ${aspect}`;
  }

  async function lookupSubjects(subjectName) {
    return subjectName.match(/^\d+$/) ?
       [(await Character.findByPk(subjectName))] :
       (await CharacterAgent.findActors(subjectName));
  }

  return { adjust };

})();
