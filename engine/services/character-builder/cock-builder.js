global.CockBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.cock == false) { return resolve(); }

      let cockParams = CharacterBuilder.baseline('cocks', options, character.species, {
        character_id: character.id,
        shape: "normal",
        placement: 'normal',
        sheath: null,
        count: 1,
        length: null,
        widthRatio: null,
        knotWidthRatio: null,
        knobHeightRatio: null,
        spineHeightRatio: null,
        glow: null,
        urethraWidth: 2,
        urethraElasticity: 1,
      });

      let ballsParams = CharacterBuilder.baseline('balls', options, character.species, {
        character_id: character.id,
        width: null,
        internal: false,
        productionMultiplier: null
      });

      if (cockParams.length == null)                { cockParams.length = randomCockLength(character.species); }
			if (cockParams.widthRatio == null)            { cockParams.widthRatio = Cock.getWidthRatio(cockParams.shape); }
      if (ballsParams.width == null)                { ballsParams.width = aboutCockWidth(cockParams); }
      if (ballsParams.productionMultiplier == null) { ballsParams.productionMultiplier = getProductionMultiplier(character.species); }

      // If this is supposed to be a dog cock, but the width ratio isn't set we
      // generate a random width. Should be somewhere between 1 and 2.
      if (cockParams.shape == 'dog' && cockParams.knotWidthRatio == null) {
        cockParams.knotWidthRatio = (Random.upTo(5)+10) / 10;
      }

			Promise.all([
				Cock.create(cockParams),
				Balls.create(ballsParams)
			]).then(resolve);
    });
  }

  // Each ball width is about the width of the character's cock.
  function aboutCockWidth(cockParams) {
    return Math.round(0.1548712 * cockParams.length * cockParams.widthRatio);
  }

	function randomCockLength(species) {
		let average = ObjectUtility.fetch(species, 'bodyOptions', 'cocks', 'averageSize');
		return Random.tightlyBound(average, Math.round(average/2));
	}

  function getProductionMultiplier(species) {
    return 1 + (Random.upTo(100)/100) + (ObjectUtility.fetch(species, 'bodyOptions', 'balls', 'extraProduction') || 0);
  }

  return {
		build: build,
		randomCockLength: randomCockLength
	}

})();
