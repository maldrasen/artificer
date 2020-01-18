Event.build('ambush-rat-receive', {
  location: 'great-hall',

  background:{ location:'great-hall' },
  actors:{ R:'any-scaven' },

  stages:[{
    pages:[
      { text:'Receive Minion.' },
    ]
  }],

  onFinish: async () => {
    await EventQueue.enqueueEvent('looking-outside-2');
  },

});
