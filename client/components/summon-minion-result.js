Components.SummonMinionResult = (function() {

  function init() {}

  function open(e, data) {
    let view = $('<div>',{ id:"summonMinionResult" }).append($('#summonMinionResultTemplate').html());

    $('#mainContent').empty().append(view);
  }

  return { init, open };

})();
