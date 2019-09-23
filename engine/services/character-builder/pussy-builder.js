global.PussyBuilder = (function() {

  function build(character, options) {
    return new Promise((resolve, reject) => {
      if (character.id == null) { reject('Character must be persisted.'); }
      if (character.gender.pussy == false) { return resolve(); }

      let params = CharacterBuilder.baseline('pussy', options, character.species, {
        character_id: character.id,
        shape: 'normal',
        placement: 'normal',
        width: null,
        outerLabiaSize: Random.upTo(5)+1,
        innerLabiaLength: Random.geometric(30)+10,
        clitLength: Random.geometric(15),
        clitWidth: Random.upTo(10)+5,
        prolapseLength: 0,
        cervixWidth: 0,
        cervixElasticity: 1,
        elasticity: 4,
        urethraWidth: 2,
        urethraElasticity: 1,
      });

      if (params.width == null) { params.width = getWidth(character.species); }

      Pussy.create(params).then(resolve);
    });
  }

  function getWidth(species) {
    let average = ObjectUtility.fetch(species, 'bodyOptions', 'pussy', 'averageSize') || 40;
    let width = Random.tightlyBound(average, Math.round(average/4));
    return Math.round(width);
  }

  return { build:build }

})();
