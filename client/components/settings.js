Components.Settings = (function() {

  function init() {
    $(document).on('click','.menu-show-settings',  Elements.buttonAction(fetchSettings));
  }

  // === Summon Minion Select ===

  function fetchSettings() {
    Renderer.sendCommand('game.fetch-settings');
  }

  function open(e, data) {
    Elements.Dialog.open({
      title: 'Settings',
      id: 'settings',
      template: '#settingsDialogTemplate',
      dialog: 'small',
    });

    console.log("Show Settings:",data)
  }

  return { init, open };

})();
