Event.build('magic-practice-1-3', {
  background: { location:'great-hall', time:'morning' },
  time:'morning',

  stages:[{
    pages:[
      { text:`I've spent the last few mornings practicing moving rocks about.` },
      { text:`I feel like force is the simplest of magics, but as such it's something I want to be completely comfortable with.` },
      { text:`Picking up a rock with my mind should feel like second nature, something I ought to be able to do without even thinking about it.` },
      { text:`It's tiring, but I feel like my stamina is improving as well.` },
      { text:`When I first started practicing, lifting a rock magically took more effort than lifting one by hand.` },
      { text:`Now the opposite is true, though just barely.` },
      { text:`I don't think I'll be willing myself to fly about the battlements any time soon, but both my stamina and control are steadily improving.` },
      { text:`I wanted to branch out a bit this morning though.` },
      { text:`I know can make fire and light on demand as well.` },
      { text:`Doing so feels similar to using force, but in a way that's difficult to explain with words.` },
      { text:`It's like singing a song in a different key, except not at all like that.` },
      { text:`I concentrate on a space directly in front of me and produce a flame.` },
      { text:`Nothing big, just a flickering candle light.` },
      { text:`The trick though is keeping it sustained; burning, but fueled by nothing but willpower.` },
      { text:`It's not too difficult and something I could probably do indefinitely without growing overtired.` },
      { text:`I stoke the flame a bit, making it larger, brighter, hotter until I can feel the heat from it radiating against my face.` },
      { text:`This takes a bit more work.` },
      { text:`I'm sweating again, and not just from the heat of the flame.` },
      { text:`Finally, I let the fire die, stopping to catch my breath and to think.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"It's all energy, though isn't it?"</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"In one form or another."</span>` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Kinetic, thermal, radiant, perhaps even..."</span>` },
      { text:`I hold my hand out and watch as white blue sparks arc between my fingertips.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"... yes. Electric."</span>` },
      { text:`It's a strange sensation, I feel like I've learned something, but that's not true.` },
      { text:`I've remembered something.` },
      { text:`I know electricity.` },
      { text:`I understand its principles.` },
      { text:`There isn't anything in this old keep that runs on electricity though, so why am I familiar with it?` },
      { text:`Shaking my head, I stand up and get ready for today's work.` },
    ]
  }],

  onFinish: async () => {
    const game = await Game.instance();
    AvailableEvent.add({
      code:'magic-practice-1-4',
      requires:`game.dayNumber=${game.dayNumber+2}`
    });
  },

});
