Event.build('rat-thief-start', {

  setting: {
    phase: 'after-work',
    location: 'great-hall',
  },

  requires:[
    'resource.blood-berries>=24',
    `minions.forager-count>0`
  ],
  actors: { C:'flag=character.first-scaven' },

  stages:[{
    pages:[
      { text:`Now, with the day's tasks almost complete, I return to the great hall. Almost as soon as I step into the
          room though I can tell that something is wrong.` },
      { text:`{{C::character.firstName}} still hasn't returned from {{his}} last trip out into the Hinterlands, so
          everything should be as I left it, but something is &hellip; ahh. The pile of blood berries that I've been
          collecting, they're gone.` },
      { text:`I know they were there when I left, and with {{C::character.firstName}} out foraging I can only assume
          that we have a thief, and almost certainly one of the other scaven.` },
      { text:`The question is what to do about it&hellip;` },
      { text:`Now that I think about it, leaving all of out supplies out in the open like this, isn't going to work for
          much longer anyway. It's convenient, but messy and insecure.` },
      { text:`Perhaps&hellip;` },
      { text:`Yes. I need to build a storeroom. I can convert one of the nearby empty rooms, clean it out, build some
          shelves out of some old broken furniture. I'll need to make a few more baskets to store our food in, but
          that's better than just letting everything lie out in the open.` },
      { text:`And then, with all of our food moved into a small space, I can set a trap, triggered if anyone other than
          me tries to mess with our food supplies. I'll need to restock my berries too of course. A trap is no good
          without a lure.` },
    ]
  }],

  onFinish: async choices => {
    const rat = await CharacterBuilder.buildStandardMinion({ minion:{ type:'pending', species:'scaven' }});

    Resource.destroy({ where:{ code:'blood-berries' }});
    AvailableEvent.add('rat-thief-strikes-again');
    AvailableProject.add('build-storeroom');
    Flag.set('character.rat-thief',rat.id);
  },

});
