Artificer.Settings = (function() {

  const defaultSettings = {
    metric: false,
    futaPronouns: 'shi/hir'
  };

  const filepath = `${ROOT}/settings.json`;
  const settings = {};

  // The init() function reads the settings.json file for the player's settings.
  // If the file doesn't exist the default settings are used. The settings file
  // is only written when and if the settings are set.
  function init() {
    fs.exists(filepath, exists => {
      set(exists ? JSON.parse(fs.readFileSync(filepath)) : defaultSettings);
    });
  }

  function set(data) {
    settings.metric = !! data.metric;
    settings.futaPronouns = (data.futaPronouns == 'she/her') ? 'she/her' : 'shi/hir';
  }

  async function update(data) {
    set(data);
    fs.writeFile(filepath, JSON.stringify(settings), (error) => {
      if (error) { `Error: Cannot save settings. ${error}` }
    });
  }

  function fetch() { return settings; }
  function metric() { return settings.metric; }
  function futaPronouns() { return settings.futaPronouns; }

  return {
    init,
    update,
    fetch,
    metric,
    futaPronouns,
  };

})();
