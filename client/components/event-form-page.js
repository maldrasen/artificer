
// Form Pages are used to render any kind of non-standard page in an event.
// They're needed because scenarios will sometimes need to display a unique
// view with it's own javascript that should be run on the page and have
// access to the internal event state, mostly for forms and such, but really
// usable for anything. In order for an event to display a form it must first
// be registered.

Components.EventFormPage = (function() {
  const registeredPages = {};

  // Register a form event with the following options:
  //    view     - (*) Path to the HTML file to load.
  //    onLoad   - Functito to run after the page has been loaded.
  //    onSubmit - Function to run when the submit() function is called.
  function register(code, options) {
    registeredPages[code] = Object.assign(options,{ code:code });
  }

  // Load the page and append it to the event view. If an onLoad() callback
  // was specified it's called with the loaded element.
  function load(code) {

    let page = registeredPages[code];
    if (page == null) {
      throw `FormPage: ${code} has not been registered.`;
    }

    fs.readFile(`${ROOT}/${page.view}`, 'utf8', function(err, data) {
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
