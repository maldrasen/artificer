global.DemonNameGenerator = (function() {

  // Temp Kobold, because shit breaks without actual names
  function getNames() {
    return new Promise((resolve, reject) => {
      Name.findAll({
        where: { species:'kobold' },
        order: Sequelize.literal('random()'),
        limit: 1,
      }).then(names => {
        resolve({ first:names[0] });
      });
    });
  }

  return { getNames:getNames };

})();
