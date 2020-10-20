require('sqlite3').verbose();

global.Database = (function() {
  let database;

  let registeredModels = [];
  let persistedModels = [];
  let waiting = true;

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

  async function clear() {
    await Promise.all(persistedModels.map(async model => {
      return await model.destroy({ where:{}, truncate:true });
    }));
  }

  // Not sure if this is the way models should be created now actually...
  // There should be some way to do it on demand.


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

  // === Database Schema Creation ===
  // Fully creating the database is a bit of a messy process. First all of the
  // model classes call the registerModel() function with themselves as soon as
  // their file is loaded.
  //
  // After the database is created in memory the load() function is triggered
  // from the DatabaseDirector. This function takes all of the registered
  // models and creates their schema in the in memory database. That then
  // triggers the data loading if there is any and sends the final ready
  // message. It's also possible for models to be registered at any time after
  // the database has been created. When that happens the schema for that model
  // is just created immeadietly.

  async function registerModel(model) {
    if (waiting) {
      registeredModels.push(model);
    } else {
      await activateModel(model);
    }
  }

  async function activateModel(model) {
    console.log(`  - Activating ${model.name} Model`)
    await model.createModel();
    await database.sync();

    persistedModels.push(model);

    postal.publish({ channel:"database", topic:`load.${model.name}` });
  }

  async function load() {
    await Promise.all(registeredModels.map(async model => {
      await activateModel(model);
    }));

    waiting = false;
    registeredModels = [];
  }

  return {
    createDatabase,
    clear,
    registerModel,
    load,
    getModels: () => { return persistedModels; },
    instance: () => { return database; },
  };

})();
