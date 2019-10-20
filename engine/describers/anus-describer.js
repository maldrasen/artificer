global.AnusDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();
    const injuries = await character.getAllInjuries();
    return syncFullDescription(character, parts, injuries);
  }

  function syncFullDescription(character, parts, injuries) {
    return "ANUS!"
  }

  return { fullDescription, syncFullDescription }

})();
