Event.build('journal-4', {
  background: { code:'journal' },
  time:'afternoon',

  stages:[{
    pages:[
      { text:`Again, I prepare for bed by reading a bit of Malcolm's journal.` },
      { text:`Though he spends several days at it, there isn't much more he can learn from the enigmatic hole.` },
      { text:`In the end, the longest he's able to track something falling into The Well is twenty seconds.` },
      { requires:'game.metric',     text:`Which means that it must be at least a few kilometers deep.` },
      { requires:'game.not-metric', text:`Which means that it must be at least a mile deep.` },
      { text:`That's an insurmountable depth, even for a mage.` },
      { text:`I can manage a rudimentary flight spell, enough to propel me a hundred {{meters}} or so.` },
      { requires:'game.metric',     text:`Flying though feels like sprinting, so while a hundred meters is manageable, flying several kilometers?` },
      { requires:'game.not-metric', text:`Flying though feels like sprinting, so while a hundred yards is manageable, flying a mile?` },
      { text:`Vertically?` },
      { text:`Well, it's nothing I could do.` },
      { text:`Not without the risk that I would simply pass out from the effort it would take to fly back up.` },
      { text:`Unconscious, I would then fall to my death for sure.` },
      { text:`Malcolm seems to have come to the same conclusion.` },
      { text:`He rules out everything else that obviously wouldn't work as well.` },
      { requires:'game.metric',     text:`A kilometer long rope would break under it's own weight.` },
      { requires:'game.not-metric', text:`A mile long rope would break under it's own weight.` },
      { text:`Climbing down The Well would take days.` },
      { text:`And what happens when you climb for days and still find no sign of the bottom?` },
      { text:`No, a better solution would have to be found.` },
      { text:`Instead of worrying about The Well, Malcolm instead turned his attention to the rest of the ancient vaults.` },
      { text:`Various architectural elements of the vault had been finely carved, but the carvings were difficult to understand.` },
      { text:`They're entirely abstract, and might simply be decorative, though he felt there had to be some deeper meaning in them.` },
      { text:`The carvings were organic in places and sharply angular and geometric in others; phasing between sensual and mechanical.` },
      { text:`The overall impression they left in Malcolm was of something deeply unsettling, though it was difficult for him to explain why.` },
      { text:`Meanwhile, while Malcolm was deep underground, Wren spent her time in more industrious pursuits.` },
      { text:`The keep's central courtyard was to become a small farm.` },
      { text:`What food they had brought with them couldn't last them forever, so their plan was to start growing some of their own once spring arrived.` },
      { text:`Game is plentiful here, even in the winter, so Wren would spend one or two days a week hunting to supplement their food supply.` },
      { text:`One day while out hunting she came across a field of sisal.` },
      { text:`Malcolm made note of this in his journal, taking note of the field's location should they ever need to harvest some.` },
      { text:`Sisal is a hearty plant, and a course and durable fiber can be harvested from its leaves.` },
      { text:`It's used to make rope primarily, but you can also use it to make rugs and burlap cloth.` },
      { text:`In fact, having some sisal would be of great benefit to me in my current situation.` },
      { text:`But that's enough of their tale for one night at least.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.add({ code:'journal-5' });
    Flag.set('mission.sisal-discoverable','unlocked');
  },

});
