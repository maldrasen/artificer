Elements.Buttons = (function() {

  // Build a button with an icon and a label. All options are required.
  //   type:     Icon type
  //   code:     Icon code
  //   count:    Icon count
  //   label:    Label Text
  //   action:   Button Action
  function iconButtonWithLabel(options) {
    let label = $('<span>',{ class:'label'}).append(options.name);
    let icon = Elements.ImageResource.iconElement(options.type,options.code,options.count);
    let button = $('<a>',{ href:'#', class:'button-icon-with-label' }).append(icon).append(label);

    button.on('click', Elements.buttonAction(e => {
      options.action(button);
    }));

    return button;
  }

  return { iconButtonWithLabel };

})();
