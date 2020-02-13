Event.build('morning-4', {
  background:{ location:'great-hall', time:'morning' },
  time: 'morning',

  stages:[{
    pages:[
      { text:`I wake up feeling restless.` },
      { text:`It's not that I didn't sleep well.` },
      { text:`I just feel like I'm not doing enough with what time I have.` },
      { text:`My minion is out all day gathering food and supplies for us, and that's all well and good, but at the moment there isn't much I can do to contribute.` },
      { text:`Perhaps if I were stronger&hellip;` },
      { playerSpeaker:true, text:`<span class='player-quote'>"It's strange,"</span> I say to myself, looking at one of my hands in the early morning light.` },
      { text:`I find myself with control over the elements, though really I have no idea how this happened.` },
      { text:`There must be others who share this power, but how rare is it really?` },
      { text:`I have the feeling that I'm somehow unusual, but I couldn't say why.` },
      { text:`I don't really understand what I'm doing when I'm doing it.` },
      { text:`I just act on instinct.` },
      { text:`I envision what I want to do, then I just do it.` },
      { text:`It's like walking or breathing.` },
      { text:`If I'm being honest though I don't really know what I'm doing or even what I'm capable of doing.` },
      { text:`In fact, I barely know who I am at all.` },
      { text:`I think it would be a good idea to spend a little time in the morning practicing with these magical powers I find myself with.` },
      { text:`I need to know what I can do, and what my limits are.` },
      { text:`<span class='narrator-quote'>You can now spend time meditating.</span>`, alert:{ unlock:'Task: Meditate' }},
      { text:`<span class='narrator-quote'>Spending time in meditation will help you master your magical abilities.</span>`},
    ]
  }],

  onFinish: async choices => {
    await Flag.set('plan-view.tasks.meditate','unlocked');
    await AvailableEvent.add({ code:'magic-practice-1-1', requires:['flag.player.meditate-count=1']});
  },

});
