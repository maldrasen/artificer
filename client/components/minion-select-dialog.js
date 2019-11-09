Components.MinionSelectDialog = (function() {

  function init() {
    $(document).on('click', '#minionSelectDialog .minion', Elements.buttonAction(toggleMinion));
    $(document).on('click', '#minionSelectDialog .cancel', Elements.buttonAction(close));
    $(document).on('click', '#minionSelectDialog .confirm', Elements.buttonAction(confirm));
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
    dialog.find('.minions').empty().append(buildMinions(options.minions));
  }

  function close() {
    $('#minionSelectCover').addClass('hide');
    $('#minionSelectDialog').addClass('hide');
  }

  function setStatus(content) {
    $('#minionSelectDialog .status').removeClass('hide').empty().append(content);
  }

  function buildMinions(minions) {
    return minions.map(minion => {
      console.log(minion)

      let portrait = $('<img>',{ src:minion.portrait });
      let name = $('<span>',{ class:'name' }).append(minion.name);
      let attributes = $('<span>',{ class:'attributes' }).append(`${minion.gender} ${minion.species}`)

      return $('<li>',{ class:'minion' }).data('id',minion.id).append(portrait).append(name).append(attributes);
    });
  }

  function toggleMinion() {
    let limit = $('#minionSelectDialog').data('limit');
    let selected = getSelectedMinions();
    let minion = $(this);

    if (minion.hasClass('selected')) {
      minion.removeClass('selected');
    } else {
      if (selected.length < limit) {
        minion.addClass('selected');
      }
    }

    let onSelect = $('#minionSelectDialog').data('onSelect');
    if (typeof onSelect == 'function') {
      onSelect(getSelectedMinions());
    }
  }

  function confirm() {
    let onConfirm = $('#minionSelectDialog').data('onConfirm');
    if (typeof onConfirm == 'function') {
      onConfirm(getSelectedMinions());
    }

    close();
  }

  // Wow, an actual use for the spread operator! But only because jQuery is
  // being stupid here, thinking I want to map jQuery elements to other wrapped
  // elements I think.
  function getSelectedMinions() {
    return [...$('#minionSelectDialog .minion.selected').map((i,element) => {
      return $(element).data('id');
    })];
  }

  return { init, open, close, setStatus };

})();
