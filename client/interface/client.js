global.Client = (function() {

  // Need to see if this is ever actually used, because otherwise this does
  // nothing.
  function init() {
    // ipcRenderer.on('engine.mod-loaded', (transport, mod) => {
    //   console.log(`> Loading Mod [${mod.name}]`);
    //   each(mod.clientFiles, (file) => {
    //     if (! file.match(/\.html$/)) {
    //       require(`${ROOT}/data/${mod.name}/${file}`);
    //     }
    //   });
    // });
  }

  return {
    init: init
  };

})();
