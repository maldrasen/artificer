global.BodyFactory = (function(){
  "use strict";

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.gender == null) { reject('Gender must be set before body can be built.'); }
      if (character.race == null) { reject('Race must be set before body can be built.'); }
      if (character.id == null) { reject('Character must be persisted.'); }

      let body = new Body({ character_id:character.id });

      findHeightAndWeight(body, character, options);

      let skinColor = options.skinColor   || character.race.bodyOptions.skinColor  || randomColorFor(character.race,'skin');
      let furColor = options.furColor     || character.race.bodyOptions.furColor   || randomColorFor(character.race,'fur');
      let scaleColor = options.scaleColor || character.race.bodyOptions.scaleColor || randomColorFor(character.race,'scale');
      let hairColor = options.hairColor   || character.race.bodyOptions.hairColor  || randomColorFor(character.race,'hair');

      if (skinColor) {
        let skinShade = options.skinShade || Random.upTo(5)+1;
        body.setSkinColor(skinColor);
        body.setSkinShade(skinShade);
      }

      if (furColor) {
        let furShade = options.furShade || Random.upTo(5)+1
        body.setFurColor(furColor);
        body.setFurShade(furShade);
      }

      if (hairColor == 'human') {
        hairColor = randomHumanHairColor();
      }

      if (scaleColor) { body.setScaleColor(scaleColor); }
      if (hairColor) { body.setHairColor(hairColor); }

      let tail = options.tailShape || character.race.bodyOptions.tailShape;
      if (tail) {
        body.setTailShape(tail);
      }

      body.save((id) => {
        resolve(character);
      });
    });
  }

  function randomColorFor(race, type) {
    let colors = ObjectUtility.fetch(race, 'bodyOptions', `${type}Colors`);
    return colors ? Random.from(colors) : null;
  }

  function findHeightAndWeight(body, character, options) {
    if (options.height && options.weight) {
      body.setHeight(options.height);
      body.setWeight(options.weight);
      return;
    }
    if (options.weight) { throw 'Weight cannot be specified alone'; }

    body.setHeight(options.height || character.race.randomHeight(character.gender.code));
    body.setBMI(character.race.bodyOptions.bmi || 20);
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
      'Blond':            100,
      'dark-blond':       200,
      'strawberry-blond': 50,
      'red':              30,
      'copper':           30,
      'white':            20,
    });
  }

  return { build:build };

})();
