// This was required by the specs. Might need something like it going forward though.

global.SummonActionHelper = (function() {

  async function setupScene(scene) {
    Environment.Throttle = true;

    if (scene.player == null) { scene.player = {}; }

    await Game.start();
    Game.setLocation(scene.location || 'great-hall');

    await SpecHelper.buildPlayer({
      gender: (scene.player.gender || 'male'),
      species: (scene.player.species || 'elf'),
    });

    await adjustPlayer(scene.player);

    if (scene.character.gender == null) {
      scene.character.gender = Random.fromFrequencyMap({ male:7, futa:3, female:10 });
    }

    return await SpecHelper.buildJada(scene.character);
  }

  // We normally don't use the character builder for the player, and adding all
  // the conditionals and crap to make this work would just be nasty, so if we
  // want to set player attributes in the scene we just do it by hand here.
  async function adjustPlayer(options) {
    const player = await Player.instance();

    if (options.body) {
      const body = await player.getBody();
      if (options.body.height) { body.height = options.body.height; }
      await body.save();
    }

    if (options.cock) {
      const cock = await player.getCock();
      if (options.cock.sizeClass) { cock.sizeClass = options.cock.sizeClass; }
      if (options.cock.sizeScale) { cock.sizeScale = options.cock.sizeScale; }
      await cock.save();
    }
  }

  // When we take our shotgun approach to testing these summon actions we want
  // to randomize the scene enough to generate a lot of variety in the tests.
  // It's possible though to create characters that can no longer perform the
  // action under test, so we need to check the requirements of each action
  // before building the scene.
  async function buildAndExecute(character, action) {
    const context = new Context();
    await context.addCharacter('C',character);
    await context.addPlayer();

    if (await CentralScrutinizer.meetsRequirements(SummonAction.lookup(action).requirements, context)) {
      const summoner = new Summoner(character.id, action);
      await summoner.init();
      await summoner.execute();
      return summoner.getResult().story;
    } else {
      SpecHelper.print(`Preconditions failed, rejected scene.`);
    }
  }

  function randomSpecies() {
    return Random.from(Species.all()).code;
  }

  function randomPlayableSpecies() {
    return Random.from(['caprien','dark-elf','elf','equian','lupin','minotaur','wood-elf']);
  }

  // Generate a super random cock in order to add more variety to the scenes
  // able to be seelcted.
  function randomCockProperties() {
    return {
      sizeClass: Random.from(['average','big','huge']),
      sizeScale: Random.between(1,100),
    }
  }

  return {
    setupScene,
    buildAndExecute,
    randomSpecies,
    randomPlayableSpecies,
    randomCockProperties
  };

})();
