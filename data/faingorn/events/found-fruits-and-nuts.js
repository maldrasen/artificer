Event.build('found-fruits-and-nuts', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:'TODO: Found Fruits and Nuts.' },
      { text:`<span class='narrator-quote'>The inventory has been unlocked.</span>`, alert:{ unlock:'The Inventory' }},
      { text:`<span class='narrator-quote'>From the inventory you can see your items, equipment, and how much food you have in storage.</span>` },
      { text:`<span class='narrator-quote'>You'll need to keep an eye on your food supply because starving minions are unhappy minions.</span>` },
    ]
  }],

  onFinish: async () => {
    Flag.set('locationMenu.inventory','unlocked')
  },

});
