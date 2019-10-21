global.AnusDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();
    return syncFullDescription(character, parts);
  }

  function syncFullDescription(character, parts) {
    return "ANUS!"
  }

  return { fullDescription, syncFullDescription }

})();
