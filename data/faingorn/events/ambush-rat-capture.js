Event.build('ambush-rat-capture', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`What I have in mind is risky, but I think I should be able to pull it off. I know I can lift things with
              my mind, so why not just lift myself? Or at least control my fall well enough that I land within striking
              distance of the rat {{R::gender.boy}}. It's a good thing that I've had an entire day to rest. I'm going
              to need all the energy I can muster.` },
      { text:`I leap from my perch as quietly as possible, launching myself into the air towards the pair. Magic
              courses through my limbs, just enough to carry me forward briefly and to muffle my impact with the stone
              floor. I must have made some noise; my target looks up just in time to see me soaring through the air
              towards {{him}}.` },
      { text:`{{He}}'s not quick enough to dodge me though as I barrel into {{him}}, knocking {{him}} to the ground
              while wrapping my arms around {{his}} lithe body.` },
      { text:`{{He}} twists in my arms, trying to bite at me, but with one of my arms around {{his}} neck {{he}} can't
              move {{his}} head enough to get at me.` },
    ]
  },{
    requires:`minion(R).has-cock`,
    pages:[
      { text:`Sure enough, I hear the other rat scampering away, knocking over a chair as she dashes for the door. I
              glance over my shoulder as she runs out of the hall, noting with satisfaction that she didn't even have
              time enough to retrieve the furs she was after.` },
    ]
  },{
    requires:`minion(R).no-cock`,
    pages:[
      { text:`Sure enough, I hear the other rat scampering away, knocking over a chair as he dashes for the door. I
              glance over my shoulder as he runs out of the hall, noting with satisfaction that he didn't even have
              time enough to retrieve the furs he was after.` },
    ]
  },{
    pages:[
      { text:`The rat in my arms is still struggling, completely in a panic. What should I do now though? I don't have
              anything I can tie {{him}} up with, and it's not like I can hold {{him}} like this forever.` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'approach',
    selections:[
      { text:'Befriend the rat to earn {{his}} loyalty.', value:'befriend' },
      { text:'Torment the rat to make {{him}} fear me.',  value:'torment',  effects:['player sadist 1']},
    ]
  }],

  onFinish: async choices => {
    EventQueue.chain(choices.approach == 'befriend' ?
      'ambush-rat-befriend':
      'ambush-rat-torment');
  },

});
