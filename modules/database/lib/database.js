require('sqlite3').verbose();

global.Database = (function() {
  let database;
  let persistedModels = [];

  async function createDatabase() {
    resetLog();

    database = new Sequelize('sqlite://:memory:', {
      dialect: 'sqlite',
      operatorsAliases: [],
      logging: writeToLog,
    });

    await database.sync();

    postal.publish({ channel:'database', topic:'created' });
  }

  // TODO: This needs to delete all of the persisted models.
  async function clear() {

  }

  // Not sure if this is the way models should be created now actually...
  // There should be some way to do it on demand.

  // async function createModels() {
  //   await Promise.all(persistedModels.map(async model => {
  //     await model.createModel();
  //   }));
  //
  //   await database.sync();
  // }

  // === Logging ===

  function logPath() {
    return `${ROOT}/log/db.log`;
  }

  function resetLog() {
    try {
      if (fs.existsSync(logPath())) {
        fs.unlinkSync(logPath());
      }
    } catch(error) {}
  }

  function writeToLog(message) {
    if (Environment.databaseLogging) {
      fs.appendFile(logPath(), `${message}\n`, (error) => {
        if (error) { throw error; }
      });
    }
  }

  return {
    createDatabase,
    clear,
    // createModels:       createModels,
    // addPersistedModel:  model => { persistedModels.push(model); },
    // getPersistedModels: () => { return persistedModels; },
    instance:           () => { return database; },
  };

})();
