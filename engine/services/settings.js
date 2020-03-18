const fs = require('fs');

global.Settings = (function() {

  // The init() function reads the settings.json file for the player's settings.
  // This file will probably get edited (although really all of the files can
  // be edited) so we are paranoid about how these are loaded, only accepting
  // expected values in the settings.
  function init() {
    console.log("> Loading Settings");
    loadData(JSON.parse(fs.readFileSync(`${ROOT}/settings.json`)));
  }

  function loadData(data) {
    Settings.Metric = !! data.metric;
    Settings.FutaPronouns = (data.futaPronouns == 'shi/hir') ? 'shi/hir' : 'she/her';
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
    fs.writeFile(`${ROOT}/settings.json`, JSON.stringify(data), (error) => {
      if (error) { `Error: Cannot save settings. ${error}` }
    });
  }

  return { init, fetch, update }

})();
