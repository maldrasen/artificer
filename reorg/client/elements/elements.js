global.Elements = (function() {

  function reset() {
    Elements.Tooltip.close();
  }

  function clearSelection() {
    if (window.getSelection) { return window.getSelection().removeAllRanges(); }
  }

  function buttonAction(callback) {
    return function(e) {
      $(this).blur();
      e.stopPropagation();
      e.preventDefault();

      if ($(this).hasClass('disabled')) { return false; }
      if ($(this).hasClass('disabled-button')) { return false; }

      callback.apply(this);
    }
  }

  return {
    buttonAction,
    clearSelection,
    reset,
  };

})();
