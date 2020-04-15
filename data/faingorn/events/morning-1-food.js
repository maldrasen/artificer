Event.build('morning-1-food', {
  background:{ location:'ruined-tower', time:'morning' },

  // TODO: Background, ruined tower.

  stages:[{
    pages:[
      { text:`It doesn't take too long for me to find my way into the keep's tower.` },
      { text:`It's condition is much as I expected it would be. With the roof having collapsed numerous birds have been
              nesting among the exposed rafters; and probably have been for decades given the two inch deep bird shit
              that covers every surface up here.` },
      { text:`Disgusting doesn't even begin to describe the scent. It's not enough to put a dent in my appetite, though
              I do wish I had been able to find some shoes.` },
      { text:`The birds, almost all pigeons, squawk loudly at my presence. For a moment I stand and stare at them.
              Perched as they are among the rafters they don't see me as a threat, just annoyed at my presence. How
              should I go about this though?` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'approach',
    selections:[
      { text:`Fireball. Works every time.`, value:'fire' },
      { text:`Perhaps I could grab one telekinetically.`, value:'grab' },
      { text:`Pigeons? I'll just grab some of their eggs instead.`, value:'eggs' },
    ]
  },{
    choice:{ approach:'grab' },
    pages:[
      { text:`(*) Crushing Bird Fist!`},
    ]
  },{
    choice:{ approach:'fire' },
    pages:[
      { text:`Standing with my feet firmly planted (though still submerged in bird shit) I prepare to let loose a burst
              of flame that will roast one of the impertinent looking birds where it sits. With a dramatic gesture I
              extend my hand and &hellip; don't do quite what I had hoped to.` },
      { text:`There was flame, a bright flash of searing heat that may have singed a few feathers, but the overall
              effect of was to scare the birds out of the rafters.` },
      { text:`Well shit. Looks like I'm having pigeon eggs for breakfast after all.` },
    ]
  },{
    choice:{ approach:'eggs' },
    pages:[
      { text:`(*) Looks like I'm eating eggs.`},
    ]
  },{
    pages:[
      { text:`However I'm feeling slightly dizzy. My heart's racing. I'm breathing heavily. That little bit of magic
              really took it out of me.` },
      { text:`I've realized or perhaps even remembered something important. There's a cost to using magic, an energy
              equivalence. That is, if I expend energy to make something happen, that energy has to come from somewhere
              within me. And that energy ultimately comes from the food I eat.` },
      { text:`I guess I won't really be throwing fireballs any time soon, although at the same time I have to assume
              that these magical powers must act like muscles that grow stronger the more they're used.` },
    ]
  },{
    requires:['no-flag.enqueued.morning-1-supplies'],
    pages:[
      { text:'(*) Now go get supplies' }
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(Flag.lookup('enqueued.morning-1-supplies') ? 'morning-1-end' : 'morning-1-supplies');
  },

});
