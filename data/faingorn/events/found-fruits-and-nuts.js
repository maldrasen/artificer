Event.build('found-fruits-and-nuts', {
  background:{ location:'great-hall', time:'evening' },

  stages:[{
    pages:[
      { text:`{{C::character.firstName}}‌ returns slightly after sunset, arms laden with fruits and nuts.`},
      { text:`I'm sitting by the fireplace, waiting for {{C::gender.him}} to arrive.` },
      { text:`This is the last trip {{C::gender.he}}'ll be able to make tonight so I invite {{C::gender.him}}‌ to join me for a while.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"You did well today," I‌ tell {{C::gender.him}}.</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"Thank you {{P::character.title}}."</span>` },
      { text:`I give {{C::gender.him}} a good looking over as {{C::gender.he}} grows near.` },
      { text:`If possible {{C::gender.he}}'s even more filthy, covered in dirt with berry juice staining {{C::gender.his}} arms.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I've been thinking though."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"What you're doing right now is inefficient."</span>` },
      { text:`I reach down and grab a small green berry from the pile between us.` },
      { text:`The scaven call them juice berries, not the most original name, but descriptive.` },
      { text:`The plump berry is slightly tart and sweet, but mostly water.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"You could carry more if you had something to carry things in, a basket perhaps?"</span>` },
      { text:`{{C::gender.He}} nods while nibbling on a goat nut, another local delicacy.` },
      { minionSpeaker:'{{C::character.firstName}}', text:`<span class='minion-quote'>"The Deep Hole Clan has baskets {{P::character.title}}. I could steal one."</span>` },
      { playerSpeaker:true, text:`I shake my head, <span class='player-quote'>"No, I don't want to risk you getting caught; I have another idea."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"In the forest there's a tree with long flexible branches called a willow."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Do you know it?"</span>` },
      { minionSpeaker:'{{C::character.firstName}}', text:`{{C::gender.He}} nods, <span class='minion-quote'>"A whip tree. The branches make good slashy whips."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"I want you to start gathering whip tree branches too."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Once we have enough I can make a wicker basket for you, and perhaps some other useful things as well."</span>` },
      { text:`{{C::gender.He}} nods cautiously, perhaps not exactly thrilled about stocking the keep with "good slashy whips".` },
      { text:`<span class='narrator-quote'>Tasks and crafting have been unlocked.</span>`, alert:{ unlock:'Tasks' }},
      { text:`<span class='narrator-quote'>Tasks are repeatable and you may be able to work on several in a single day.</span>` },
      { text:`<span class='narrator-quote'>To work a crafting task though you must first have the materials available for the item you want to create.</span>` },
      { text:`<span class='narrator-quote'>The inventory has also been unlocked.</span>`, alert:{ unlock:'The Inventory' }},
      { text:`<span class='narrator-quote'>From the inventory you can see your items, equipment, and how much food you have in storage.</span>` },
      { text:`<span class='narrator-quote'>You'll need to keep an eye on your food supply because starving minions are unhappy minions.</span>` },
    ]
  },{
    requires:['player.accepts-women','minion(C).has-pussy'],
    pages:[
      { text:`We eat in silence for a while.` },
      { text:`Something about having {{C::gender.him}} sit this close to me though makes me long for physical contact.` },
      { text:`There's that, uncomfortable jittery sensation where part of me wants to just grab and take {{C::gender.him}}, but there's another part of me that's unsure if I should.` },
      { text:`Well should I?` },
    ]
  },{
    requires:['player.accepts-men','minion(C).has-cock'],
    pages:[
      { text:`We eat in silence for a while.` },
      { text:`Something about having {{C::gender.him}} sit this close to me though makes me long for physical contact.` },
      { text:`There's that, uncomfortable jittery sensation where part of me wants to just grab and take {{C::gender.him}}, but there's another part of me that's unsure if I should.` },
      { text:`Well should I?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'sex',
    selections:[
      { text:'No, I would rather not.',                                 value:'no',     effects:['player rat-fucker -2']},
      { text:`Yes, {{C::gender.he}}'s here to serve me after all.`,     value:'normal', effects:['player dominant 1']},
      { text:`Yes, {{C::gender.he}}'s here to serve. (filthy version)`, value:'filthy', effects:['player dominant 1','player perverted 1']},
    ]
  },{
    choice:{ sex:'no' },
    pages:[
      { text:`I shake my head at the thought.` },
      { text:`What am I thinking?` },
      { text:`{{C::gender.He}}'s a filthy, nasty little creature that probably hasn't had a bath for {{C::gender.his}} entire life.` },
      { text:`I'm not so horny that I'll just fuck any animal.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('locationMenu.inventory','unlocked');

    // TODO: Also unlock tasks and crafting task for basket.

    if (['normal','filthy'].indexOf(choices.sex) >= 0) {
      const player = await Player.instance();
      const minion = await Character.findByPk(choices.event.actorIDs.C);
      await EventQueue.enqueueEvent(`found-fruits-and-nuts-sex-${player.isFemale ? 'F':'M'}`,{ style:choices.sex, actors:{ C:minion.id }});
    }
  },

});
