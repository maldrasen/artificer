Components.SummonMinionDialog = (function() {

  function init() {
    $(document).on('click','.summon-minion-button',Elements.buttonAction(fetchActions));
    $(document).on('click','.summon-action-button',Elements.buttonAction(executeSummon));
  }

  function fetchActions() {
    Renderer.sendCommand('character.get-summon-actions', { id:$(this).data('id') });
  }

  function open(e, data) {
    Elements.Dialog.open({
      title: 'Summon Minion',
      id: 'summonMinion',
      template: '#summonMinionDialogTemplate',
      dialog: 'medium',
    });

    each(Object.keys(data.actions).sort(), category => {
      $('#mainContent #summonMinionDialog').append(buildSummonActionCategory(category, data.actions[category], data.id));
    });
  }

  function buildSummonActionCategory(category, actions, id) {
    let actionList = $('<ul>',{ class:'action-list' });

    each(actions, action => {
      actionList.append(buildSummonActionItem(action, id));
    });

    let categoryElement = $('<div>',{ class:'action-category' });
        categoryElement.append($('<h2>').append(category));
        categoryElement.append(actionList);

    return categoryElement;
  }

  function buildSummonActionItem(action, id) {
    console.log("Build Item:",action)

    let actionLink = $('<a>',{ href:'#', class:'button button-primary button-small summon-action-button' }).
      append(action.name).
      data('code',action.code).
      data('id',id);

    let actionItem = $('<li>',{ class:'action-item' }).
      append(actionLink).
      append($('<span>',{ class:'description' }).append(action.description));

    return actionItem;
  }

  function executeSummon() {
    Renderer.sendCommand('character.start-summon-action', { code:$(this).data('code'), id:$(this).data('id') });
    Renderer.removeOverlay();
    Elements.Dialog.close();
  }

  return { init, open };

})();
