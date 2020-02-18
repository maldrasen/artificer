Event.build('ambush-rat-capture', {
  background:{ location:'great-hall', time:'evening' },

  actors:{ R:'any-scaven' },

  stages:[{
    pages:[
      { text:`It's a good thing that I've had an entire day to rest because I'm going to need to fly again if I'm going to capture one of these rats.` },
      { text:`I leap from my perch as quietly as possible, launching myself into the air towards the pair.` },
      { text:`I must have made some noise; my target looks up just in time to see me soaring through the air towards {{R::gender.him}}.` },
      { text:`{{R::gender.He}}'s not quick enough to dodge me though as I barrel into {{R::gender.him}}, knocking {{R::gender.him}} to the ground while wrapping my arms around {{R::gender.his}} lithe body.` },
      { text:`{{R::gender.He}} twists in my arms, trying to bite at me, but with one of my arms around {{R::gender.his}} neck {{R::gender.he}} can't move {{R::gender.his}} head enough to get at me.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`Sure enough, I hear the other rat scampering away, knocking over a chair as she dashes for the door.` },
      { text:`I glance over my shoulder as she runs out of the hall, noting with satisfaction that she didn't even have time enough to retrieve the furs she was after.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`Sure enough, I hear the other rat scampering away, knocking over a chair as he dashes for the door.` },
      { text:`I glance over my shoulder as he runs out of the hall, noting with satisfaction that he didn't even have time enough to retrieve the furs he was after.` },
    ]
  },{
    pages:[
      { text:`The rat in my arms is still struggling, completely in a panic.` },
      { text:`How should I go about this now though?` },
      { text:`I don't have anything I can tie {{R::gender.him}} up with, and it's not like I can hold {{R::gender.him}} like this forever.` },
      { text:`The best course of action then is to&hellip;` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'approach',
    selections:[
      { text:'Befriend the rat to earn {{R::gender.his}} loyalty.', value:'befriend' },
      { text:'Torment the rat to make {{R::gender.him}} fear me.',  value:'torment',  effects:['player sadist 1']},
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(choices.approach == 'befriend' ? 'ambush-rat-befriend' : 'ambush-rat-torment');
  },

});
