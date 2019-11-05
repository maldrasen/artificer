Event.build('minion-spider-bite', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  location: 'great-hall',

  actors: { 'R':'rat-chief' },

  stages:[{
    pages:[
      { text:`It's still early in the day when I happen to run into {{R::character.firstName}}, the chief of the Deep Hole Rats.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`I notice immediately that something, well striking, has happened to {{R::gender.his}} balls.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`I notice immediately that something, well striking, has happened to {{R::gender.his}} pussy.` },
    ]
  }],

  onStart: async () => {
    const chief = await CharacterAgent.ratChief();
    const cock = await chief.getCock();
    const pussy = await chief.getPussy();

    if (cock) {
      cock.blightLevel = 3;
      cock.blightCount = 1;
      cock.blightHealing = 0;
      cock.blightPlace = 'balls';
      await cock.save();
    } else {
      pussy.blightLevel = 3;
      pussy.blightCount = 1;
      pussy.blightHealing = 0;
      await pussy.save();
    }
  },

});
