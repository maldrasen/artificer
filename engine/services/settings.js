const fs = require('fs');

global.Settings = (function() {

  // The init() function reads the settings.json file for the player's settings.
  // This file will probably get edited (although really all of the files can
  // be edited) so we are paranoid about how these are loaded, only accepting
  // expected values in the settings.
  function init() {
    console.log("> Loading Settings");

    let data = JSON.parse(fs.readFileSync(`${ROOT}/settings.json`));

    Settings.Metric = !! data['metric'];
    Settings.FutaPronouns = (data['futa-pronouns'] == 'shi/hir') ? 'shi/hir' : 'she/her';
  }

  function fetch() {
    return {
      metric: Settings.Metric,
      futaPronouns: Settings.FutaPronouns,
    };
  }

  // When the settings are changed we also need to update all of the character
  // descriptions because going between she and shi or metric and stupid
  // could change all of the description text.
  function update() {
  }

  return { init, fetch, update }

})();
