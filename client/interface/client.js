global.Client = (function() {

  function init() {
    ipcRenderer.on('engine.mod-loaded', (transport, mod) => {
      console.log(`> Loading Mod [${mod.name}]`);
      each(mod.clientFiles, (file) => {
        console.log(`   - ${file}`);
        require(`${ROOT}/data/${mod.name}/${file}`);
      });
    });

    ipcRenderer.send('client.ready');
  }

  return {
    init: init
  };

})();
