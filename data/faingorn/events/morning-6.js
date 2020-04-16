Event.build('morning-6', {
  background:{ location:'great-hall', time:'morning' },
  time: 'morning',

  actors: { C:'any-minion' },

  stages:[{
    pages:[
      { text:`I wake up, well a bit horny if I'm being completely honest; thinking about some of the fun that could be
          had with my little minion willing to serve me in any way I see fit. I could always summon {{him}} to me
          before I send {{him}} out on {{his}} daily tasks.` },
      { narratorSpeaker:true, text:`You can now summon your minions to attend to your needs in the morning. Having sex
          with your minions can change their sexual tastes over time. For now, you should only select actions that your
          minions consent to, if you want to have a positive effect on their sexual skills.`, alert:{ unlock:'Summon Minion' }},
      { narratorSpeaker:true, text:`They might not always be willing to do what you'd like to do, but repeatedly raping
          your minions leaves them rather cross with you and lowers their effectiveness at other tasks.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('minions.can-summon','unlocked');
  },

});
