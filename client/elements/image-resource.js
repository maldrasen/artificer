Elements.ImageResource = (function() {

  function initIconLibrary(event, data) {
    console.log("--- Init Icons ---")
    console.log(data)
  }

  function loadBackground(selector, argument) {
    Renderer.sendCommand('image.lookup',{ selector, on:'background', ...argument });
  }

  function set(event, data) {
    if (data.on == 'background') {
      return $(data.selector).css({ 'background-image': `url(${data.url})` });
    }

    throw "Data on not set to background, it prolly wants to set an image src, but that isn't implemented yet."
  }

  return { initIconLibrary, loadBackground, set };

})();
