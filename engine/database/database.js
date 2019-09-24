const fs = require('fs');
const sql = require('sqlite3').verbose();

global.Database = (function() {
  let database;

  function createDatabase(callback) {
    resetLog();

    database = new Sequelize('sqlite://:memory:', {
      dialect: 'sqlite',
      operatorsAliases: [],
      logging: writeToLog,
    });

    require(`${ROOT}/engine/models/anus`);
    require(`${ROOT}/engine/models/balls`);
    require(`${ROOT}/engine/models/body`);
    require(`${ROOT}/engine/models/character`);
    require(`${ROOT}/engine/models/cock`);
    require(`${ROOT}/engine/models/name`);
    require(`${ROOT}/engine/models/nipples`);
    require(`${ROOT}/engine/models/player`);
    require(`${ROOT}/engine/models/game`);
    require(`${ROOT}/engine/models/mouth`);
    require(`${ROOT}/engine/models/pussy`);
    require(`${ROOT}/engine/models/tits`);

    database.sync().then(callback);
  }

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
    fs.appendFile(logPath(), `${message}\n`, (error) => {
      if (error) { throw error; }
    });
  }

  function instance() {
    return database;
  }

  return {
    createDatabase: createDatabase,
    instance: instance,
  };

})();
