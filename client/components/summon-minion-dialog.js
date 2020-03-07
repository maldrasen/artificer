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

    buildActionTable(data);
  }

  function buildActionTable(data) {
    let table = $('<table>',{ class:'action-table' });

    each(Object.keys(data.actions).sort(), category => {
      table.append(buildCategoryRow(category));
      each(data.actions[category], action => {
        table.append(buildActionRow(action,data.id));
      });
    });

    $('#mainContent #summonMinionDialog').append(table);
  }

  // This is stupid, but colspan changes the border color for some eldritch and
  // unknowable reason.
  function buildCategoryRow(category) {
    let categoryCell = $('<td>').append($('<h2>').append(category));
    return $('<tr>',{ class:'category' }).append(categoryCell).append($('<td>')).append($('<td>'));
  }

  function buildActionRow(action,id) {
    console.log("Build Item:",action)

    let actionLink = $('<a>',{ href:'#', class:'button button-small summon-action-button' }).
      append(action.name).
      data('code',action.code).
      data('id',id);

    let consentBadge = $('<div>',{ class:'consent-badge badge' }).
      addClass(`consent-level-${action.consent.level}`).
      append(action.consent.level);

    let actionRow = $('<tr>',{ class:'action' }).
      append($('<td>').append(actionLink)).
      append($('<td>').append(consentBadge)).
      append($('<td>',{ class:'description' }).append(action.description));

    return actionRow;
  }

  function executeSummon() {
    Renderer.sendCommand('character.start-summon-action', { code:$(this).data('code'), id:$(this).data('id') });
    Renderer.removeOverlay();
    Elements.Dialog.close();
  }

  return { init, open };

})();
