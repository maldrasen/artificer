global.CockBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.cock == false) { return resolve(); }

      let cockParams = CharacterBuilder.baseline('cock', options, character.species, {
        character_id: character.id,
        shape: "normal",
        placement: 'normal',
        sheath: null,
        count: 1,
        sizeClass: null,
        sizeScale: null,
        widthRatio: null,
        knotWidthRatio: null,
        knobHeightRatio: null,
        spineHeightRatio: null,
        glow: null,
        urethraWidth: 2,
        urethraElasticity: 1,
        minimumWidth: 20,
      });

      let ballsParams = CharacterBuilder.baseline('balls', options, character.species, {
        character_id: character.id,
        width: null,
        internal: false,
        productionMultiplier: null
      });

      cockParams.sizeFactor = getSizeFactor(character.species);

      if (cockParams.sizeClass == null)  { cockParams.sizeClass = Random.fromFrequencyMap(character.species.bodyOptions.cock.size); }
      if (cockParams.sizeScale == null)  { cockParams.sizeScale = Random.upTo(100); }
			if (cockParams.widthRatio == null) { cockParams.widthRatio = Cock.getWidthRatio(cockParams.shape); }

      if (ballsParams.width == null)                { ballsParams.width = aboutCockWidth(cockParams); }

      // If this is supposed to be a dog cock, but the width ratio isn't set we
      // generate a random width. Should be somewhere between 1.3 and 2.
      if (cockParams.shape == 'dog' && cockParams.knotWidthRatio == null) {
        cockParams.knotWidthRatio = 1.3 + (Random.upTo(70)/100);
      }

			Promise.all([
				Cock.create(cockParams),
				Balls.create(ballsParams)
			]).then(resolve);
    });
  }

  function getSizeFactor(species) {
    if (species.bodyOptions.shape == 'quadruped') { return 2; }
    return (species.bodyOptions.baseHeight || 1500) / 1500
  }

  // Each ball width is about the width of the character's cock.... which isn't going to work now because there is no size here...
  function aboutCockWidth(cockParams) {
    return Math.round(0.1548712 * cockParams.length * cockParams.widthRatio);
  }


  function getProductionMultiplier(species) {
    return 1 + (Random.upTo(100)/100) + (ObjectUtility.fetch(species, 'bodyOptions', 'balls', 'extraProduction') || 0);
  }


  return { build:build }

})();
