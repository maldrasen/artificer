Event.build('found-willow-branches', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:'TODO: Found Willow Branches.' }
      // Should also be an opertunity to whip her a bit if the player feels like it.
    ]
  }],

  onFinish: async () => {
    // Add a project to create a basket.
  },

});
