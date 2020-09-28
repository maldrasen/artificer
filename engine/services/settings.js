const fs = require('fs');

global.Settings = (function() {
  const filepath = `${ROOT}/settings.json`;

  // The init() function reads the settings.json file for the player's settings.
  // If the file doesn't exist the default settings are used. The settings file
  // is only written when and the settings are set.
  function init() {
    console.log("> Loading Settings");
    fs.exists(filepath, exists => {
      loadData(exists ? JSON.parse(fs.readFileSync(filepath)) : {});
    })
  }

  function loadData(data) {
    Settings.DebugSwitches = {};
    Settings.Metric = !! data.metric;
    Settings.FutaPronouns = (data.futaPronouns == 'she/her') ? 'she/her' : 'shi/hir';
  }

  function fetch() {
    return {
      metric: Settings.Metric,
      futaPronouns: Settings.FutaPronouns,
    };
  }

  // TODO: When the settings are changed we should update all of the character
  // descriptions because going between she and shi or metric and stupid
  // could change all of the description text. The problem with this though is
  // that the settings are separate to the game itself, so there may not be a
  // player or characters when the settings are changed. We could only change
  // settings when the game is running, but that won't really solve the problem
  // because the settings can change, then a game is loaded with old
  // descriptions. I think the only way to really fix this is to save some kind
  // of key based on the settings when a description is loaded. When we pull
  // up a description we then check to see if the settings have changed, and
  // regenerate the description when needed. Sounds like a crazy amount of
  // effort, cache invalidation shit and all, so maybe do this later then I
  // think.
  async function update(data) {
    loadData(data);
    fs.writeFile(filepath, JSON.stringify(data), (error) => {
      if (error) { `Error: Cannot save settings. ${error}` }
    });
  }

  return { init, fetch, update }

})();
