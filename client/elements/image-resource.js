Elements.ImageResource = (function() {
  let iconData;

  function initIconLibrary(event, data) { iconData = data; }

  function iconElement(type, code, count) {
    return $(`
      <div class='item-icon large-icon'>
        <span class='count'>${count}</span>
        <span class='name'>${iconData[type][code].name}</span>
        <img src='${iconData[type][code].url}' height=40 width=40/>
      </div>`);
  }

  function loadBackground(selector, argument) {
    Renderer.sendCommand('image.lookup',{ selector, on:'background', ...argument });
  }

  // The engine response calls this function with the url for the background
  // that was just loaded. The response should have a selector pointing to the
  // element that wanted the image loaded.
  function set(event, data) {
    data.on == 'background' ?
      $(data.selector).css({ 'background-image': `url(${data.url})` }):
      $(data.selector).attr('src',data.url);
  }

  return { initIconLibrary, iconElement, loadBackground, set };

})();
