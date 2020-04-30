global.ElfNameGenerator = (function() {

  async function getNames(character) {
    const restriction = (character.genderCode == 'male') ? 'male' : 'not-male'
    const position = (Random.upTo(50) == 0) ? 'pre' : 'last';

    const first = await Name.findAll({
      where: { species:'elf', position:'first', restriction:restriction },
      order: Sequelize.literal('random()'),
      limit: 1,
    });

    const last = await Name.findAll({
      where: { species:'elf', position:position },
      order: Sequelize.literal('random()'),
      limit: 1,
    });

    return {
      first: first[0],
      last: last[0],
    };
  }

  return { getNames };

})();
