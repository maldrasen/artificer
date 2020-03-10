Elements.Dialog = (function() {
  let currentDialog;

  function init() {
    $(document).on('click','.close-dialog',Elements.buttonAction(close));
  }

  // Open a dialog. Dialogs are very similar to the overlays. The app only
  // allows for one overlay and one dialog to be open at a time (enforcing a
  // bit of simplicity onto the ui there) The overlays are intended to hold the
  // primary content (like the plan view) and dialogs are for secondary content
  // and can be placed within an overlay. Options:
  //   title          * Dialog Title
  //   id             * ID to give the root of the opened dialog.
  //   template       * Template to get the initial dialog content from.
  //   dialog           Type of dialog to build. [standard,simple]
  //     - standard     Almost full screen, includes scrolling panel.
  //     - simple       Almost full screen, no scrolling panel.
  //     - medium       60% of screen width with scrolling panel.
  //     - small        Small centered dialog, no scrolling panel.
  //
  function open(options) {
    if (!isOpen()) {
      let dialogTemplate = {
        simple:   '#simpleDialogTemplate',
        standard: '#standardDialogTemplate',
        medium:   '#mediumDialogTemplate',
        small:    '#smallDialogTemplate',
      }[options.dialog||'standard'];

      currentDialog = $($(dialogTemplate).html());
      currentDialog.attr('id',options.id);
      currentDialog.find('.title').append(options.title);
      currentDialog.find('.dialog-content').append($(options.template).html());

      $('#mainContent').append(currentDialog);

      $.each(currentDialog.find('.scrolling-panel'), (i, panel) => {
        Elements.ScrollingPanel.build($(panel));
      });
    }
  }

  function close() {
    if (isOpen()) {
      currentDialog.remove();
      currentDialog = null;
    }
  }

  function isOpen() {
    return currentDialog != null;
  }

  return { init, open, close, isOpen }

})();
