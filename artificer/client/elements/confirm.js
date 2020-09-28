Elements.Confirm = (function() {
  let yesFunction;

  function init() {
    $(document).on('click', '#confirmFrame .confirm-no', Elements.buttonAction(hideConfirm))
    $(document).on('click', '#confirmFrame .confirm-yes', Elements.buttonAction(()=>{
      hideConfirm();
      yesFunction();
    }));
  }

  function isOpen() {
    return $('#confirmFrame').hasClass('hide') == false;
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
    isOpen: isOpen,
    showConfirm: showConfirm,
    hideConfirm: hideConfirm,
  }

})();
