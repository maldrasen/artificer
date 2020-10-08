Elements.WindowManager = (function() {

  function init() {
    $(document).on('keydown', handleEscape);
  }

  return { init };


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

      console.log("(!) Escape")

      // Elements.Tooltip.close();

      // If a dialog or floating frame nested inside of an overlay is open, it
      // should be closed without closing the parent overlay.
      // if (Elements.Dialog.isOpen()) { return Elements.Dialog.close(); }
      // if (Elements.FloatingFrame.isOpen()) { return Elements.FloatingFrame.close(); }
      // if (Elements.Confirm.isOpen()) { return Elements.Confirm.hideConfirm(); }
      // if (Components.MinionSelectDialog.isOpen()) { return Components.MinionSelectDialog.close(); }
      // if (Components.Backlog.isOpen()) { return Components.Backlog.close(); }
      // if ($('#overlayContent').children().length > 0) { return removeOverlay(); }

      // A view can only be canceled when the first child of #mainContent has
      // the can-cancel class. This applies to the PlanView, the
      // TrainingPlanView, and the MinionListView.
      // if ($($('#mainContent').children()[0]).hasClass('can-cancel')) {
      //   return sendCancel();
      // }
    }
  }


})();

// --- From Renderer ---

// May move the overlays into the window manager, or we at least need to hook
// it into the overlays
// function showOverlay(view) {
//   $('#overlayFrame').removeClass('hide').find('.title').empty().append(view.title);
//   $('#overlayContent').append($(view.template).html());
//   if (view.build) { view.build(); }
// }
//
// function removeOverlay() {
//   $('#overlayFrame').addClass('hide')
//   $('#overlayContent').empty();
// }
//
