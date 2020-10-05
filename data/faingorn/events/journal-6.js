Event.build('journal-6', {
  background: { code:'journal' },

  setting: {
    phase: 'night',
    location: 'player-bedroom'
  },

  stages:[{
    pages:[
      { text:`As the journal nears its end Lord Malcolm Eigendrax's writings grow increasingly frustrated. Unable to
          make any progress on deciphering the engravings or really any meaningful progress on other investigations, he
          turns once again to his favorite pass time; capturing and torturing scaven to death.` },
      { text:`He and Ravingari argued constantly. It seems like most of the latter journal entries are devoted solely
          to venting about the woodsman's shortcomings. At least when he's not documenting the atrocities he's
          performing on the little rat girls he keeps chained up in the tower.` },
      { text:`Things grow even worse between them once the day they expected Wren to return came and passed. Malcolm
          had plenty of explanations of course. A lot can happen in the three months it can take to travel there and
          back, but Ravingari was having none of it.` },
      { text:`In the end he decided to leave to go search for Wren.` },
      { text:`There was plenty of food in the larder, so it wasn't as though Malcolm would starve. By leaving though he
          would  be betraying his lord, a crime punishable by death in Dennevar, though there wasn't anything the lord
          could do to stop him here out in the Hinterlands.` },
      { text:`And so in the end it was just Malcolm here alone; isolated with only his mysteries and the whimperings of
          rats to keep him company.` },
      { text:`The last entry though, it's a hastily written mess. The ink is terribly smeared, so much so that I have
          difficulty making it out. I can make out a few words and phrases though. "She betrayed", "captured", "at the
          gates", "church", "coming for me".` },
      { text:`She betrayed him? Someone came for him? The church? What church?` },
      { text:`It doesn't make any sense, not by itself. It tempting to read too much into it, but it does sound like
          someone or maybe a group of people came for him to either kill or capture him and he wrote this as quick as
          he was able before hiding it away in his desk.` },
      { text:`But that's where the journal ends, with far more questions than answers.` },
      { text:`I haven't really thought about it, but there's the possibility that I too could be attacked here. There's
          some hidden danger here. I can't identify it yet, but when I look out into the wasteland and across the
          forests I can sense a malice there.` },
      { text:`I take a moment to consider my options. I could always leave here; set out into the wilderness and
          perhaps find some hint of civilization elsewhere. It would be safer.` },
      { text:`I shake my head, driving away these lingering doubts.` },
      { requires:'flag.player.goal=conquest', text:`No. I came here to conquer these lands. There's no running away,
          and I'm not a pompous ass like Lord Eigendrax. If <i>they're</i> coming for me, I say let them come. I will
          meet them on the field of battle.` },
      { requires:'flag.player.goal=followers', text:`No. This is my keep. If <i>they</i> come for me I won't be here
          alone. They'll find me and a my host of adoring followers, ready to fight to the death for me if that's what
          I require of them.` },
      { requires:'flag.player.goal=knowledge', text:`No, there's a mystery here that must be unraveled. Lord Eigendrax
          was right about that at least. To uncover what was hidden, that's worth the risk. And <i>they</i>, whoever
          <i>they<i> are, can't intimidate me.` },
      { requires:'flag.player.goal=power', text:`No. Lord Eigendrax was a weakling. A spineless little man unable to do
          anything to defend himself. If <i>they</i> want to come for me they'll find a far more formidable foe.` },
      { text:`I set the book aside. It might still prove useful someday. He may have been a coward and an asshole, but
          at least he took excellent notes.` },
    ]
  }],

});
