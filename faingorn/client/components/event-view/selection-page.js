Components.EventView.SelectionPage = (function() {

  function init() {
    $(document).on('click', '#currentEvent .selection-button', Elements.buttonAction(acceptSelection));
  }

  // Selection Pages are for normal multiple choice options in an event.
  // Selection can have effect badges which can be displayed on the selection.
  // They are created like this:
  //
  //   selectionPage: true,
  //   selectionKey: 'question',
  //   selections:[
  //     { text:'Yes.', value:'yes', effects:['player fucks-horses 2']},
  //     { text:'No.',  value:'no',  effects:['player fucks-horses -1'], tooltip:"Tooltip Yo" },
  function build() {
    $('#currentEvent .selection-content').removeClass('hide');
    each(Components.EventView.currentStage().selections, selection => {
      $('#currentEvent .selection-list').append(buildSelection(selection));
    });
  }

  function buildSelection(selection) {
    let badges = $('<span>', { class:'badge-area' })
    let button = $('<a>',{ href:'#', class:'button selection-button' }).append(
      $('<span>',{ class:'text' }).append(selection.text)
    ).data('value',selection.value).append(badges);

    if (selection.tooltip) {
      Elements.Tooltip.add(button, { content:selection.tooltip, delay:50 });
      button.on('click',Elements.Tooltip.close);
    }

    each(selection.effects, strang => {
      button.addClass('with-badges');
      badges.append(new Elements.SelectionBadge(strang, Components.EventView.getActors()).build());
    });

    return $('<li>',{ class:'selection'}).append(button);
  }

  function acceptSelection() {
    Components.EventView.setChoice(Components.EventView.currentStage().selectionKey,$(this).data('value'));

    $.each($(this).find('.selection-badge'), (i, badgeElement) => {
      $(badgeElement).data('badge').execute();
    });

    $('#currentEvent .selection-content').addClass('hide');
    $('#currentEvent .selection-list').empty();
    Components.EventView.nextStage();
  }

  return { init, build };

})();
