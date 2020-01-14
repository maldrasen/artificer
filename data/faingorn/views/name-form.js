
Components.EventView.FormPage.register('name-form', {
  view: 'data/faingorn/views/name-form.html',

  onLoad: page => {
     $('input#title').val({
      male:   'Master',
      female: 'Mistress',
      futa:   'Mystress'
    }[Components.EventView.getChoices().gender]);
  },

  onSubmit: () => {
    let choices = {
      title:     $('#title').val().trim(),
      firstName: $('#firstName').val().trim(),
      lastName:  $('#lastName').val().trim(),
    };

    // Prevent names that are too long.
    if (choices.firstName.length > 20 || choices.lastName.length > 20 || choices.title.length > 20) { return false; }

    if (choices.title.length == 0) {
      choices.title = {
        male:   'Master',
        female: 'Mistress',
        futa:   'Mystress'
      }[choices.gender];
    }

    Components.EventView.updateChoices(choices)
    Components.EventView.FormPage.complete();
  }
});
