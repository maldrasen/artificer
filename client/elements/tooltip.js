Elements.Tooltip = (function() {
  let tooltipOpen = false;

  function init() {
    $(document).on('mouseover','.tooltip-parent',startOpen)
    $(document).on('mouseout','.tooltip-parent',checkClose)
  }

  // Tooltips can be added to an element with this add function or if an
  // element has the tooltip-parent class and the nessessary data attributes it
  // should just work.
  //
  // Options:
  //    content*    String or HTML element to display.
  //    position    Only bottom for now.
  //    delay       Time in ms to delay opening. 500ms by default.
  function add(element, options) {
    $(element).addClass('tooltip-parent').
      data('tooltip-content',  options.content).
      data('tooltip-position', options.position).
      data('tooltip-delay',    options.delay)
  }

  // Set a timer that will open the tooltip if the mouse is still over the
  // tooltip element by the time the timer runs out.
  function startOpen() {
    tooltipOpen = true;

    setTimeout(()=> {
      if (tooltipOpen) { open($(this)); }
    },($(this).data('tooltip-delay') || 500));
  }

  // Actually open the tooltip.
  function open(parent) {
    let offset = parent.offset();
    let content = parent.data('tooltip-content');
    let position = parent.data('tooltip-position') || 'bottom';

    if (typeof content == 'string') {
      content = $('<div>',{ class:'basic-tooltip-content' }).append(content);
    }

    let frame = $('#tooltipFrame').
      empty().
      attr('style','').
      append(content).
      removeClass('hide');

    if (position == 'bottom') {
      frame.css({
        top: offset.top + parent.height() + 5,
        left: offset.left
      });
    }
  }

  // Mouseout events will be triggered from any element under the tooltip
  // parent element so on mouseout we need to check every element that we're
  // currently hovering over to see if any of them are the tooltip element
  // still.
  function checkClose() {
    let release = true;

    each($(':hover'), e => {
      if ($(e).hasClass('tooltip-parent')) { release = false; }
    });

    if (release) { close(); }
  }

  function close() {
    tooltipOpen = false;
    $('#tooltipFrame').attr('style','').empty().addClass('hide');
  }

  return { init, add, close }

})();
