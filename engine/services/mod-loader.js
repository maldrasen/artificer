const fs = require('fs');

global.ModLoader = (function() {

  // Load all of the mods in the /data directory. Artificer's standard content
  // is loaded by the mod loader in order to ensure that the mod content can
  // have the same level of richness as the base game.
  function loadAllData(callback) {
    console.log("\n=== Loading Data ===")
    loadDataFrom('artificer');

    fs.readdir(`${ROOT}/data`, (error, items) => {
      each(items, (item) => {
        if (item != 'artificer') {
          loadDataFrom(item);
        }
      });
    });

    callback();
  }

  // Load a single mod.
  //   files specified in sharedFiles will be required in both the main and client threads.
  //   files specified in clientFiles will only be required in the render thread.
  //   files specified in engineFiles will only be required in the main thread.
  function loadDataFrom(name) {
    let manifest = fetchManifest(name);
    if (manifest) {
      let clientFiles = [];

      each(manifest.sharedFiles||[], (file)=>{
        // console.log(`   - ${file}`);
        require(`${ROOT}/data/${name}/${file}`);
        clientFiles.push(file);
      });

      each(manifest.clientFiles||[], (file)=>{
        clientFiles.push(file);
      });

      each(manifest.engineFiles||[], (file)=>{
        // console.log(`   - ${file}`);
        require(`${ROOT}/data/${name}/${file}`);
      });

      if (typeof Browser != 'undefined') {
        Browser.send('engine.mod-loaded',{ name:name, clientFiles:clientFiles });
      }
    }
  }

  function fetchManifest(name) {
    console.log(`\n> Loading ${name}`);

    try {
      return JSON.parse(fs.readFileSync(`${ROOT}/data/${name}/manifest.json`,'utf8'));
    } catch(e) {
      console.error(`\n!!! Error reading manifest.json from the ${name} mod. Make sure the file exists and contains correctly formatted JSON.\n${e}\n`);
    }
  }

  return {
    loadAllData: loadAllData,
    loadDataFrom: loadDataFrom,
  }

})();
