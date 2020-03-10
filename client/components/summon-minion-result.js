Components.SummonMinionResult = (function() {

  function init() {
    $('document').on('click', '#summonMinionResult .continue-button', Elements.buttonAction(close));
  }

  function open(e, data) {
    console.log("Open:",data)
  }

  function close() {
    console.log("Close")
  }

  return { init, open };

})();
