Event.build('morning-4', {

  setting: {
    phase: 'wake',
    location: 'great-hall'
  },

  requires: ['game.dayNumber=4'],

  stages:[{
    pages:[
      { text:`I wake up feeling restless.` },
      { text:`It's not that I didn't sleep well. I just feel like I'm not doing enough with what time I have. My minion
          is out all day gathering food and supplies for us, and that's all well and good, but at the moment there
          isn't much I can do to contribute.` },
      { text:`Perhaps if I were stronger&hellip;` },
      { playerSpeaker:true, text:`"It's strange," I say to myself, looking at one of my hands in the early morning
          light. I find myself with control over the elements, though really I have no idea how this happened. There
          must be others who share this power, but how rare is it really?` },
      { text:`I have the feeling that I'm somehow unusual, but I couldn't say why. I don't really understand what I'm
          doing when I'm doing it. I just act on instinct. I envision what I want to do, then I just do it.` },
      { text:`It's like walking or breathing.` },
      { text:`If I'm being honest though I don't really know what I'm doing or even what I'm capable of doing. In fact,
          I barely know who I am at all.` },
      { text:`I think it would be a good idea to spend a little time in the morning practicing with these magical
          powers I find myself with. I need to know what I can do, and what my limits are.` },
      { narratorSpeaker:true, text:`You can now meditate during the day. Spending time in meditation will help you
          master your magical abilities.`, alert:{ unlock:'Task: Meditate' }},
    ]
  }],

  onFinish: async choices => {
    Flag.set('plan-view.tasks.meditate','Y');
    AvailableEvent.add('day-8-explore');
    AvailableEvent.add('magic-practice-1-1');
    AvailableEvent.add('magic-practice-1-2');
    AvailableEvent.add('magic-practice-1-3');
    AvailableEvent.add('magic-practice-1-4');
  },

});
