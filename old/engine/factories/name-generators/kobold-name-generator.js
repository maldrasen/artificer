global.KoboldNameGenerator = (function() {

  // Kobold's only have a first name, which is picked randomly from the name
  // list.

  async function getNames() {
    const name = await Name.findAll({
      where: { species:'kobold' },
      order: Sequelize.literal('random()'),
      limit: 1,
    });

    return { first:name[0] };
  }

  return { getNames:getNames };

})();
