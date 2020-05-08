Elements.ImageResource = (function() {
  let iconData;

  function initIconLibrary(event, data) {
    iconData = data;
console.log("Data:",data)
  }

  // Build an item icon from the type (equipment, item, or flavor), the item
  // code, and the count. If the count is set to 1 the count span will be
  // hidden.
  function iconElement(type, code, count, tooltip=true) {
    const countSpan = (count > 1) ? `<span class='count'>${count}</span>` : '';
    const data = iconData[type][code];

    if (data == null) {
      throw `No icon for (${type},${code}) found in icon data`;
    }

    const icon = $(`
      <div class='item-icon large-icon'>
        ${countSpan}
        <img src='${data.url}' height=40 width=40/>
      </div>`);

    if (tooltip) {
      const tooltip = $('<div>',{
        class:'align-left small-padding padding-left padding-right'
      }).append(count > 1 ? `${count} ${data.pluralName}` : data.name);

      Elements.Tooltip.add(icon, { content:tooltip, delay:10 });
    }

    return icon;
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
