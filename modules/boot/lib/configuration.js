global.Configuration = (function() {

  function load(package) {
    let config = require(`${ROOT}/modules/${package.scenario}/scenario.json`);
        config.scenario = package.scenario;
        config.version = package.version;
    global.Configuration = config;
  }

  return { load }

})();
