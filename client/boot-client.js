
// The Root is relative to the index.html file that loads this.
global.ROOT = `${__dirname}/../..`

console.log('=== Booting Client Process ===');

require(`${ROOT}/shared/boot-shared.js`);
require(`${ROOT}/client/boot-system.js`);
require(`${ROOT}/client/boot-interface.js`);

$(document).ready(function() {

  // === Init Elements ===
  Elements.init();
  Elements.PagedContent.init();
  Elements.Chooser.init();
  Elements.ScrollingPanel.init();
  Elements.RadioButtons.init();

  // === Init Interface ===
  Renderer.init();

  // View mods should be pretty rare I think...
  ipcRenderer.on('engine.mod-loaded', (transport, mod)=>{
    console.log(`> Loading Mod [${mod.name}]`);
    each(mod.clientFiles, (file) => {
      console.log(`   - ${file}`);
      require(`${ROOT}/data/${mod.name}/${file}`);
    });
  });

  ipcRenderer.send('client.ready');

  console.log('=== Client Booted ===');

});
