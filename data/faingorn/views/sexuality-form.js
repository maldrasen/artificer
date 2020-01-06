
Components.EventView.FormPage.register('sexuality-form', {
  view: 'data/faingorn/views/sexuality-form.html',
  onSubmit: () => {

    let choices = {
      men:   ($('#fuckMen').data('value')||'always'),
      futas: ($('#fuckFutas').data('value')||'always'),
      women: ($('#fuckWomen').data('value')||'always'),
    };

    if (! (choices.men=='never' && choices.futas=='never' && choices.women=='never')) {
      Components.EventView.updateChoices(choices)
      Components.EventView.FormPage.complete();
    }
  }
});
