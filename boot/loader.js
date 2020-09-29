global.Loader = (function() {

  function loadScenario() {
    console.log(`> Loading ${Configuration.scenario}:${Configuration.version} (${Environment.name})`)
    each(Configuration.packages, package => {
      loadPackage(package);
    });
  }

  function loadPackage(package) {
    console.log(`  - ${package}`);
  }

  function loadDirectory(path) {
    console.log(`  - ${path}`);
  }

  return { loadDirectory, loadScenario };

})();

// Old loader

// global.Loader = (function() {
//
//   // Load all of the mods in the /data directory. Artificer's standard content
//   // is loaded by the mod loader in order to ensure that the mod content can
//   // have the same level of richness as the base game.
//   function loadAllData(callback) {
//     loadDataFrom('artificer');
//
//     fs.readdir(`${ROOT}/data`, (error, items) => {
//       each(items, (item) => {
//         if (item != 'artificer') {
//           loadDataFrom(item);
//         }
//       });
//     });
//
//     callback();
//   }
//
//   // Load a single mod.
//   //   files specified in sharedFiles will be required in both the main and client threads.
//   //   files specified in clientFiles will only be required in the render thread.
//   //   files specified in engineFiles will only be required in the main thread.
//   function loadDataFrom(mod) {
//     let manifest = fetchManifest(mod);
//     if (manifest) {
//       let clientFiles = [];
//
//       each(manifest.sharedFiles||[], glob => {
//         each(unGlob(mod,glob), file => {
//           require(`${ROOT}/data/${mod}/${file}`);
//           clientFiles.push(file);
//         });
//       });
//
//       each(manifest.clientFiles||[], glob => {
//         each(unGlob(mod,glob), file => {
//           clientFiles.push(file);
//         });
//       });
//
//       each(manifest.engineFiles||[], glob => {
//         each(unGlob(mod,glob), file => {
//           require(`${ROOT}/data/${mod}/${file}`);
//         });
//       });
//
//       if (typeof Browser != 'undefined') {
//         Browser.send('engine.mod-loaded',{ name:mod, clientFiles:clientFiles });
//       }
//     }
//   }
//
//   // Returns either a file or a list of files if the manifest is specifying a
//   // glob (filename in the form dir/*)
//   function unGlob(mod,glob) {
//     let match = glob.match(/(.+)\*$/);
//     if (match == null) {
//       return [glob];
//     }
//
//     let directory = `${ROOT}/data/${mod}/${match[1]}`;
//     return fs.readdirSync(directory).map(file => {
//       return `${match[1]}${file}`;
//     });
//   }
//
//   function fetchManifest(name) {
//     try {
//       return JSON.parse(fs.readFileSync(`${ROOT}/data/${name}/manifest.json`,'utf8'));
//     } catch(e) {
//       console.error(`\n!!! Error reading manifest.json from the ${name} mod. Make sure the file exists and contains correctly formatted JSON.\n${e}\n`);
//     }
//   }
//
//   return { loadAllData };
//
// })();
