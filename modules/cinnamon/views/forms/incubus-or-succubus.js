
Components.EventFormPage.register('incubus-or-succubus', {
  view: 'modules/cinnamon/views/forms/incubus-or-succubus.html',
  onLoad: form => { form.on('click','.selection', selectedGender); },
});

function selectedGender() {
  let button = $(this);
  let gender = 'male';

  if (button.hasClass('futa')) { gender='futa'; }
  if (button.hasClass('female')) { gender='female'; }

  Components.EventView.updateChoices({ gender:gender, firstName:'FNU', lastName:'LNU' });
  Components.EventFormPage.complete();
}
