global.GoblinNameGenerator = (function() {

  // Temp Kobold, because shit breaks without actual names
  function getNames(character) {
    return new Promise((resolve, reject) => {
      let restriction = (character.genderCode == 'male') ? 'male' : 'not-male'

      Promise.all([
        Name.findAll({
          where: { species:'goblin', position:'first', restriction:restriction },
          order: Sequelize.literal('random()'),
          limit: 1,
        }),
        Name.findAll({
          where: { species:'goblin', position:'last' },
          order: Sequelize.literal('random()'),
          limit: 1,
        })
      ]).then(names => {
        resolve({
          first: names[0][0],
          last:  names[1][0]
        });
      });
    });
  }

  return { getNames:getNames };

})();
