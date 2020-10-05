Event.build('rat-thief-strikes-again', {
  repeatable: true,

  setting: {
    phase: 'wake',
    location: 'great-hall',
  },

  requires:['resource.blood-berries>=24'],

  stages:[{
    pages:[
      { text:`I wake just as the light of dawn streams in through the great halls windows. I stand and stretch and then
          curse out loud when I glance over at my supply pile.` },
      { playerSpeaker:true, text:`"Dammit" It would seem that our scaven thief has struck again. The pile of blood
          berries that I had intended to use as bait are gone. He's a bold fucker too, steeling them from the very room
          I was sleeping in.` },
      { text:`I need to build that storeroom and use it to catch him in the act.` },
    ]
  }],

  onFinish: async choices => {
    Resource.destroy({ where:{ code:'blood-berries' }});
    AvailableEvent.add('rat-thief-strikes-again');
  },

});
