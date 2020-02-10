Elements.FloatingFrame = (function() {

  function init() {
    $(document).on('mouseleave','#floatingFrameBoundry',Elements.buttonAction(close));
  }

  function open(options) {
    $('#floatingFrameCover').removeClass('hide');
    $('#floatingFrame').append(options.content);
    setPosition(options.position)
  }

  function setPosition(position) {
    $('#floatingFrame').css({
      height: position.height,
      width: position.width,
    });

    let boundry = $('#floatingFrameBoundry').css({ height:position.height + 5 });
    if (position.top) { boundry.css({ top:position.top }); }
    if (position.bottom) { boundry.css({ bottom:position.bottom }); }
    if (position.right) { boundry.css({ right:position.right }); }
    if (position.left) { boundry.css({ left:position.left }); }
  }

  function close() {
    $('#floatingFrameCover').addClass('hide');
    $('#floatingFrame').empty().attr('style','');
    $('#floatingFrameBoundry').attr('style','');
  }

  function isOpen() { return $('#floatingFrameCover').hasClass('hide') == false; }

  return { init, open, close, isOpen };

})();
