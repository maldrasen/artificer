
Components.EventView.FormPage.register('debug-create-minion', {
  view: 'data/faingorn/views/debug-create-minion.html',
  onSubmit: () => {
    Components.EventView.updateChoices({ this:'works!' })
    Components.EventView.FormPage.complete();
  }
});
