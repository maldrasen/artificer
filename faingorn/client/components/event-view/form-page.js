Components.EventView.FormPage = (function() {
  const registeredPages = {};

  // Register a form page by code.
  function register(code, options) {
    if (registeredPages[code] != null) {
      throw `FormPage: A page with code ${code} has already been registered`;
    }
    registeredPages[code] = $.extend(options,{ code:code });
  }

  // Load the page and append it to the event view. If an onLoad() callback
  // was specified it's called with the loaded element.
  function load(code) {
    let page = registeredPages[code];
    if (page == null) {
      throw `FormPage: ${code} has not been registered.`;
    }

    Renderer.loadFile(`${ROOT}/${page.view}`, data => {
      let element = $(`<div id='formPage'>${data}</div>`);
          element.on('click','a.form-page-submit',Elements.buttonAction(()=> { submit(page, element); }));

      $('#currentEvent .event-content').append(element);
      if (page.onLoad) { page.onLoad(element); }
    });
  }

  // If an anchor on the form page has the class form-page-submit, this
  // function will be called. The only purpose of this function is to trigger
  // the form page's onSubmit callback (assuming there is one, if there isn't
  // then some other event listener will need to be added to complete the page)
  //
  // There is a break between this function and the complete function in order
  // to allow the onSubmit callback to validate the form before it calls
  // complete.
  function submit(page, element) {
    if (page.onSubmit) { page.onSubmit(element); }
  }

  function complete() {
    $('#formPage').remove();
    Components.EventView.nextStage();
  }

  return { register, load, complete };

})();
