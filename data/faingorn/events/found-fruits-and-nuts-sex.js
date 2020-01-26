Event.build('found-fruits-and-nuts-sex', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:'TODO: Sex.' },
    ]
  },{
    requires:['state.style=normal'],
    pages:[
      { text:'As normal' }
    ]
  },{
    requires:['state.style=filthy'],
    pages:[
      { text:'As filthy' }
    ]
  }],

  onFinish: async () => {
  },

});
