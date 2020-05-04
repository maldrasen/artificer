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
    const orderList = $('#overlayFrame #orderList');
    const keepName = viewData.flags['location.keep-name'];
    const playerTitle = viewData.flags['player.title'];

    $('#overlayTitle h2').append(`Manage ${keepName}`);
    $('#overlayFrame #nameOptions .keep-name').append(keepName);
    $('#overlayFrame #nameOptions .player-title').append(playerTitle);

    if (viewData.orders.length) {
      orderList.removeClass('hide');
    }

    each(viewData.orders, order => {
      if (order.type == 'boolean') { orderList.append(buildBooleanOrder(order)); }
    });
  }

  function buildBooleanOrder(order) {
    const value = viewData.flags[`order.${order.code}`];
    const updateOrder = selected => {
      Renderer.sendCommand('manage.set-order',{ code:`order.${order.code}`, value:selected.value });
    }

    const radioButtons = new Elements.RadioButtons({ onSelect:updateOrder, currentValue:value, choices:[
      { label:'Yes', value:'Y' },
      { label:'No',  value:'N' },
    ]});

    const item = buildEmptyOrder(order);
    item.find('.control').append(radioButtons.element);
    return item;
  }

  function buildEmptyOrder(order) {
    return $(`
      <li class='order boolean-order'>
        <div class='flex'>
          <div>
            <div class='label fs-big fg-strong'>${order.label}</div>
            <div class='description'>${order.description}</div>
          </div>
          <div class='control'></div>
        </div>
      </li>`);
  }

  function openChangeNames() {
    Elements.Dialog.open({
      title: 'Change Names',
      id: 'changeNames',
      template: '#manageChangeNamesDialogTemplate',
      dialog: 'small',
      afterOpen: dialog => {
        dialog.find('input#title').val(viewData.flags['player.title']);
        dialog.find('input#keepName').val(viewData.flags['location.keep-name']);
      }
    });
  }

  function acceptNames() {
    const dialog = Elements.Dialog.current();

    let names = {
      playerTitle: dialog.find('input#title').val().trim().toLowerCase(),
      keepName: dialog.find('input#keepName').val().trim(),
    }

    if (names.playerTitle.length && names.keepName.length) {
      Elements.Dialog.close();
      Renderer.sendCommand('manage.set-names',names);
      Renderer.removeOverlay();
    }
  }

  return { init, open, build };

})();
