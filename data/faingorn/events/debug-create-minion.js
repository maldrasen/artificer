Event.build('debug.create-minion', {
  background: { code:'void' },

  stages:[
    { selectionPage: true,
      selectionKey: 'gender',
      selections:[
        { text:'Male',   value:'male' },
        { text:'Female', value:'female' },
        { text:'Futa',   value:'futa' }
      ]
    }
  ],

  onFinish: async choices => {
    console.log("Create Minion...",choices);
  },

});
