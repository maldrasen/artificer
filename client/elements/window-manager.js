Elements.WindowManager = (function() {
  let currentOverlay = null;

  function init() {
    $(document).on('keydown', handleEscape);
    $(document).on('click', '.close-overlay', Elements.buttonAction(removeOverlay));
  }

  // Universal keypress (escape) handler.
  // This needs to be reworked to remove the scenario specific controls. The
  // scenario Interface could include it's own escape handler. Or it could
  // listen for close events, or could register a control as being closable.
  // The tricky part is handling nested controls. You should only ever close a
  // single top level control on escape, but it might be difficult figuring out
  // what that is. Might even need to include a WindowManager element that's
  // responsible for all window opening and closing.
  function handleEscape(e) {
    if (e.key == 'Escape') {
      // Elements.Tooltip.close();

      // If a dialog or floating frame nested inside of an overlay is open, it
      // should be closed without closing the parent overlay.
      // if (Elements.Dialog.isOpen()) { return Elements.Dialog.close(); }
      // if (Elements.FloatingFrame.isOpen()) { return Elements.FloatingFrame.close(); }
      // if (Elements.Confirm.isOpen()) { return Elements.Confirm.hideConfirm(); }
      // if (Components.MinionSelectDialog.isOpen()) { return Components.MinionSelectDialog.close(); }
      // if (Components.Backlog.isOpen()) { return Components.Backlog.close(); }

      if (currentOverlay && currentOverlay.escapable) {
        return removeOverlay();
      }

      // A view can only be canceled when the first child of #mainContent has
      // the can-cancel class. This applies to the PlanView, the
      // TrainingPlanView, and the MinionListView.
      // if ($($('#mainContent').children()[0]).hasClass('can-cancel')) {
      //   return sendCancel();
      // }
    }
  }

  // Add an overlay to be displayed over the current view. There can only be
  // one overlay active at a time.
  // Options:
  //    title:      Title for the overlay frame.
  //    template:   Template to use for the contents of the overlay.
  //    build:      Build function to call once the overlay has been shown.
  //    escapable:  (default true) Pressing escape will close the overlay.
  function addOverlay(options) {
    currentOverlay = { escapable:(options.escapable||true) };

    $('#overlayFrame').removeClass('hide').find('.title').empty().append(options.title);
    $('#overlayContent').append($(options.template).html());

    if (options.build) { options.build(); }
  }

  function removeOverlay() {
    currentOverlay = null;
    $('#overlayFrame').addClass('hide')
    $('#overlayContent').empty();
  }

  return { init, addOverlay, removeOverlay };

})();
