Components.SettingsDialog = (function() {
  let measurementSettings
  let futaSettings

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
      afterOpen: dialog => { build(dialog, data); },
    });
  }

  function build(dialog, data) {
    measurementSettings = new Elements.RadioButtons({ currentValue:data.metric, choices:[
      { label:'American', value:false },
      { label:'Metric',   value:true },
    ]});

    futaSettings = new Elements.RadioButtons({ currentValue:data.futaPronouns, choices:[
      { label:'Shi / Hir', value:'shi/hir' },
      { label:'She / Her', value:'she/her' },
    ]});

    dialog.find('.measurement-settings').append(measurementSettings.element);
    dialog.find('.futa-settings').append(futaSettings.element);
  }

  function acceptSettings() {
    const metric = measurementSettings.currentValue;
    const futaPronouns = futaSettings.currentValue;

    Renderer.sendCommand('game.update-settings',{ metric, futaPronouns });
    Elements.Dialog.close();
  }

  return { init, open };

})();
