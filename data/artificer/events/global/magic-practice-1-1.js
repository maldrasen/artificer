Event.build('magic-practice-1-1', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'morning',

  stages:[{
    pages:[
      { playerSpeaker:true, text:`<span class='player-quote'>"It's strange,"</span> I say to myself, looking at one of my hands in the early morning light.` },
      { text:`I find myself with control over the elements, though really I have no idea how this happened.` },
      { text:`Are there others who share this power?` },
      { text:`I have the feeling that I'm somehow unusual, but I couldn't say why.` },
      { text:`I don't really understand what I'm doing when I'm doing it.` },
      { text:`I just act on instinct.` },
      { text:`I envision what I want to do, then I just do it.` },
      { text:`It's like walking or breathing.` },
      { text:`If I'm being honest though I don't really know what I'm doing or even what I'm capable of doing.` },
      { text:`In fact, I barely know who I am at all.` },
      { text:`I think it would be a good idea to spend a little time every morning practicing with these magical powers I find myself with.` },
      { text:`I need to know what I can do, and what my limits are.` },
      { text:`The Great Hall is empty of people, so I figure this is as good a time as any to get started.` },
      { requires:'no-flag.player.bedsIn', text:`It's also empty of furniture so I find a place to sit on the bare stone floor in the center of the hall.` },
      { requires:'flag.player.bedsIn', text:`I find a comfortable place to sit on the pile of hides and fur that has been serving as my bed.` },
      { text:`I close my eyes, emptying my mind of all thought and just sit and listen for a while.` },
      { text:`I'm not trying to do anything at the moment, just listening. Just breathing.` },
      { text:`In time I begin to feel centered; calm, and in control of my sensations.` },
      { text:`It's not that I don't hear the howling of the wind outside, but it's isolated now, the sensation of hearing put away for the moment.` },
      { text:`I reach out with my other senses, tapping into what I feel when I attempt something magical.` },
      { text:`I'm still not trying to do anything really.` },
      { text:`Just reaching out.` },
      { text:`If I can lift a rock with magic, I should be able to 'feel' with it as well.` },
      { text:`It's faint, but it's there.` },
      { text:`There's a sensation of walls around me.` },
      { text:`I can 'feel' that they're hard and cool to the touch.` },
      { text:`I can 'feel' the waning heat of the embers from last night's fire, still smoldering in the fireplace.` },
      { text:`That's... about the extend of it though.` },
      { text:`I'm still weak.` },
      { text:`It feels like I'm flexing a limb I haven't used in too long.` },
      { text:`I open my eyes again.` },
      { text:`From the light on the floor I can tell I spent longer on that than it felt like.` },
      { text:`It was surprisingly tiring as well.` },
      { text:`Still, I think morning meditations like this will help me to explore my powers and should also help build my stamina for using them.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'magic-practice-1-2' }]);
  },

});
