global.Elements = (function() {

  function init() {
  //   trackMouse();
  //   trackScrolling();
  }

  // function closeAll() {
  //   $('.floating-menu-frame').removeClass('active');
  // }
  //
  // function clearSelection() {
  //   if (document.selection) {
  //     return document.selection.empty();
  //   }
  //   if (window.getSelection) {
  //     return window.getSelection().removeAllRanges();
  //   }
  // }

  function buttonAction(callback) {
    return function(e) {
      $(this).blur();
      e.stopPropagation();
      e.preventDefault();
      callback.apply(this);
    }
  }

  // function elementAtMousePosition() {
  //   if (Elements.mousePosition) {
  //     let x = Elements.mousePosition[0] - $(document).scrollLeft();
  //     let y = Elements.mousePosition[1] - $(document).scrollTop();
  //     return document.elementFromPoint(x,y);
  //   }
  // }

  // The scrolling panels will only capture the mouse scrolling if the page
  // isn't currently being scrolled. This is done to mimic the default browsing
  // behavior of scrolling panels within scrolling pages.

  // function trackScrolling() {
  //   let scrollTimeout = null;
  //
  //   $(window).on('scroll', function() {
  //     Elements.isScrolling = true;
  //
  //     if (scrollTimeout) {
  //       window.clearTimeout(scrollTimeout);
  //     }
  //
  //     scrollTimeout = window.setTimeout(function() {
  //       Elements.isScrolling = false;
  //       scrollTimeout = null;
  //     }, 300);
  //   });
  // }
  //
  // function trackMouse() {
  //   $(document).on('mousemove', function(e) {
  //     Elements.mousePosition = [e.pageX, e.pageY];
  //   });
  // }

  return {
    init: init,
    buttonAction: buttonAction,
    // closeAll: closeAll,
    // clearSelection: clearSelection,
    // elementAtMousePosition: elementAtMousePosition,
  };

})();
