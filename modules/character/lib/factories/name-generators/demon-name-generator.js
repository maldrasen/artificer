global.DemonNameGenerator = (function() {

  async function getNames(character) {
    const restriction = (character.genderCode == 'male') ? 'male' : 'not-male'

    const first = await Name.findAll({
      where: { species:'demon', position:'first', restriction:restriction },
      order: Sequelize.literal('random()'),
      limit: 1,
    });

    const last = await Name.findAll({
      where: { species:'demon', position:'last' },
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
