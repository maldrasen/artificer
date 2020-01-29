Event.build('found-willow-branches-whip', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`Whip it good!` },
    ]
  },{
    pages:[
      { text:`<span class='narrator-quote'>Crafting has been unlocked.</span>`, alert:{ unlock:'Crafting Tasks' }},
      { text:`<span class='narrator-quote'>When planning your day's activity you can now add tasks to your plan.</span>` },
      { text:`<span class='narrator-quote'>You can start by crafting a basket to help your minion carry more when out foraging.</span>`, alert:{ unlock:'Craft: Basket' }},
    ]
  }],

});
