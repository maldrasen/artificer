Event.build('summon-first-demon', {
  buttonLabel: 'Summon a Demon',

  setting: {
    phase: 'morning',
    location: 'basement'
  },

  stages:[{
      pages: [
        { text:"Now, summon your first demon." }
      ]
    },{
      formPage: 'incubus-or-succubus'
    }
  ],

  onFinish: async choices => {
    console.log("Now chain event based on gender...")
    console.log("Choice:",choices);
  },

});
