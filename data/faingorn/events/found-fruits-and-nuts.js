Event.build('found-fruits-and-nuts', {

  setting: {
    phase: 'after-work',
    location: 'great-hall',
  },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}} returns slightly after sunset, arms laden with fruits and nuts. I'm sitting by
          the fire, waiting for {{him}} to arrive. This is the last trip {{he}}'ll be able to make tonight so I invite
          {{him}} to join me for a while.` },
      { playerSpeaker:true, text:`"You did well today," I tell {{him}}.` },
      { actorSpeaker:'C', text:`"Thank you {{P::character.title}}."` },
      { playerSpeaker:true, text:`I give {{him}} a good looking over as {{he}} grows near. If possible {{he}}'s even
          more filthy than {{he}} was this morning, covered in dirt with berry juice staining {{C::gender.his}} arms.
          "I've been thinking though. What you're doing right now is inefficient."` },
      { playerSpeaker:true, text:`I reach down and grab a small green berry from the pile between us. The scaven call
          them juice berries, not the most original name, but descriptive. The plump berry is slightly tart and sweet,
          but mostly water. "You could gather more if you had something to carry things in, a basket perhaps?"` },
      { actorSpeaker:'C', text:`{{He}} nods while nibbling on a goat nut, another local delicacy. "The Deep Hole Clan
          has baskets {{P::character.title}}. I could steal one."` },
      { playerSpeaker:true, text:`I shake my head, "No, I don't want to risk you getting caught; I have another idea.
          In the forest there's a tree with long flexible branches called a willow. Do you know it?"` },
      { actorSpeaker:'C', text:`{{He}} nods, "A whip tree. The branches make good slashy whips."` },
      { playerSpeaker:true, text:`A whip tree&hellip; Hmm, these scaven might actually be a little kinky. "I want you
          to start gathering whip tree branches too. Once we have enough I can make a wicker basket for you, and
          perhaps some other useful things as well."` },
      { text:`{{He}} nods cautiously, perhaps not exactly thrilled about stocking the keep with "good slashy whips".` },
      { narratorSpeaker:true, text:`You can view your inventory now. From the inventory you can see your items,
          equipment, and how much food you have in storage. You'll need to keep an eye on your food supply because
          starving minions are unhappy minions.`, alert:{ unlock:'The Inventory' }},
    ]
  },{
    requires:['player.accepts-women','minion(C).has-pussy'],
    setChoice:{ sex:'possible' },
    pages:[
      { text:`We eat in silence for a while. Something about having {{him}} sit this close to me though makes me long
          for physical contact. There's that, uncomfortable jittery sensation where part of me wants to just grab and
          take {{him}}, but there's another part of me that's unsure if I should.` },
      { text:`Well should I?` },
    ]
  },{
    requires:['player.accepts-men','minion(C).has-cock'],
    setChoice:{ sex:'possible' },
    pages:[
      { text:`We eat in silence for a while. Something about having {{him}} sit this close to me though makes me long
          for physical contact. There's that, uncomfortable jittery sensation where part of me wants to just grab and
          take {{him}}, but there's another part of me that's unsure if I should.` },
      { text:`Well should I?` },
    ]
  },{
    choice:{ sex:'possible' },
    selectionPage: true,
    selectionKey: 'sex',
    selections:[
      { text:'No, I would rather not.',                       value:'no',     effects:['player rat-fucker -2']},
      { text:`Yes, {{he}}'s here to serve me after all.`,     value:'normal', effects:['player dominant 1']},
      { text:`Yes, {{he}}'s here to serve. (filthy version)`, value:'filthy', effects:['player dominant 1','player perverted 1']},
    ]
  },{
    choice:{ sex:'no' },
    pages:[
      { text:`I shake my head at the thought. What am I thinking? {{He}}'s a filthy, nasty little creature that
          probably hasn't had a bath for {{C::gender.his}} entire life.` },
      { text:`I'm not so horny that I'll just fuck any animal.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('location-menu.inventory','Y');

    if (ArrayUtility.contains(['normal','filthy'],choices.sex)) {
      const player = await Player.instance();
      Game.chainEvent(`found-fruits-and-nuts-sex-${player.genderCode == 'female' ? 'F':'M'}`,{ style:choices.sex });
    }
  },

});
