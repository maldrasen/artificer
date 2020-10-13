Event.build('summon-first-demon', {

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
    console.log("Choice:",choices);
  },

});
