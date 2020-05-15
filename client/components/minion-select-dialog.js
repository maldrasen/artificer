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
  //     minimum:   The minimum number of minions that should be selected.
  //     onSelect:  Callback function called with a minion is selected.
  //     onConfirm: Callback function called when the dialog is closed positivly.
  //
  function open(options) {
    $('#minionSelectCover').removeClass('hide');

    let empty = () => {};
    let dialog = $('#minionSelectDialog').removeClass('hide');
    dialog.data('limit',options.limit);
    dialog.data('minimum',options.minimum);
    dialog.data('onSelect',options.onSelect || empty);
    dialog.data('onConfirm',options.onConfirm || empty);
    dialog.find('H2.title').empty().append(options.title || '');
    dialog.find('.status').empty().addClass('hide');
    dialog.find('.minions').empty().append(buildMinions(options.minions));

    if (options.minimum > 0) {
      dialog.find('.confirm').addClass('disabled-button');
    }
  }

  function isOpen() {
    return $('#minionSelectDialog').hasClass('hide') == false;
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
      let portrait = $('<img>',{ src:minion.portrait });
      let name = $('<span>',{ class:'name' }).append(minion.name);
      let attributes = $('<span>',{ class:'attributes' }).append(`${minion.gender} ${minion.species}`)
      return $('<li>',{ class:'minion' }).data('id',minion.id).append(portrait).append(name).append(attributes);
    });
  }

  function toggleMinion() {
    Elements.clearSelection();

    let limit = $('#minionSelectDialog').data('limit');
    let minimum = $('#minionSelectDialog').data('minimum');
    let selected = getSelectedMinions();
    let minion = $(this);

    if (minion.hasClass('selected')) {
      // Always toggle off when clicking on the selected minion.
      minion.removeClass('selected');
    } else if (limit == 1) {
      // Select minion if the job allows only 1 minion.
      $('#minionSelectDialog .selected').removeClass('selected');
      minion.addClass('selected');
    } else if (limit > 1 && selected.length < limit) {
      // Toggle the minion on if the job allows for more.
      minion.addClass('selected');
    }

    selected = getSelectedMinions();

    if (minimum > 0) {
      (minimum <= selected.length) ?
        $('#minionSelectDialog .confirm').removeClass('disabled-button'):
        $('#minionSelectDialog .confirm').addClass('disabled-button');
    }

    $('#minionSelectDialog').data('onSelect')(selected);
  }

  function confirm() {
    $('#minionSelectDialog').data('onConfirm')(getSelectedMinions());
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

  function enable() { $('#minionSelectDialog .confirm').removeClass('disabled-button'); }
  function disable() { $('#minionSelectDialog .confirm').addClass('disabled-button'); }

  return { init, open, isOpen, close, setStatus, enable, disable };

})();
