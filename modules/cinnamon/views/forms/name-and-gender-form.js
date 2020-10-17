
Components.EventFormPage.register('name-and-gender-form', {
  view: 'modules/cinnamon/views/forms/name-and-gender-form.html',

  onLoad: page => {
    const genderButtons = new Elements.RadioButtons({
      currentValue:'male',
      choices:[
        { label:'Male', value:'male' },
        { label:'Female',  value:'female' }],
      onSelect: () => {
        if (page.find('#title').hasClass('unchanged')) {
          page.find('#title').val(genderButtons.currentValue == 'male' ? 'Master' : 'Mistress')
        }
      },
    });

    page.find('#genderButtons').append(genderButtons.element);
    page.find('#title').on('keypress', e => {
      page.find('#title').removeClass('unchanged').off('keypress');
    });
  },

  onSubmit: () => {
    let choices = {
      title:     $('#title').val().trim(),
      firstName: $('#firstName').val().trim(),
      lastName:  $('#lastName').val().trim(),
    };

    if (choices.firstName.length > 20 ||
        choices.lastName.length > 20 ||
        choices.title.length > 20) { return false; }

    Components.EventView.updateChoices(choices)
    Components.EventFormPage.complete();
  }
});
