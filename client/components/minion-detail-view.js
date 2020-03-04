Components.MinionDetailView = (function() {
  let minion;
  let flags;

  function init() {
    $(document).on('click','.rename-minion.button',Elements.buttonAction(openRenameDialog));
    $(document).on('click','.summon-minion.button',Elements.buttonAction(getSummonActions));
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

    view.find('.attributes dd.physical .value').append(minion.physical);
    view.find('.attributes dd.physical .word').append(minion.physicalWord);
    view.find('.attributes dd.personal .value').append(minion.personal);
    view.find('.attributes dd.personal .word').append(minion.personalWord);
    view.find('.attributes dd.mental .value').append(minion.mental);
    view.find('.attributes dd.mental .word').append(minion.mentalWord);
    view.find('.attributes dd.magical .value').append(minion.magical);
    view.find('.attributes dd.magical .word').append(minion.magicalWord);
    view.find('.attributes dd.fear .value').append(minion.fear);
    view.find('.attributes dd.fear .word').append(minion.fearWord);
    view.find('.attributes dd.loyalty .value').append(minion.loyalty);
    view.find('.attributes dd.loyalty .word').append(minion.loyaltyWord);

    view.find('.description-row').append(minion.description);

    addAspects(minion.skillAspects,       view.find('.skill-aspects'));
    addAspects(minion.personalityAspects, view.find('.personality-aspects'));
    addAspects(minion.sexualAspects,      view.find('.sexual-aspects'));

    if (Components.MinionListView.isSummonAvailable()) {
      view.find('.summon-minion.button').removeClass('hide');
    }

    Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
    Components.EquipmentFrame.build(minion);
  }

  function addAspects(aspects, element) {
    each(aspects, aspect => { element.
      append($('<dt>').append(aspect.name)).
      append($('<dd>').append(`<span class='level'>Level ${aspect.level}</span><span class='strength'>${aspect.strength} xp</span>`));
    });
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

  // === Summon Minion ===

  function getSummonActions() {
    Renderer.sendCommand('character.get-summon-actions', { id:minion.id });
  }

  function openSummonDialog() {
    Elements.Dialog.open({
      title: 'Summon Minion',
      id: 'summonMinion',
      template: '#summonMinionDialogTemplate',
      dialog: 'medium',
    });
  }

  return { init, open, build };

})();
