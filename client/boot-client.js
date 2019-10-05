
// The Root is relative to the index.html file that loads this.
global.ROOT = `${__dirname}/../..`

console.log('=== Booting Client ===');

require(`${ROOT}/client/boot-interface.js`);

$(document).ready(function() {

  // === Init Elements ===
  Elements.init();
  Elements.Chooser.init();
  Elements.Confirm.init();
  Elements.PagedContent.init();
  Elements.RadioButtons.init();
  Elements.ScrollingPanel.init();

  // === Init Components ===
  Components.EventView.init();
  Components.LocationView.init();
  Components.MainMenu.init();
  Components.PlanView.init();
  Components.SavedGames.init();

  // === Init Interface ===
  Renderer.init();
  RendererCommands.init();
  Client.init();

});
