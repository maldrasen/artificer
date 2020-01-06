
Components.EventView.FormPage.register('name-form', {
  view: 'data/faingorn/views/name-form.html',

  onLoad: page => {
    // We should file in the comment element with a comment about the species
    // choice. This code lives in the view now though, so I've got to relocate
    // the comments, probably to just this function here. Not able to test this
    // at the moment though because I'm working on the debug events, so the
    // choice isn't even filled in just now.

    // let species = Components.EventView.getChoices().species || 'lupin';
    // let comment = Species.chooserOptions[species].comment;
    // page.find('.comment').append(comment);
  },

  onSubmit: () => {
    let choices = {
      title:     $('#title').val().trim(),
      firstName: $('#firstName').val().trim(),
      lastName:  $('#lastName').val().trim(),
    };

    if (choices.firstName.length == 0 || choices.lastName.length == 0 || choices.title.length == 0) { return false; }
    if (choices.firstName.length > 20 || choices.lastName.length > 20 || choices.title.length > 20) { return false; }

    Components.EventView.updateChoices(choices)
    Components.EventView.FormPage.complete();
  }
});
