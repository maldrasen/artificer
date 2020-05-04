Components.ManageView = (function() {
  let viewData;

  function init() {
    $(document).on('click','.change-names-button',Elements.buttonAction(openChangeNames));
    $(document).on('click','.accept-names-button',Elements.buttonAction(acceptNames));
  }

  function open(event, data) {
    viewData = data;
    Renderer.showManage();
  }

  function build() {
    $('#overlayTitle h2').append(`Manage ${viewData.flags.keepName}`);
    $('#overlayFrame #nameOptions .keep-name').append(viewData.flags.keepName);
    $('#overlayFrame #nameOptions .player-title').append(viewData.flags.playerTitle);
  }

  function openChangeNames() {
    Elements.Dialog.open({
      title: 'Change Names',
      id: 'changeNames',
      template: '#manageChangeNamesDialogTemplate',
      dialog: 'small',
      afterOpen: dialog => {
        dialog.find('input#title').val(viewData.flags.playerTitle);
        dialog.find('input#keepName').val(viewData.flags.keepName);
      }
    });
  }

  function acceptNames() {
    const dialog = Elements.Dialog.current();

    let names = {
      playerTitle: dialog.find('input#title').val(),
      keepName: dialog.find('input#keepName').val(),
    }

    Elements.Dialog.close();
    Renderer.sendCommand('manage.set-names',names);
    Renderer.removeOverlay();
  }

  return { init, open, build };

})();
