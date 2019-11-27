Elements.ImageResource = (function() {

  function loadBackground(selector, argument) {
    Renderer.sendCommand('image.lookup',{ selector, on:'background', ...argument });
  }

  function set(event, data) {
    if (data.on == 'background') {
      return $(data.selector).css({ 'background-image': `url(${data.url})`, filter:'' });
    }

    throw "Data on not set to background, it prolly wants to set an image src, but that isn't implemented yet."
  }

  return { loadBackground, set };

})();
