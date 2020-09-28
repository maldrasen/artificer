const sql = require('sqlite3').verbose();

global.Database = (function() {
  let database;
  let persistedModels;

  function createDatabase(callback) {
    resetLog();

    database = new Sequelize('sqlite://:memory:', {
      dialect: 'sqlite',
      operatorsAliases: [],
      logging: writeToLog,
    });

    require(`${ROOT}/engine/models/animal`);
    require(`${ROOT}/engine/models/anus`);
    require(`${ROOT}/engine/models/available-event`);
    require(`${ROOT}/engine/models/available-mission`);
    require(`${ROOT}/engine/models/available-project`);
    require(`${ROOT}/engine/models/body`);
    require(`${ROOT}/engine/models/character`);
    require(`${ROOT}/engine/models/character-aspect`);
    require(`${ROOT}/engine/models/character-equipment`);
    require(`${ROOT}/engine/models/cock`);
    require(`${ROOT}/engine/models/flag`);
    require(`${ROOT}/engine/models/name`);
    require(`${ROOT}/engine/models/nipples`);
    require(`${ROOT}/engine/models/player`);
    require(`${ROOT}/engine/models/game`);
    require(`${ROOT}/engine/models/mission-progress`);
    require(`${ROOT}/engine/models/mouth`);
    require(`${ROOT}/engine/models/pussy`);
    require(`${ROOT}/engine/models/resource`);
    require(`${ROOT}/engine/models/tits`);

    // This array cannot be built until these model classes are all required.
    // Game needs to remain the first model in the list. The load function will
    // itterate through this list in a Promise.all and expect to have the Game
    // load as the first result.
    persistedModels = [
      Game,
      Flag,
      Animal,
      AvailableEvent,
      AvailableMission,
      AvailableProject,
      MissionProgress,
      Player,
      Character,
      CharacterAspect,
      CharacterEquipment,
      Body,
      Anus,
      Cock,
      Mouth,
      Nipples,
      Pussy,
      Tits,
      Resource];

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
    getPersistedModels: () => { return persistedModels; },
    createDatabase: createDatabase,
    instance: instance,
  };

})();