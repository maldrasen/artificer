global.BodyBuilder = (function() {

  function build(character, options, callback) {
    if (character.gender == null)  { throw 'Gender must be set before body can be built.'; }
    if (character.species == null) { throw 'Species must be set before body can be built.'; }
    if (character.id == null)      { throw 'Character must be persisted.'; }

    let bodyOptions = options.body || {};
    let params = {
      height:     bodyOptions.height     || character.species.randomHeight(character.genderCode),
      eyeColor:   bodyOptions.eyeColor   || character.species.random('eye'),
      scaleColor: bodyOptions.scaleColor || character.species.random('scale'),
      tailShape:  bodyOptions.tailShape  || character.species.bodyOptions.tailShape || null,
      hornShape:  bodyOptions.hornShape  || character.species.random('horn'),
      faceShape:  character.species.getFaceShape(character.genderCode),
    }

    let skinColor =  bodyOptions.skinColor || character.species.random('skin',character.genderCode);
    if (skinColor) {
      params.skinShade = bodyOptions.skinShade || Random.upTo(5)+1;
      params.skinColor = skinColor;
    }

    let furColor =   bodyOptions.furColor || character.species.random('fur',character.genderCode);
    if (furColor) {
      params.furShade = bodyOptions.furShade || Random.upTo(5)+1
      params.furColor = furColor;
    }

    let hairColor =  bodyOptions.hairColor || character.species.random('hair',character.genderCode);
    params.hairColor = (hairColor == 'human') ? randomHumanHairColor() : hairColor;

    if (params.skinColor == 'dragon') { params.skinColor = params.scaleColor; }
    if (params.eyeColor == 'dragon') { params.eyeColor = params.scaleColor; }
    if (params.eyeColor == 'human') { params.eyeColor = randomHumanEyeColor(); }

// console.log("Params:",params)

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

  function randomHumanEyeColor() {
    return Random.fromFrequencyMap({
      'brown': 60,
      'blue': 10,
      'hazel': 5,
      'amber': 5,
      'green': 2,
    });
  }

  return {
    build: build,
  };

})();
