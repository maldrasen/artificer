Elements.Effects = (function() {

  // TODO: Need to make sure this still does whatever it was supposed to do.
  function applyPageEffects(effects) {
    if (effects) {
      console.log("TODO: Apply page effects:",effects)
      // each(effects, strang => {
        //   new Adjustment(strang, eventData.actorIDs).execute();
        // });
    }
  }

  // The setBackground() function will be called with a string or an object, it
  // just gets it however it was set in the event. If the background is just a
  // string, we assume that it's the background code and load it normally.
  // Otherwise various other effects and filters are added to the background.
  function setBackground(options) {
    if (options === null) {
      return removeBackground();
    }
    if (options) {
      if (typeof options == 'string') { options = { code:options }; }
      ImageResourceLoader.setImage($('#activeBackground'), options.code);
    }
  }

  function removeBackground() {
    ImageResourceLoader.clearImage($('#activeBackground'));
  }

  return { applyPageEffects, setBackground, removeBackground };

})();


// Copied from event view for now.

//   function showCenterImage(url) {
//     $('#currentEvent .center-image-frame').removeClass('hide');
//     $('#currentEvent .center-image').css({ "background-image":`url(${url})`, filter:'' });
//   }
//
//   function hideCenterImage() {
//     $('#currentEvent .center-image-frame').addClass('hide');
//   }
//
//   function setBackground(argument) {
//     Elements.ImageResource.loadBackground('#currentEvent .full-screen-background',argument);
//   }
//
//   function darkenBackground(value) {
//     $('#currentEvent .full-screen-background').css({filter:`brightness(${100-value}%)`});
//   }
