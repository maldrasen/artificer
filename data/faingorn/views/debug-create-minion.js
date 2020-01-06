
Components.EventView.FormPage.register('debug-create-minion', {
  view: 'data/faingorn/views/debug-create-minion.html',
  onSubmit: page => {
    let gender = Elements.RadioButtons.getValue(page.find('.gender-options'));
    let species = page.find('.species-select').val()
    if (gender && species) {
      Components.EventView.updateChoices({ gender, species });
      Components.EventView.FormPage.complete();
    }
  }
});
