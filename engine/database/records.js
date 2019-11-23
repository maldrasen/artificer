global.Records = (function() {

  function saveToFile(gamename) {
    return new Promise((resolve, reject) => {
      Player.instance().then(player => {
        let filename = `${player.firstName}.${normalizeFilename(gamename)}`
        if (filename.length > 60) { return reject('Savegame filename is too long'); }
        saveGame(filename).then(resolve);
      });
    });
  }

  function saveGame(filename) {
    return new Promise((resolve, reject) => {
      let savedGame = { models:{}};
      Promise.all(Database.getPersistedModels().map(model => {
        return new Promise(res => {
          model.findAll({ where:{} }).then(instances => {
            savedGame.models[model.name] = [];
            each(instances, instance => {
              savedGame.models[model.name].push(instance.toJSON());
            })
            res();
          });
        })
      })).then(() => {
        fs.writeFile(`${ROOT}/saves/${filename}.json`, JSON.stringify(savedGame), (error) => {
          if (error) { reject(error) } else {
            resolve();
          }
        });
      });
    });
  }

  function loadFromFile(filename) {
    return new Promise((resolve,reject) => {
      Game.clear().then(() => {
        fs.readFile(`${ROOT}/saves/${filename}.json`, (error, json) => {
          if (error) { reject(error) } else {
            loadGame(JSON.parse(json)).then(resolve);
          }
        })
      });
    });
  }

  function loadGame(savedGame) {
    return new Promise(resolve => {
      Promise.all(Database.getPersistedModels().map(model => {
        return loadAllInstances(model, savedGame.models[model.name])
      })).then(resolve);
    })
  }

  function loadAllInstances(model, instances) {
    return new Promise(resolve => {
      Promise.all(instances.map(instance => {
        return model.create(instance);
      })).then(resolve);
    });
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
