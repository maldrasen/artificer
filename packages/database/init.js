global.Sequelize = require('sequelize');

Loader.onScenarioLoad(() => {
  Database.addPersistedModel(Flag);
})
