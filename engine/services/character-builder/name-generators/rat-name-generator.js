global.RatNameGenerator = (function() {

  // Rat names are stupid simple. The first and last names are pulled from the
  // same list. There are no restrictions or adjustments.

  function getNames() {
    return new Promise((resolve, reject) => {
      Name.findAll({
        where: { species:'rat' },
        order: Sequelize.literal('random()'),
        limit: 2,
      }).then(names => {
        resolve({
          first:names[0].name,
          last:`e'${names[1].name}`,
        })
      });
    });
  }

  return { getNames:getNames };

})();
