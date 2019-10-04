Event.build('courtyard-walk-on-walls', {
  location: 'courtyard',
  background: '../../resources/backgrounds/bg-courtyard-ruined.png',

  actors: { 'R':'the-smartest-rat' },

  stages:[
    {
      pages: [
        { text:`One of my rat minions has decided to join me up here, quickly scaling the wall to come and stand at my side.` },
        { text:`{{R::gender.He}} squeaks out what might be {{R::gender.his}} name to me.` },
        { text:`{{R::character.firstName}}, or something equally unpronounceable.`},
        { text:`I may have to start naming them myself as their own names are difficult and nearly indistinguishable.`},
        { text:`This little rat though I think is one of the more cleaver of the bunch.` },
        { text:`{{R::gender.He}} may be able to tell me more about these lands.` },
      ]
    }
  ],

  finish: async choices => {
    let game = await Game.instance();
    await game.setFlags({ 'project.clear-great-hall':'available' });
  },

});
