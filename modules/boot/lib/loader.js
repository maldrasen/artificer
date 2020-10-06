global.Loader = (function() {
  let _initFunctions = [];

  function loadModule(mod) {
    console.log(`  - Loading ${mod} module`);

    loadDirectory(`${ROOT}/modules/${mod}/lib`);
    loadDirectory(`${ROOT}/modules/${mod}/data`);
    loadFile(`${ROOT}/modules/${mod}/init.js`);
  }

  function loadFile(path) {
    if (fs.existsSync(path)) { require(path); }
  }

  function loadDirectory(path) {
    if (fs.existsSync(path)) {
      each(fs.readdirSync(path, { withFileTypes:true }), item => {
        if (item.isFile() && item.name.match(/\.js$/)) {
          require(`${path}/${item.name}`);
        }
        if (item.isDirectory()) {
          loadDirectory(`${path}/${item.name}`);
        }
      });
    }
  }

  return {
    loadDirectory,
    loadModule,
  };

})();
