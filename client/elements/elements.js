global.Elements = (function() {

  function clearSelection() {
    if (window.getSelection) { return window.getSelection().removeAllRanges(); }
  }

  function buttonAction(callback) {
    return function(e) {
      $(this).blur();
      e.stopPropagation();
      e.preventDefault();

      if ($(this).hasClass('disabled')) {
        return false;
      }

      callback.apply(this);
    }
  }

  return {
    buttonAction,
    clearSelection,
  };

})();
