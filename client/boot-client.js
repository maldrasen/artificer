
// The Root is relative to the index.html file that loads this.
global.ROOT = `${__dirname}/../..`

console.log('=== Booting Client ===');

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
  RendererCommands.init();
  Client.init();

});
