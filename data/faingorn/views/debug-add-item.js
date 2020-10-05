
Components.EventView.FormPage.register('debug-add-item', {
  view: 'data/faingorn/views/debug-add-item.html',
  onSubmit: page => {
    Components.EventView.updateChoices({
      code: $('#itemCode').val(),
      count: $('#itemCount').val() });
    Components.EventView.FormPage.complete();
  }
});
