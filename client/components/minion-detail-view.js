Components.MinionDetailView = (function() {
  let minion;
  let flags;

  function init() {
    $(document).on('click','.rename-minion.button',Elements.buttonAction(openRenameDialog));
    $(document).on('click','.accept-name-button',Elements.buttonAction(executeRename));

    $(document).on('keydown', '#renameMinionDialog .name-field', e => {
      if (e.keyCode == 13) { executeRename(); }
    });
  }

  function open(event, data) {
    minion = data.minion;
    flags = data.flags;

    Renderer.showMinion();
    Renderer.unlock();
  }

  function build() {
    let view = $('#overlayContent .minion-detail-view');
    view.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));
    view.find('.name-section .name').append(minion.name);
    view.find('.name-section .gender').append(minion.gender);
    view.find('.name-section .species').append(minion.species);
    view.find('.top-row .health-value').append(minion.health);
    view.find('.top-row .health-word').append(minion.healthWord);
    view.find('.top-row .health-section').addClass(`fg-health-${minion.healthClass}`);
    view.find('.top-row .energy-word').append(minion.energyWord);
    view.find('.top-row .energy-word').addClass(`fg-energy-${minion.energy}`);
    view.find('.description-area').append(minion.description);

    Components.CharacterViews.buildAspects(view, minion, 'minion');
    Components.EquipmentFrame.build(minion);
    Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
  }


  // === Rename Minion ===

  function openRenameDialog() {
    Elements.Dialog.open({
      title: 'Rename Minion',
      id: 'renameMinion',
      template: '#renameMinionDialogTemplate',
      dialog: 'small',
    });

    $('#mainContent #renameMinionDialog .orig-name').append(minion.name);
    $('#mainContent #renameMinionDialog .name-field').focus();
  }

  function executeRename() {
    let name = $('#renameMinionDialog .name-field').val().trim();
    if (name.length > 0) {
      Elements.Dialog.close();
      Renderer.removeOverlay();
      Renderer.sendCommand('character.rename',{ id:minion.id, name:name });
    }
  }

  return { init, open, build };

})();
