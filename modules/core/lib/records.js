global.Records = (function() {

  async function saveToFile(gamename) {
    let filename = `${Flag.lookup('player.first-name')}.${normalizeFilename(gamename)}`
    if (filename.length > 60) { return reject('Savegame filename is too long'); }

    await saveGame(filename);
  }

  async function loadFromFile(filename) {
    await Game.clear();
    await loadGame(JSON.parse(fs.readFileSync(`${ROOT}/saves/${filename}.json`)));
  }

  async function saveGame(filename) {
    let savedGame = { flags:Flag.getAll(), models:{}};

    await Promise.all(Database.getModels().map(async model => {
      savedGame.models[model.name] = [];
      each((await model.findAll({ where:{} })), instance => {
        savedGame.models[model.name].push(instance.properties)
      });
    }));

    fs.writeFileSync(`${ROOT}/saves/${filename}.json`, JSON.stringify(savedGame));
  }

  async function loadGame(savedGame) {
    Flag.setAll(savedGame.flags);
    await Promise.all(Database.getModels().map(async model => {
      await loadAllInstances(model, savedGame.models[model.name]);
    }));
  }

  async function loadAllInstances(model, instances) {
    await Promise.all(instances.map(instance => {
      return model.create(instance);
    }));
  }

  function deleteSaveFile(filename) {
    return new Promise(resolve => {
      fs.unlink(`${ROOT}/saves/${filename}.json`, (error) => {
        resolve();
      });
    })
  }

  function listSaveFiles() {
    return new Promise((resolve,reject) => {
      fs.readdir(`${ROOT}/saves/`, (error, files) => {
        if (error) { reject(error) } else {
          let fileList = [];

          each(files, filename => {
            let parts = filename.split('.');
            if (parts.length == 3 && parts[2] == 'json') {
              fileList.push({
                filename: `${parts[0]}.${parts[1]}`,
                playerName: parts[0],
                gameName: parts[1].replace(/_/g,' ')
              });
            }
          });

          resolve(fileList);
        }
      });
    });
  }

  // Only allow basic letters numbers and dashes in filenames.
  function normalizeFilename(gamename) {
    return gamename.replace(/[^a-zA-Z0-9]/g,' ').replace(/\s+/g,'_');
  }

  return {
    saveToFile: saveToFile,
    loadFromFile: loadFromFile,
    listSaveFiles: listSaveFiles,
    deleteSaveFile: deleteSaveFile,
  };

})();
