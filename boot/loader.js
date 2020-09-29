Artificer.Loader = (function() {

  async function load() {
    console.log(`> Loading ${Artificer.Configuration.scenario}:${Artificer.Configuration.version} (${Artificer.Environment.name})`)
    Promise.all(Artificer.Configuration.packages.map(async package => {
      await loadPackage(package);
    }));
  }

  async function loadPackage(package) {
    console.log(`  - ${package}`)
  }

  return { load }

})();
