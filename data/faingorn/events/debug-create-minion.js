Event.build('debug-create-minion', {
  repeatable: true,

  setting: {
    phase: 'any-time',
    location: 'void'
  },

  stages:[
    { formPage:'debug-create-minion' },
  ],

  onFinish: async choices => {
    await CharacterBuilder.build({
      gender: choices.gender,
      species: choices.species
    });
  },

});
