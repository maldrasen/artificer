Event.build('starving-single', {
  background:{ location:'great-hall', time:'morning' },
  repeatable: true,

  actors:{ C:'any-minion' },

  stages:[{
    pages:[
      { text:`I'm not sure what happened. {{C::character.firstName}} should have been able to forage enough food for
          the both of us, and yet there isn't enough for the both of us to eat. I need a way to find a way to fix this,
          and fast.` },
      { text:`&hellip;hunger can drive one to do terrible and desperate things.` },
    ],
  }],

});
