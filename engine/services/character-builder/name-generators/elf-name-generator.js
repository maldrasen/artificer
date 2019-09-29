global.ElfNameGenerator = (function() {

  function getNames(character) {
    return new Promise((resolve, reject) => {
      let restriction = (character.genderCode == 'male') ? 'male' : 'not-male'
      let position = (Random.upTo(50) == 0) ? 'pre' : 'last';

      Promise.all([
        Name.findAll({
          where: { species:'elf', position:'first', restriction:restriction },
          order: Sequelize.literal('random()'),
          limit: 1,
        }),
        Name.findAll({
          where: { species:'elf', position:position },
          order: Sequelize.literal('random()'),
          limit: 1,
        }),
      ]).then(results => {
        let names = { first:results[0][0] }
            names[position] = results[1][0];

        resolve(names);
      });
    });
  }

  return { getNames:getNames };

})();
