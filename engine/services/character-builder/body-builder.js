global.BodyBuilder = (function() {

  function build(character, options, callback) {
    if (character.gender == null)  { throw 'Gender must be set before body can be built.'; }
    if (character.species == null) { throw 'Species must be set before body can be built.'; }
    if (character.id == null)      { throw 'Character must be persisted.'; }

    let bodyOptions = options.body || {};
    let params = {
      height:     bodyOptions.height     || character.species.randomHeight(character.genderCode),
      scaleColor: bodyOptions.scaleColor || character.species.randomColorFor('scale',character.genderCode),
      tailShape:  bodyOptions.tailShape  || character.species.bodyOptions.tailShape || null,
      hornShape:  bodyOptions.hornShape  || character.species.randomHornShape(),
      faceShape:  character.species.getFaceShape(character.genderCode),
    }

    let skinColor =  bodyOptions.skinColor || character.species.randomColorFor('skin',character.genderCode);
    if (skinColor) {
      params.skinShade = bodyOptions.skinShade || Random.upTo(5)+1;
      params.skinColor = skinColor;
    }

    let furColor =   bodyOptions.furColor || character.species.randomColorFor('fur',character.genderCode);
    if (furColor) {
      params.furShade = bodyOptions.furShade || Random.upTo(5)+1
      params.furColor = furColor;
    }

    let hairColor =  bodyOptions.hairColor || character.species.randomColorFor('hair',character.genderCode);
    params.hairColor = (hairColor == 'human') ? randomHumanHairColor() : hairColor;

    Body.create(params).then(body => {
      callback(body);
    });
  }

  function randomHumanHairColor() {
    return Random.fromFrequencyMap({
      'black':            100,
      'dark-brown':       300,
      'brown':            200,
      'light-brown':      200,
      'chestnut':         30,  // a darker brown/red
      'auburn':           30,  // a medium brown/red
      'platinum-blond':   30,
      'golden-blond':     80,
      'blond':            100,
      'dark-blond':       200,
      'strawberry-blond': 50,
      'red':              30,
      'copper':           30,
      'white':            20,
    });
  }

  return {
    build: build,
  };

})();
