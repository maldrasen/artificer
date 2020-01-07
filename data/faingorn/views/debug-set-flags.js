
Components.EventView.FormPage.register('debug-set-flags', {
  view: 'data/faingorn/views/debug-set-flags.html',
  onSubmit: page => {

      // Components.EventView.updateChoices({ gender, species });

      console.log("Set Flags...")
      Components.EventView.FormPage.complete();


  }
});
