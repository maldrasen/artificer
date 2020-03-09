Components.SummonMinionDialog = (function() {

  function init() {
    $(document).on('click','.summon-minions-button',Elements.buttonAction(fetchSummonable));
    $(document).on('click','.summon-minion-button',Elements.buttonAction(fetchActions));
    $(document).on('click','.summon-action-button',Elements.buttonAction(executeSummon));
  }

  // === Summon Minion Select ===

  function fetchSummonable() {
    Renderer.sendCommand('character.get-summonable');
  }

  // TODO: Eventually we'll have sex actions that can involve multiple minions
  //       at once. When that happens we'll need to adjust get-summon-actions
  //       to handle an array of minion ids. For each action we'll need to show
  //       consent data for each minion involved in that action as well. It's a
  //       good thing we're showing the actions as a table, because each minion
  //       will need their own column in that. Actions will probably be limited
  //       to three others at most though.
  function openMinionSelect(e, data) {
    Components.MinionSelectDialog.open({
      title: 'Who should I summon to me?',
      minions: data.characters,
      limit: 1,
      minimum: 1,
      onConfirm: confirmed => {
        Renderer.sendCommand('character.get-summon-actions', { id:confirmed[0] });
      }
    });
  }

  // === Summon Actions ===

  function fetchActions() {
    Renderer.sendCommand('character.get-summon-actions', { id:$(this).data('id') });
  }

  function openActions(e, data) {
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

    let actionLink = $('<a>',{ href:'#', class:'button button-small summon-action-button' }).
      append(action.name).
      data('code',action.code).
      data('id',id);

    let consentBadge = $('<div>',{ class:'consent-badge badge' }).
      addClass(`consent-level-${action.consent.level}`).
      append(action.consent.level);

    Elements.Tooltip.add(consentBadge, {
      content: buildConsentTooltip(action.consent)
    });

    let actionRow = $('<tr>',{ class:'action' }).
      append($('<td>').append(actionLink)).
      append($('<td>').append(consentBadge)).
      append($('<td>',{ class:'description' }).append(action.description));

    return actionRow;
  }

  function buildConsentTooltip(details) {
    let total = Math.round(details.desire * details.overallFactor * 100) / 100;

    return $(`<div class='consent-details padding'>
      <div class='margin-bottom'>${details.explanation}</div>
      <dl class='fs-small small-padding-bottom small-margin-bottom border-light-bottom attributes'>
        <dt class='lust'>Desire</dt>
        <dd class='lust'>${details.desire}</dd>
        <dt class='fear'>Fear</dt>
        <dd class='fear'>${details.fear}</dd>
      </dl>
      <dl class='fs-small small-padding-bottom small-margin-bottom border-light-bottom'>
        <dt class='fg-weak'>Difficulty Factor</dt>
        <dd class='fg-weak'>${details.difficultyFactor}</dd>
        <dt class='fg-weak'>Gender Factor</dt>
        <dd class='fg-weak'>${details.genderFactor}</dd>
        <dt class='fg-weak'>Injury Factor</dt>
        <dd class='fg-weak'>${details.injuryFactor}</dd>
        <dt class='fg-weak'>Aspect Factor</dt>
        <dd class='fg-weak'>${details.aspectFactor}</dd>
        <dt>Overall Factor</dt>
        <dd>${details.overallFactor}</dd>
      </dl>
      <dl class='fs-small'>
        <dt class='fg-strong'>Total Desire</dt>
        <dd class='consent-level-${details.level}'>${total}</dd>
      </dl>
    </div>`);
  }

  function executeSummon() {
    Renderer.sendCommand('character.start-summon-action', { code:$(this).data('code'), id:$(this).data('id') });
    Renderer.removeOverlay();
    Elements.Dialog.close();
  }

  return { init, openMinionSelect, openActions };

})();
