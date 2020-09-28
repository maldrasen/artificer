global.Configuration = (function() {
  let data;

  function load(scenario) {
    console.log(`> Loading Configuration (${scenario})`);
    data = JSON.parse(require('fs').readFileSync(`${ROOT}/${scenario}/configuration.json`));
  }

  function get(key) { return data[key]; }

  return { load, get }

})();
