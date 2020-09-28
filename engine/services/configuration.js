Artificer.Configuration = (function() {

  function load(scenario) {
    console.log(`> Loading Configuration (${scenario})`);
    Artificer.Configuration = JSON.parse(fs.readFileSync(`${ROOT}/scenarios/${scenario}/configuration.json`));
  }

  return { load }

})();
