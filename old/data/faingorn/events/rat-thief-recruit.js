Event.build('rat-thief-recruit', {

  actors: {
    C: 'flag=character.rat-thief',
    R: 'flag=character.first-scaven',
  },

  stages:[{
    pages:[
      { playerSpeaker:true, text:`I release the scaven, carefully lowering {{him}} to the ground. "Don't try to run," I
          say, "I'll just grab you up into the air again, and next time I won't be as gentle. Understand?"` },
      { text:`{{He}} nods, looking down at {{his}} feet, looking utterly defeated.` },
      { playerSpeaker:true, text:`"What's your name?"` },
      { actorSpeaker:'C', text:`"{{C::character.name}}," {{he}} says. Fucking rat names.` },
      { playerSpeaker:true, text:`"You stole from me {{C::character.firstName}}. I should kill you for that." The
          scaven's eyes dart about, looking for a way to escape, but looks petrified with fear. "I'm feeling generous
          today though. Maybe I should let you live?"` },
      { actorSpeaker:'C', text:`"Yes," {{he}} squeeks out, "No kill. Sorry sorry."` },
      { playerSpeaker:true,  text:`I nod, "I won't kill you." I glance over at the storeroom. It's a chaotic mess, the
          shelves collapsed, food scattered everywhere. I reach out and pull a handful of berries over to me
          telekinetically and hand them to the scaven. "Here."` },
      { text:`{{His}} eyes grow wide as {{he}} takes them and shoves them all into {{his}} mouth at once. {{His}}
          cheeks bulge outward as {{he}} chews and swallows.` },
      { playerSpeaker:true, text:`"You're hungry aren't you?" I say, looking down at {{his}} scrawny figure. "The other
          scaven, they're not letting you have enough food?"` },
      { actorSpeaker:'C', text:`{{He}} nods and wipes the blood from the corners of {{his}} mouth, "Yes. The bigger
          ones, the hunters, they keep it all for themselves."` },
      { playerSpeaker:true, text:`I nod. I thought that might be the case. "All right thief, I'd like to make you an
          offer then. I will be your {{master}} and you will serve me. I will own you completely. You will do anything
          and everything I tell you. In return I will feed and shelter you. You will be part of my tribe."` },
      { text:`{{He}} looks up at me, thinking it over for a few seconds before nodding.` },
      { playerSpeaker:true, text:`"Do you accept then?" I ask.` },
      { actorSpeaker:'C', text:`"Yes {{master}}," he says, "{{C::character.firstName}} will belong to you now."` },
      { playerSpeaker:true, text:`I smile down at {{him}}, "Good, good. Come, I will take you to
          {{R::character.firstName}}, {{R::gender.he}} can show you what's expected of you."`,
          alert:{ unlock:'Minion: {{C::character.firstName}}' }},
    ]
  }],

  onFinish: async choices => {
    const rat = await Character.lookup(choices.event.actorIDs.C)
    await rat.update({ type:'minion' });

    Flag.set('order.reward-blood-berries','Y');
  },

});
