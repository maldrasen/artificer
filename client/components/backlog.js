Components.Backlog = (function() {

  // Open the backlog on mouse wheel.
  function init() {
    $(document).on('wheel', open);
    $(document).on('click','.open-backlog-button', Elements.buttonAction(open));
    $(document).on('click','.close-backlog-button', Elements.buttonAction(close));
  }

  // The message list should be emptied every time a game is started.
  function prepare() {
    $('#backlog .message-list').empty();
    Elements.ScrollingPanel.build($('#backlog .scrolling-panel'));
    Elements.ScrollingPanel.resize($('#backlog .scrolling-panel'));
  }

  function append(message, options) {
    let item = $('<li>',{ class:'message-item' });

    if (options.actor)  { item.append($('<div>',{ class:'speaker other-quote' }).append(options.actor)); }
    if (options.player) { item.append($('<div>',{ class:'speaker player-quote' }).append(options.player)); }
    if (item.find('.speaker').length == 0) { item.append($('<span>',{ class:'speaker empty' })); }

    item.append($('<div>',{ class:'message' }).append(message));

    // Limit the size of the backlog to 1000 entries.
    if ($('#backlog .message-item').length > 1000) {
      $('#backlog .message-item:first-child').remove();
    }

    $('#backlog .message-list').append(item);
  }

  function open() {
    if (canOpen()) {
      $('#backlog').removeClass('hide');
      Components.EventView.stopSkip();
      Elements.ScrollingPanel.resize($('#backlog .scrolling-panel'));
      Elements.ScrollingPanel.scrollToBottom($('#backlog .scrolling-panel'));
    }
  }

  function canOpen() {
    if (isOpen()) { return false; }
    if (Components.LocationView.isOpen()) { return true; }
    if (Components.EventView.isOpen())    { return true; }
    if (Components.ReportView.isOpen())   { return true; }
    return false;
  }

  function isOpen() { return ! $('#backlog').hasClass('hide'); }
  function close() { $('#backlog').addClass('hide'); }

  return { init, prepare, append, isOpen, open, close };

})();
