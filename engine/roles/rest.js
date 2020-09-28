Role.Rest = (function() {

  // The rest role is dead simple. The resolver takes care of the healing bonus
  // that character's receive by healing.
  //
  // TODO: I should extend this at some point to make the text more
  //       interesting. I should note that characters that are badly injured
  //       spend the day in bed, and characters that are not injured at all
  //       spend the day jacking off.
  //
  async function work(character, result) {
    result.story = `${character.singleName} spent the day resting.`
  }

  return { work };

})();
