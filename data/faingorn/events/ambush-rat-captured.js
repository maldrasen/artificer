Event.build('ambush-rat-captured', {
  background:{ location:'great-hall' },
  actors:{ R:'any-scaven' },

  stages:[{
    pages:[
      { text:`I have a rat named {{R::character.name}}.` },
    ]
  }],

  onFinish: async choices => {
  },

});
