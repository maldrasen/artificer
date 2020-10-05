Elements.Buttons = (function() {

  // Build a button with an icon and a label. All options are required.
  //   type:     Icon type
  //   code:     Icon code
  //   count:    Icon count
  //   label:    Label Text
  //   action:   Button Action
  function iconButtonWithLabel(options) {
    let label = $('<div>',{ class:'label'}).append(options.label);
    let icon = Elements.ImageResource.iconElement(options.type,options.code,options.count,false);
    let button = $('<a>',{ href:'#', class:'button-icon-with-label' }).append(icon).append(label);

    button.on('click', Elements.buttonAction(e => {
      options.action(button);
    }));

    return button;
  }

  return { iconButtonWithLabel };

})();
