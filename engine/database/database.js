const fs = require('fs');
const sql = require('sqlite3').verbose();
const Sequelize = require('sequelize');

global.Database = (function() {
  let database;

  function createDatabase(callback) {
    resetLog();

    database = new Sequelize('sqlite://:memory:', {
      dialect: 'sqlite',
      operatorsAliases: [],
      logging: writeToLog,
    });

    Schema.init(database);
    DatabaseObjects.init();

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

  return {
    createDatabase: createDatabase,
  };

})();
