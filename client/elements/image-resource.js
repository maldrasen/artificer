Elements.ImageResource = (function() {

  function loadBackground(id, argument) {
    Renderer.sendCommand('image.lookup',{ id, on:'background', ...argument });
  }

  function set(event, data) {
    if (data.on == 'background') {
      return $(`#${data.id}`).css({ 'background-image': `url(${data.url})` });
    }

    throw "Data on not set to background, it prolly wants to set an image src, but that isn't implemented yet."
  }

  return { loadBackground, set };

})();
