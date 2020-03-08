Event.build('morning-6', {
  background:{ location:'great-hall', time:'morning' },
  time: 'morning',

  actors: { C:'any-minion' },

  stages:[{
    pages:[
      { text:`I wake up, well a bit horny if I'm being completely honest; thinking about some of the fun that could be had with a little minion willing to serve me in any way I see fit.` },
      { text:`I could always summon {{C::gender.him}} to me before I send {{C::gender.him}} out on {{C::gender.his}} daily tasks.` },
      { narratorSpeaker:true, text:`You can now summon your minions to attend to your needs in the morning.`, alert:{ unlock:'Summon Minion' }},
      { narratorSpeaker:true, text:`Having sex with your minions can change their sexual tastes over time.` },
      { narratorSpeaker:true, text:`For now, you should only select actions that your minions consent to, If you want to have a positive effect on their sexual skills.` },
      { narratorSpeaker:true, text:`They might not always be willing to do what you'd like to do, and repeatedly raping your minions leaves them rather cross with you and lowers their effectiveness at other tasks.` },
    ]
  }],

  onFinish: async choices => {
    await Flag.set('minions.can-summon','unlocked');
  },

});
