Components.MinionSelectDialog = (function() {

  function init() {

  }

  // Opens a dialog with the given minions so that they can be selected for
  // some operation. Options:
  //
  //     title:     The dialog title.
  //     minions:   The array of minions.
  //     limit:     Cap on the number of minions that can be selected.
  //     onSelect:  Callback function called with a minion is selected.
  //     onConfirm: Callback function called when the dialog is closed positivly.
  //
  function open(options) {
    $('#minionSelectCover').removeClass('hide');

    let dialog = $('#minionSelectDialog').removeClass('hide');
    dialog.data('limit',options.limit);
    dialog.data('onSelect',options.onSelect);
    dialog.data('onConfirm',options.onConfirm);
    dialog.find('H2.title').empty().append(options.title || '');
    dialog.find('.status').empty().addClass('hide');
    dialog.find('.minions').empty().append(getMinions(options.minions));
  }

  function getMinions(minions) {
    return minions.map(minion => {
      console.log(minion)

      let portrait = $('<img>',{ src:minion.portrait });
      let name = $('<span>',{ class:'name' }).append(minion.name);
      let attributes = $('<span>',{ class:'attributes' }).append(`${minion.gender} ${minion.species}`)

      return $('<li>',{ class:'minion' }).data('id',minion.id).append(portrait).append(name).append(attributes);
    });
  }

  return { init, open };

})();
