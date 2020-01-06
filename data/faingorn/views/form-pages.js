
Components.EventView.FormPage.register('debug-create-minion', {
  view: 'data/faingorn/views/form-pages/debug-create-minion.html',
  onLoad: page => {
    console.log("Loaded:",page)
  },
  onSubmit: () => {
    Components.EventView.updateChoices({ this:'works!' })
    console.log("Submit to me!")
  }
});
