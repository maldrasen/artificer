Event.build('rat-thief-caught', {

  setting: {
    phase: 'late-night',
    location: 'player-bedroom',
  },

  requires: ['resource.blood-berries>=36'],
  actors: { C:'flag=character.rat-thief' },

  stages:[{
    pages:[
      { text:`(*) The rat trap is sprung. Choose what to do with them.` },
      { text:`(*) My new {{C::gender.male}} rat is named {{C::character.firstName}}.` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'action',
    selections:[
      { text:'Kill them.', value:'kill' },
      { text:'Let them go.', value:'release' },
      { text:'Have them serve me.', value:'recruit' },
    ]
  }],

  onFinish: async choices => {
    console.log("Do:",choices.action)
  },

});
