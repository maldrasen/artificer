Event.build('summon-first-demon', {
  buttonLabel: 'Summon a Demon',

  setting: {
    phase: 'morning',
    location: 'basement'
  },

  stages:[{
      pages: [
        { text:"TODO: Cinnamon describes the what she needs to do to complete the summoing rune." }
      ]
    },{
      formPage: 'incubus-or-succubus'
    },{
      pages: [
        { text:`TODO: Describe the portal opening.` }
      ]
    }
  ],

  onFinish: async choices => {
    console.log("Now chain event based on gender...")
    console.log("Choice:",choices);
  },

});
