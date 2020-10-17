
Components.EventFormPage.register('sexuality-form', {
  view: 'modules/cinnamon/views/forms/sexuality-form.html',

  onLoad: page => {
    const options = { currentValue:'always', choices:[
      { label:'Always', value:'always' },
      { label:'Maybe',  value:'maybe' },
      { label:'Never',  value:'never' },
    ]}

    const menOptions = new Elements.RadioButtons(options);
    const futaOptions = new Elements.RadioButtons(options);
    const womenOptions = new Elements.RadioButtons(options);

    page.find('#fuckMen').append(menOptions.element);
    page.find('#fuckFutas').append(futaOptions.element);
    page.find('#fuckWomen').append(womenOptions.element);
  },

  onSubmit: () => {
    let choices = {
      men:   ($('#fuckMen .radio-button').data('controller').currentValue),
      futas: ($('#fuckFutas .radio-button').data('controller').currentValue),
      women: ($('#fuckWomen .radio-button').data('controller').currentValue),
    };

    if (! (choices.men=='never' && choices.futas=='never' && choices.women=='never')) {
      Components.EventView.updateChoices(choices)
      Components.EventFormPage.complete();
    }
  }
});
