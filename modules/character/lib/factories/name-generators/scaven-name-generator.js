global.ScavenNameGenerator = (function() {

  // Rat names are stupid simple. The first and last names are pulled from the
  // same list. There are no restrictions or adjustments.

  async function getNames() {
    const names = await Name.findAll({
      where: { species:'scaven' },
      order: Sequelize.literal('random()'),
      limit: 2,
    });

    return {
      first: names[0],
      last: names[1],
    };
  }

  return { getNames:getNames };

})();
