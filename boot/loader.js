global.Loader = (function() {

  async function load() {
    console.log(`> Loading ${Configuration.scenario}:${Configuration.version} (${Environment.name})`)
    Promise.all(Configuration.packages.map(async package => {
      await loadPackage(package);
    }));
  }

  async function loadPackage(package) {
    console.log(`  - ${package}`)
  }

  return { load }

})();
