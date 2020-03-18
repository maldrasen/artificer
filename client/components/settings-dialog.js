Components.SettingsDialog = (function() {

  function init() {
    $(document).on('click','.menu-show-settings',  Elements.buttonAction(fetchSettings));
    $(document).on('click','#settingsDialog .accept-settings',  Elements.buttonAction(acceptSettings));
  }

  // === Summon Minion Select ===

  function fetchSettings() {
    Renderer.sendCommand('game.fetch-settings');
  }

  function open(e, data) {
    Elements.Dialog.open({
      title: 'Settings',
      id: 'settingsDialog',
      template: '#settingsDialogTemplate',
      dialog: 'small',
    });

    Elements.RadioButtons.setValue($('#settingsDialog .radio-buttons.metric'),`${data.metric}`);
    Elements.RadioButtons.setValue($('#settingsDialog .radio-buttons.futa-pronouns'),data.futaPronouns);
    Elements.RadioButtons.wire();
  }

  function acceptSettings() {
    const metric = Elements.RadioButtons.getValue($('#settingsDialog .radio-buttons.metric'));
    const futaPronouns = Elements.RadioButtons.getValue($('#settingsDialog .radio-buttons.futa-pronouns'));

    Renderer.sendCommand('game.update-settings',{ metric, futaPronouns });
    Elements.Dialog.close();
  }

  return { init, open };

})();
