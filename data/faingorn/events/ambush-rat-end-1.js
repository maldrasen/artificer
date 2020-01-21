Event.build('ambush-rat-end-1', {
  location: 'great-hall',
  background:{ location:'great-hall', time:'evening' },

  actors:{ R:'any-scaven' },

  stages:[{
    pages:[
      { text:`The day has just about passed.` },
      { text:`There's little time to do anything else, and I'm just exhausted regardless.` },
      { text:`I stoke the fire in the great hall's fireplace and arrange my pile of sleeping furs close by.` },
      { text:`My mind drifts, thinking back on the events of today.` },
      { text:`That scaven, {{R::gender.he}}‌ was rather sexy&hellip; for a rat at least.` },
      { text:`Absolutely filthy of course, and no doubt riddled with all manner of disease, but lythe and muscular too.` },
      { text:`Given a bath and some serious disinfectants, I could see sharing a bed with {{R::gender.him}}.` },
      { text:`With the events of the last couple of days, I haven't been able to give much thought to sex or even my own sexuality yet.` },
      { text:`I wonder, what sort of partners do I prefer?` },
      { text:`Men? Women? Animals? Corpses?` },
      { text:`I should take my time, experiment for a bit, although when I think of my ideal partners they would be&hellip;` },
    ]
  },{
    formPage:'sexuality-form',
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent('ambush-rat-end-2',{ actors:{ R:choices.event.actorIDs.R }});
    await Flag.setAll({
      'player.fucksMen': choices.men,
      'player.fucksFutas': choices.futas,
      'player.fucksWomen': choices.women,
    });
  },

});
