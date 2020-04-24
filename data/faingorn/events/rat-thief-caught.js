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
      { text:'Torture them to death.', value:'kill',    effects:['player sadist 3','(Reputation: The Butcher)']},
      { text:'Let them go.',           value:'release', effects:['player sadist -1','(Reputation: The Benevolent)']},
      { text:'Have them serve me.',    value:'recruit', effects:['(Reputation: The Seductive)']},
    ]
  }],

  onFinish: async choices => {
    if (choices.action == 'kill') {
      Flag.set('player.scaven-reputations.the-butcher','Y')
      Game.chainEvent('rat-thief-kill',{},choices);
    }
    if (choices.action == 'release') {
      Flag.set('player.scaven-reputations.the-benevolent','Y')
      Game.chainEvent('rat-thief-release',{},choices);
    }
    if (choices.action == 'recruit') {
      Flag.set('player.scaven-reputations.the-seductive','Y')
      Game.chainEvent('rat-thief-recruit',{},choices);
    }
  },

});
