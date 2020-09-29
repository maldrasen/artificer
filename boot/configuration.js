Artificer.Configuration = (function() {

  function load(package) {
    let config = require(`${ROOT}/scenarios/${package.scenario}/configuration.json`);
        config.scenario = package.scenario;
        config.version = package.version;

    Artificer.Configuration = config;
  }

  return { load }

})();
