Event.build('morning-1-supplies', {
  background:{ location:'empty-room', time:'morning' },

  stages:[{
    pages:[
      { text:'Get Supplies' }
    ]
  },{
    requires:['no-flag.enqueued.morning-1-food'],
    pages:[
      { text:'Now go get food.' }
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(Flag.lookup('enqueued.morning-1-food') ? 'morning-1-end' : 'morning-1-food');
  },

});
