Components.Backlog = (function() {

  // There's no way to detect mouse wheel direction if nothing scrolls
  function init() {
    $(document).on('wheel', e => { if (!isOpen()) { open(); }});
    $(document).on('click','.close-backlog-button', Elements.buttonAction(close));
  }

  function prepare() {
    $('#backlog .message-list').empty();
  }

  function append(message) {
    let item = $('<li>',{ class:'message' }).append(message);
    $('#backlog .message-list').append(item);
  }

  function isOpen() { return ! $('#backlog').hasClass('hide'); }
  function open() { $('#backlog').removeClass('hide'); }
  function close() { $('#backlog').addClass('hide'); }

  return { init, prepare, append, isOpen, open, close };

})();
