Event.build('ambush-rat-end-1', {

  stages:[{
    pages:[
      { text:`The day has just about passed. There's little time to do anything else, and I'm just exhausted
              regardless. I stoke the fire in the great hall's fireplace and arrange my pile of sleeping furs as my
              mind drifts, thinking back on the events of today.` },
      { text:`That scaven, {{he}} was rather sexy&hellip; for a rat at least. Absolutely filthy of course, and no doubt
              riddled with all manner of disease, but lythe and muscular too. Given a bath and some serious
              disinfectants, I could see sharing a bed with {{him}}.` },
      { text:`Come to think of it, despite the overly sexual nature of this keep, I really haven't thought much about
              my own sexuality yet. I wonder, what sort of partners do I prefer? Men? Women? Animals? Corpses?` },
      { text:`I should take my time, experiment for a bit, although when I think of my ideal partners&hellip;` },
    ]
  },{
    formPage:'sexuality-form',
  }],

  onFinish: async choices => {
    CurrentEvent.chain('ambush-rat-end-2');
    Flag.setAll({
      'player.fucks-men': choices.men,
      'player.fucks-futas': choices.futas,
      'player.fucks-women': choices.women,
    });
  },

});
