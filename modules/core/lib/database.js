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
  // message.
  //
  // We load all of the models as soon as the database is built, but I think
  // theoritically a model could be added at any point before it's used. Not
  // sure if we need to support that now, but if we need to do that in the
  // future we can rewrite registerModel() to check to see if the database is
  // ready, creating the model right away if it is, or adding it to the array
  // to be built if not. We'll need to add a flag and another array if we go
  // that route though.
  function registerModel(model) { persistedModels.push(model); }

  async function load() {
    await Promise.all(persistedModels.map(async model => {
      await model.createModel();
    }));

    log('Finished Initializing Database')

    await database.sync();
  }

  return {
    createDatabase,
    clear,
    registerModel,
    load,
    instance: () => { return database; },
  };

})();
