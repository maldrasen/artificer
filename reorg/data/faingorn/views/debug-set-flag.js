
Components.EventView.FormPage.register('debug-set-flag', {
  view: 'data/faingorn/views/debug-set-flag.html',
  onSubmit: page => {
    Components.EventView.updateChoices({
      code: $('#flagCode').val(),
      value: $('#flagValue').val() });
    Components.EventView.FormPage.complete();
  }
});
