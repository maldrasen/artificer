
Components.EventFormPage.register('warning-form', {
  view: 'modules/cinnamon/views/forms/warning-form.html',
  onSubmit: () => { Components.EventFormPage.complete(); }
});
