Event.build('debug-create-minion', {
  background: { code:'void' },
  repeatable: true,

  stages:[
    { formPage:'debug-create-minion' },
  ],

  onFinish: async choices => {
    let char = await CharacterBuilder.build({
      gender: choices.gender,
      species: choices.species
    });
  },

});
