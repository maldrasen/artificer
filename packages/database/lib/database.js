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
  }

  async function createModels() {
    await Promise.all(persistedModels.map(async model => {
      await model.createModel();
    }));
  }

  function logPath() {
    return `${ROOT}/db.log`;
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
    createDatabase:     createDatabase,
    createModels:       createModels,
    addPersistedModel:  model => { persistedModels.push(model); },
    getPersistedModels: () => { return persistedModels; },
    instance:           () => { return database; },
  };

})();
