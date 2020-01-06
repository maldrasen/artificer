Elements.RadioButtons = (function() {
  "use strict";

  function init() {
    $(document).on('click', '.radio-buttons .radio-button', function() {
      var button = $(this);
      var group = button.closest('.radio-buttons');

      group.find('.on').removeClass('on');
      group.data('value', button.data('value'));
      button.addClass('on');

      $(group).trigger($.Event('radio-buttons.changed'));
    });
  }

  /*
  * After a page has been rendered this function should be called to set the
  * value of the .radio-buttons group to the selected button's value, if any
  * are rendered as on at the beginning.
  */
  function wire() {
    $.each($('.radio-buttons'), function(i, group) {
      $(group).data('value',$(group).find('.radio-button.on').data('value'));
    });
  }

  function setValue(group, value) {
    var button = group.find(`.radio-button[data-value="${value}"]`);
    group.find('.on').removeClass('on');
    group.data('value', null);

    if (button.length == 1) {
      group.data('value', value);
      button.addClass('on')
    }
  }

  function getValue(group) {
    return group.data('value');
  }

  return { init, wire, setValue, getValue };

})();
