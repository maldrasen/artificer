Event.build('morning-1-food-mushrooms', {
  background:{ location:'ruined-tower', time:'morning' },

  stages:[{
    pages:[
      { text:`[[Eat a mushroom instead]]` },
    ]
  },{
    requires:['no-flag.enqueued.morning-1-supplies'],
    pages:[
      { text:'[[Now go get supplies]]' }
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(Flag.lookup('enqueued.morning-1-supplies') ? 'morning-1-end' : 'morning-1-supplies');
  },

});
