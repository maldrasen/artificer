Components.ManageView = (function() {
  let viewData;

  function open(event, data) {
    viewData = data;
    Renderer.showManage();
  }

  function build() {
    $('#overlayTitle h2').append(`Manage ${viewData.flags.keepName}`);
  }

  return { open, build };

})();
