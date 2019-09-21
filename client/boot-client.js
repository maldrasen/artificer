
// The Root is relative to the index.html file that loads this.
global.ROOT = `${__dirname}/../..`

// Configuration should be pulled from elsewhere eventually.
global.Configuration = { metric:false };

console.log('=== Booting Client Process ===');

require(`${ROOT}/shared/boot-shared.js`);
require(`${ROOT}/client/boot-system.js`);
require(`${ROOT}/client/boot-interface.js`);

$(document).ready(function() {
  console.log('=== Ready ===');

  // === Interface ===
  Renderer.init();

  ipcRenderer.on('engine.mod-loaded', (transport, mod)=>{
    console.log(`> Loading ${mod.name}`);
    each(mod.clientFiles, (file) => {
      console.log(`   - ${file}`);
      require(`${ROOT}/data/${mod.name}/${file}`);
    });
  })

  ipcRenderer.send('client.ready');

  console.log('=== Done ===');
});
