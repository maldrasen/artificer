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
      { text:`I raise my arms and expand my aura into the room. I really don't know what I'm doing exactly. It feels
              right though; extending my being into the rafters above me. My thoughts reach out to one of the pigeons
              and close around it. I can feel it in my grip, and while it doesn't feel exactly real, it feels real
              enough.` },
      { text:`It struggles, trying to flap its wings against my grip. Trying to escape from something it can't really
              understand. With a quick sharp thought I snap its neck, letting it fall into my outstretched hand. I kill
              another in the same manner, catching it as well before it falls into the bird shit below.` },
      { text:`The other birds, they don't even seem to react, perhaps they drop dead like this all the time.` },
    ]
  },{
    choice:{ approach:'fire' },
    pages:[
      { text:`Standing with my feet firmly planted (though still submerged in bird shit) I prepare to let loose a burst
              of flame that will roast one of the impertinent looking birds where it sits. With a dramatic gesture I
              extend my hand and &hellip; don't do quite what I had hoped to.` },
      { text:`There was flame, a bright flash of searing heat that may have singed a few feathers, but the overall
              effect of was to scare the birds out of the rafters.` },
      { text:`Well shit. Looks like I'm having pigeon eggs for breakfast after all. Collecting eggs out of the bird's
              nests telekinetically proves to be a simple task, and soon I've gathered enough to feed me for the day.` },
    ]
  },{
    choice:{ approach:'eggs' },
    pages:[
      { text:`Pigeons. Nasty creatures. Rats with wings as far as I'm concerned. If I remember right their eggs aren't
              half bad though.` },
      { text:`I raise my arms and expand my aura into the room. I really don't know what I'm doing exactly. It feels
              right though; extending my being into the rafters above me. My thoughts reach into one of the nests, and
              close around one of the small eggs. I can feel it in my grip, and while it doesn't feel exactly real, it
              feels real enough.` },
      { text:`The birds look confused as their eggs float slowly down to me, though they don't really react otherwise.
              They're probably incapable of comprehending what's happening after all. Soon I'm able to collect a couple
              dozen of the eggs, enough to feed me for the day at least.` },
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
      { text:`In any case, I still have some searching to do. I'd like to see if anything at all usable remains in this
              place.` }
    ]
  },{
    requires:['flag.enqueued.morning-1-supplies'],
    pages:[
      { text:`In any case, I've managed to find food, water, clothing, and shelter; and so I return to the keep's great
              hall to decide what to do from there.` }
    ]
  }],

  onFinish: async choices => {
    await EventQueue.enqueueEvent(Flag.lookup('enqueued.morning-1-supplies') ? 'morning-1-end' : 'morning-1-supplies');
  },

});
