Event.build('unlock-training', {

  setting: {
    phase: 'wake',
    location: 'great-hall'
  },

  actors:{ C:'any-scaven' },

  stages:[{
    pages: [
      { text:`I wake up musing over the events of the past couple of days. {{C::character.firstName}} really does seem
          willing to do anything I ask of {{him}}. Perhaps it's time to start really pushing {{his}} limits a bit.` },
      { text:`Perhaps the thing to do would be to create a routine of it. After all, {{he}} spends {{his}} day working
          for me, but {{his}} night belong to me as well.` },
      { text:`And not just {{him}} of course. In time I will have many such minions, all of whom will need
          training&hellip; and not just sexually. If I spend some time training them every night, I can help them
          become stronger, better fighters, or perhaps just spend some time with them in order to make them more
          loyal to me.` },
      { requires:'player.has-cock', text:`Although, practicing their blowjob skills is important as well of
          course&hellip; We'll begin our training tomorrow then.` },
      { requires:'player.no-cock', text:`Although, practicing their pussy licking skills is important as well of
          course&hellip; We'll begin our training tomorrow then.` },
      { narratorSpeaker:true, text:`You have unlocked the training phase. After the day's work is complete you can
        select one of your minions to focus your attention on, and use that time to improve their attributes or skills
        sexual or otherwise.`, alert:{ unlock:'Training' }},
      { narratorSpeaker:true, text:`Your minion's sexual skills will only improve when they consent to the training you
        have in mind, but if it's your desire to punish and terrify them, you can do anything you like with them.
        Just don't expect them to be happy about it.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('training-view','Y');
  },

});
