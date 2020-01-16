Event.build('ambush-rat-setup', {
  location: 'upper-keep',

  stages:[{
    pages:[
      { text:`I strongly suspect that whoever I'm sharing this keep with is the same person who hid those supplies I found.` },
      { text:`It would stand to reason that the remaining furs would then make excellent bait.` },
      { text:`I‌ gather up all the furs and lay them neatly on one of the hall's large wooden tables.` },
      { text:`The great hall is a large two-story room with a gallery on one side, which conveniently, would allow me to observe the room from the floor above.` },
      { text:`I should have no problem watching the table from there while also remaining well hidden.` },
      { text:`All that's left then is to find a place to perch, and wait.` },
      { text:`Later &hellip;`,  background:{ code:'black' }},
    ]
  }],

  onFinish: async () => {
    // If the player didn't do the looking outside event it should be removed from the queue.
  },

});
