Elements.Confirm = (function() {
  let yesFunction;

  function init() {
    $(document).on('click', '#confirmFrame .confirm-no', Elements.buttonAction(hideConfirm))
    $(document).on('click', '#confirmFrame .confirm-yes', Elements.buttonAction(()=>{
      hideConfirm();
      yesFunction();
    }));
  }

  function showConfirm(options) {
    $('#confirmCover').removeClass('hide');
    $('#confirmFrame').removeClass('hide').find('.message').append(options.message);
    yesFunction = options.yes;
  }

  function hideConfirm() {
    $('#confirmCover').addClass('hide');
    $('#confirmFrame').addClass('hide').find('.message').empty();
  }

  return {
    init: init,
    showConfirm: showConfirm,
  }

})();
