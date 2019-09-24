global.KoboldNameGenerator = (function() {

  // Kobold's only have a first name, which is picked randomly from the name
  // list.

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
