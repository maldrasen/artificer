Event.build('great-hall-talk-to-rat-chief', {
  location: 'great-hall',
  background: '../../resources/backgrounds/bg-great-hall-simple.png',

  actors: { 'R':'rat-chief' },

  stages:[{
    pages: [
      { text:`After a few days of observing their behavior, I feel that I've gotten to know my rat minions just a bit better.` },
      { text:`Well, I can tell them apart at the very least.` },
      { text:`There's one in particular that the other rats show deference to, or perhaps they're just afraid of {{R::gender.him}}.` },
      { text:`I manage to find {{R::character.firstName}} by {{R::gender.him}}self and decide to call {{R::gender.him}} over so that we can chat for a bit.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"You there."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"The others, they seem to fear and obey you. Why is that?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`{{R::character.firstName}} gives me a toothy grin and says, <span class='minion-quote'>"Yes. I am strongest. Chief of your Rats of Deep Hole."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Rats of Deep Hole? That's what you call yourselves?"</span>` },
      { text:`I hadn't even considered that they might have a name for their tribe or whatever they are.` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Yes. The Deep Hole are your rats."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"I will make the others obey you {{P::character.title}}."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"We kill for you steal for you."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"When you want to kill rat, I bring you rat to kill."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`Grinning broadly he adds, <span class='minion-quote'>"We make more."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"When I want to kill a rat?"</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"That's something you think I'd like to do?"</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Why would you have me kill your tribesmen?"</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`He nods excitedly, <span class='minion-quote'>"Yes yes. {{P::character.title}} kills rats and gets strong."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Strong {{P::character.title}} makes tribe strong."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Tribe all that matters."</span>` },
      { minionSpeaker:'{{R::character.firstName}}', text:`<span class='minion-quote'>"Kill weak rats to make tribe strong."</span>` },
      { text:`Thinning their ranks to allow the strong to flourish.` },
      { text:`Given that rats are consummate breeders, it makes sense that they would have devised a way of preventing overpopulation.` },
      { text:`I nod to {{R::character.firstName}}, letting {{R::gender.him}} know I'd consider it before dismissing {{R::gender.him}}.` },
    ]}
  ],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'magic-practice-1-1' }]);
  },

});
