global.SummonActionHelper = (function() {

  async function setupScene(scene) {
    Environment.Throttle = true;

    if (scene.player == null) { scene.player = {}; }

    const game = await Game.start();
    await game.update({
      location: (scene.location || 'great-hall')
    })
    await game.createPlayer({
      title: 'Master', firstName: 'Biggus', lastName: 'Dickus',
      gender: (scene.player.gender || 'male'),
      species: (scene.player.species || 'elf'),
    });

    if (scene.character.gender == null) {
      scene.character.gender = Random.fromFrequencyMap({ male:7, futa:3, female:10 });
    }

    return await SpecHelper.buildJada(scene.character);
  }

  async function buildAndExecute(character, action) {
    const summoner = new Summoner(character.id, action);
    await summoner.init();
    await summoner.execute();
    return summoner.getResult().story;
  }

  return { setupScene, buildAndExecute };

})();
