Event.build('morning-3', {
  location: 'great-hall',
  background:{ location:'great-hall', time:'morning' },

  stages:[{
    pages:[
      { text:`I stoke the fire in the great hall. I want to ensure that the room is a comfortable temperature for the
          next few hours at least. I beckon {{R::character.firstName}} to come sit next to me in front of the fire
          so that we can chat for a bit.` },
      { text:`{{R::gender.He}}'s still nervous and obviously uncomfortable being around me, though that might have
          something to do with the fact that I've been in the nude since {{he}} woke me up. Better for {{him}} to be
          uncomfortable than for me to show the slightest bit of concern, so for now that's how I'll have to remain.` },
      { playerSpeaker:true, text:`"Tell me more about your people {{R::character.firstName}}. Do some of your tribesmen
          have scaven who serve them as you serve me?"` },
      { actorSpeaker:'R', text:`{{He}} slowly nods {{his}} head. "All scaven serve. The shamans, the warlords. All
          serve the Rat King."` },
      { playerSpeaker:true, text:`"Who is the Rat King?"` },
      { actorSpeaker:'R', text:`{{He}} shrugs at that, "The Bone Woman speaks with the Rat King. Tells us what he
          wants."` },
      { text:`Interesting. Perhaps the Rat King is some kind of invisible god to the scaven and the Bone Woman his
          priestess? The one who's really in charge. It's a plausible theory.` },
      { playerSpeaker:true, text:`"So you all serve? What does it mean for a scaven to serve? What would you do for
          your {{P::character.title}}? For me?"` },
      { actorSpeaker:'R', text:`{{R::character.firstName}} swallows, clearly not liking the direction this conversation
          is going, "Anything {{P::character.title}}. {{R::character.firstName}} belongs to you now."` },
      { playerSpeaker:true, text:`"Anything? And what if I wanted to kill you?"` },
      { actorSpeaker:'R', text:`{{He}} nods, "Yes. Wizard kills scaven to become strong. When wizard gets strong
          {{P::gender.he}} makes scaven tribe strong. Tribe all that matters."` },
      { text:`Oh.` },
      { text:`That was unexpected.` },
      { text:`I was just wanting to challenge {{his}} definition of anything. I didn't think {{he}} actually meant that
          literally.` },
      { text:`That's&hellip; What does that mean? How would killing {{him}} make me stronger?` },
      { text:`Shit.` },
      { text:`This rat knows more about being a wizard than I do.` },
      { playerSpeaker:true, text:`I shake my head to clear my thoughts, "No. I need you alive for what I have in mind
          for you." I stand and start walking towards the tall windows at the far end of the great hall. "Follow me."` },
      { playerSpeaker:true, text:`For a while, I just look over the barren and inhospitable landscape below. In the
          morning light the sun glimmers off the surface of a lake far off in the distance. "For the time being, it
          would be best if I didn't leave this place. That means I need you to go out there and find food for the both
          of us. Food and anything useful that can be found in these lands."` },
      { playerSpeaker:true, text:`"Can you do that?"` },
      { actorSpeaker:'R', text:`{{He}} nods, more confidently now that {{he}}'s pretty sure I'm not going to kill
          {{him}} right away. "Yes {{P::character.title}}. Deep Holes are the best at sneaking finding."` },
      { playerSpeaker:true, text:`"Good. You may leave as soon as you're able, and be back before dark," and with that
          I dismiss {{R::gender.him}} for the time being. There are things I need to think about.` },
      { narratorSpeaker:true, text:`You can now assign your minions to the Forage role. A foraging minion will spend
          the day looking for food and other useful items out in the hinterlands. Keep an eye on their health though,
          because it's a dangerous job and they can get injured. And injured minions will do worse at any task they're
          assigned to and could die. `, alert:{ unlock:'Role: Forage' }},
    ]
  }],

  onFinish: async choices => {
    await EventCollections.addAct_1_1();

    Flag.setAll({
      'plan-view.allow-idle':    'unlocked',
      'plan-view.roles.forager': 'unlocked',
    });
  },

});
