Event.build('ambush-rat-setup', {
  location: 'upper-keep',
  background:{ location:'great-hall-gallery', time:'morning' },

  stages:[{
    pages:[
      { text:`I strongly suspect that whoever I'm sharing this keep with is the same person who hid those supplies I found.` },
      { text:`It would stand to reason that the remaining furs would then make excellent bait.` },
      { text:`I gather up all the furs and lay them neatly on one of the hall's large wooden tables.` },
      { text:`The great hall is a large two-story room with a gallery on one side, which conveniently, would allow me to observe the room from the floor above.` },
      { text:`I should have no problem watching the table from there while also remaining well hidden.` },
      { text:`All that's left then is to find a place to perch, and wait.` },
      { text:`Later&hellip;`, background:{ code:'black' }},
      { text:`The day passed by slowly with no apparent activity below.`, background:{ location:'great-hall', time:'evening' }},
      { text:`I was beginning to think that I was either being overly paranoid or that my quarry was too clever to take such obvious bait.` },
      { text:`However, now that the shadows have begun to grow long on the wall, it would seem that my suspicions were correct after all.` },
      { text:`A pair of small rat-like creatures quietly slink into the room.` },
      { text:`Well, they're small to me, though quite large for rats, standing perhaps {{aMeter}} tall or so.` },
      { text:`And they do stand, walking silently between shadows on two paws.` },
      { text:`I wasn't expecting there to be two of them, though really I had no idea what to expect, and if I'm being entirely honest, I didn't have much of a plan for what to do when something did come to take the bait.` },
      { text:`Instinct alone tells me I should try to capture one of them.` },
      { text:`At the very least I might be able to get some information and perhaps I could make one of them serve me.` },
      { text:`Which, upon reflection, is an odd thought.` },
      { text:`I don't understand why but from the moment I awoke in this strange land my first thoughts were of conquest.` },
      { text:`Some holdover from my previous life?` },
      { text:`Some goal left unfulfilled?` },
      { text:`Something to reflect on at a later time, but for now I need to act before this chance passes me by.` },
      { text:`There are two rats, one male, and one female.` },
      { text:`I think I could grab either one of them, but given how timidly they act, it's likely that the other would be able to escape.` },
      { text:`So really the only question is, which rat should I claim?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'gender',
    selections:[
      { text:'Capture the rat boy.',  value:'male'   },
      { text:'Capture the rat girl.', value:'female' },
    ]
  }],

  // If the player didn't do the looking-outside-1 event (which assumes that
  // the player is alone) it's removed from the event queue. Nothing really
  // important happens in it though.
  onFinish: async choices => {
    const rat = await EventFunctions.createFirstMinion(choices.gender);
    await EventQueue.enqueueEvent('ambush-rat-capture',{ priority:'next', actors:{ R:rat.id }});
    await EventQueue.removeEvent('looking-outside-1');
  },

});
