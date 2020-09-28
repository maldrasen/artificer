Components.EventView.FormPage.register('keep-name-form', {
  view: 'data/faingorn/views/keep-name-form.html',

  onSubmit: () => {
    Components.EventView.updateChoices({ name:$('#name').val().trim() });
    Components.EventView.FormPage.complete();
  }
});
