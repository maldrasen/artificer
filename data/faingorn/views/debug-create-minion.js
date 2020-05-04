
Components.EventView.FormPage.register('debug-create-minion', {
  view: 'data/faingorn/views/debug-create-minion.html',

  onLoad: page => {
    const genderOptions = new Elements.RadioButtons({ currentValue:'futa', choices:[
      { label:'Male',   value:'male' },
      { label:'Futa',   value:'futa' },
      { label:'Female', value:'female' },
    ]});

    page.find('.gender-options').append(genderOptions.element);
  },

  onSubmit: page => {
    let gender = page.find('.gender-options .radio-button').data('controller').currentValue;
    let species = page.find('.species-select').val()
    if (gender && species) {
      Components.EventView.updateChoices({ gender, species });
      Components.EventView.FormPage.complete();
    }
  }
});
