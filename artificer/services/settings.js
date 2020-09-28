const fs = require('fs');

global.Settings = (function() {
  const filepath = `${ROOT}/settings.json`;

  // The init() function reads the settings.json file for the player's settings.
  // If the file doesn't exist the default settings are used. The settings file
  // is only written when and if the settings are changed.
  function init() {
    console.log("> Loading Settings");
    fs.exists(filepath, exists => {
      loadData(exists ? JSON.parse(fs.readFileSync(filepath)) : {});
    })
  }

  function loadData(data) {
    Settings.Metric = !! data.metric;
    Settings.FutaPronouns = (data.futaPronouns == 'she/her') ? 'she/her' : 'shi/hir';
  }

  function fetch() {
    return {
      metric: Settings.Metric,
      futaPronouns: Settings.FutaPronouns,
    };
  }

  async function update(data) {
    loadData(data);
    fs.writeFile(filepath, JSON.stringify(data), (error) => {
      if (error) { `Error: Cannot save settings. ${error}` }
    });
  }

  return { init, fetch, update }

})();
