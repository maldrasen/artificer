Event.build('clear-great-hall-start', {
  background: { location:'great-hall', locationState:'ruined' },

  stages:[
    {
      pages: [
        { text:`The heavy doors to the keep's single central tower are halfway off their hinges, making them impossible to open normally.`},
        { text:`With a strong pull of magical force I rip them off the wall and toss them aside for now.`},
        { playerSpeaker:true, text:`<span class='player-quote'>"Well. Let's see what we have in here..."</span> I say as I step into the old deserted keep.`},
        { text:`Just beyond the doors is the keep's great hall, a large open space that takes up most of the keep's first two stories.`},
        { text:`Looking up, I see that the hall has an intricately vaulted stone ceiling.`},
        { text:`It's a good thing too.`},
        { text:`A wooden ceiling like the one atop the tower would have long collapsed by now.`},
        { text:`Other than the ceiling though the room is in pretty bad shape.`},
        { text:`Numerous piles of debris that were once tables and chairs litter the room.`},
        { text:`It looks like every one of these piles of former furniture has served as an animal nest at some point.`},
        { text:`The room smells strongly of mold, piss, and shit, and I'm fairly certain that the rest of the keep is in a similar condition.`},
        { text:`Still, it could be worse.`},
        { text:`The stone walls are solid and there's a roof to be under, so better than what I have now.`},
      ],
    },{
      requires:['minions.working-project<2'],
      pages: [
        { text:`It's going to take several days of hard labor to get this place cleaned out.`},
      ]
    },{
      requires:['minions.working-project>1'],
      pages: [
        { text:`It's going to take a couple days to get all this cleaned up.`},
      ]
    },{
      pages:[
        { text:`Naked, and without any equipment, normally such a task would be impossible.`},
        { text:`With a bit of magic though I'll be able to clear and sweep; all without having to actually touch anything.`},
        { text:`Add a bit of flame to sanitize what remains and I should have a livable space soon.`},
        { text:`( I can now use the map to walk around the keep. )`, alert:{ unlock:"The Map" }},
        { text:`Well. I'd best get to work then.`},
        { text:`...`, darkenBackground:30 },
        { text:`..`,  darkenBackground:60 },
        { text:`.`,   darkenBackground:90 },
      ]
    },{
      background: '../../resources/backgrounds/bg-courtyard-ruined-night.png',
      pages:[
        { text:`It's dark by the time I decide to quit for the day.` },
        { text:`It looks like I'll be sleeping at least one more night outside.` },
        { text:`I suppose I could technically sleep in the hall, but I think that out here under the stars will actually be a bit more comfortable.` },
        { text:`It's a clear and bitterly cold evening, but I've built a roaring fire from the hall's destroyed furniture.` },
        { text:`It might even be a bit warm for my rat companions.` },
        { text:`They've all stripped off their ragged hide clothing and have joined me siting naked around the flames.` },
        { text:`It could be the warmth of the fire, or perhaps the nudity is just customary for them.` },
        { text:`Watching them as they converse among themselves I feel a slight stirring in my loins.` },
        { text:`They're small, dirty, and savage, but beautiful in their own way, lithe and muscular.` },
        { text:`I haven't really given the topic of sex much thought yet.` },
        { text:`My focus for the last couple of days has been on nothing but survival.` },
        { text:`It makes me wonder though, what type of person would I have been attracted to?` },
        { text:`What kind of person am I attracted to now?` },
      ]
    },{
      sexualityFormPage: true
    },{
      pages:[
        { text:`I spend a little time pondering my sexuality. ` },
        { text:`The day's work has left me exhausted though.` },
        { text:`Working magically takes almost as much stamina as doing everything by hand.` },
        { text:`With a yawn I lay down in the rough grass, and it looks like my rat minions are getting ready to follow.` },
        { text:`As they start to gather around me I remember from somewhere in the back of my head that tribes of rat people tend to all sleep together in one big pile of squirming naked rats.` },
        { text:`Well, it's one way of staying warm at least.` },
        { text:`Should I allow them?` },
      ]
    },{
      selectionPage: true,
      selectionKey: 'ratPile',
      selections:[
        { text:'Shoo them away.',                value:'no',   effects:['all-rats fear 1','player rat-fucker -1']},
        { text:'Allow it, but I need my sleep.', value:'yes',  effects:['all-rats loyal 1','player rat-fucker 1']},
        { text:'Allow it, and make it sexy.',    value:'sexy', effects:['all-rats loyal 2','player rat-fucker 2','player orgy-lover 2']},
      ]
    }
  ],

  onFinish: async choices => {
    await Flag.setAll({
      'locationMenu.map':'unlocked',
      'player.fucksMen': choices.men,
      'player.fucksFutas': choices.futas,
      'player.fucksWomen': choices.women,
    });

    if (choices.ratPile == 'no') {
      await EventQueue.enqueueEvent('clear-great-hall-sleep-no');
    }
    if (choices.ratPile == 'yes') {
      await EventQueue.enqueueEvent('clear-great-hall-sleep-yes');
    }
    if (choices.ratPile == 'sexy') {
      const cock = await Player.hasCock();
      const code = cock ? 'clear-great-hall-sleep-sex-cock': 'clear-great-hall-sleep-sex-pussy';
      await EventQueue.enqueueEvent(code);
    }
  }

});
