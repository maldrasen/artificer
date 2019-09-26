global.CockBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.cock == false) { return resolve(); }

      let params = CharacterBuilder.baseline('cock', options, character.species, {
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
        minimumWidth: 20,
        ballsSizeFactor: 1,
        internalBalls: false,
      });

      params.sizeFactor = getSizeFactor(character.species);

      if (params.sizeClass == null)  { params.sizeClass = Random.fromFrequencyMap(character.species.bodyOptions.cock.size); }
      if (params.sizeScale == null)  { params.sizeScale = Random.upTo(100); }
			if (params.widthRatio == null) { params.widthRatio = Cock.getWidthRatio(params.shape); }

      // If this is supposed to be a dog cock, but the width ratio isn't set we
      // generate a random width. Should be somewhere between 1.3 and 2.
      if (params.shape == 'dog' && params.knotWidthRatio == null) {
        params.knotWidthRatio = 1.3 + (Random.upTo(70)/100);
      }

      // The Caprien's have huge dangling goat balls. If a ballsSizeFactor
      // wasn't set, generate one between 1.2 and 1.8.
      if (character.species.code == 'caprien' && options.ballsSizeFactor == null) {
        params.ballsSizeFactor = 1.2 + (Random.upTo(60)/100);
      }

      Cock.create(params).then(resolve);
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
