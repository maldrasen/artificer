Event.build('journal-2', {
  background: { code:'journal' },
  time:'afternoon',

  stages:[{
    pages:[
      { text:`I retire for the evening and decide to read a bit more of Malcolm's journal.` },
      { text:`By his estimation, by the time he and the others found the keep, it had been abandoned for at least a
          thousand years, though even he couldn't say for sure how old the structure itself was. The map that led him
          here was from the twelfth age, which means that the keep had to be ten thousand years old at a minimum.` },
      { text:`For such an old structure though it's in remarkable shape. It's stone walls must have powerful
          enchantments to protect them from time and the elements.` },
      { text:`Again though, I'm struck by the strange nature of my memory loss.` },
      { text:`Is ten thousand years a long time?` },
      { text:`I have a nagging sensation that a building shouldn't be that old, but how old should a building be? What
          sort of world has ten thousand year old structures?` },
      { text:`The expedition encountered a warren of scaven here as well, early on in their explorations. He seems to
          absolutely hate the creatures though, calling them disgusting, dirty, disease ridden, soulless, little
          monsters.` },
      { text:`It's true, they are dirty and disease ridden. Soulless though seems an odd way to describe them.` },
      { text:`Perhaps that's some sort of religious designation? Some dogma regarding the little rodents that I'm
          unaware of and that he doesn't elaborate on?` },
      { text:`Malcolm would kill the scaven on sight, in increasingly brutal and painful ways; in order to train them,
          he writes, not to venture into the keep. In his journal he lavishes over the details in all the ways he
          finds to end them.` },
      { text:`The hours spent not killing rats were occupied by their investigations. He didn't know how long it would
          take to find what they were after. A situation further complicated by not knowing what they were looking for
          in the first place.` },
      { text:`Such an investigation might take years of careful study, and as a nobleman who was accustomed to a
          certain level of luxury, he wasn't about to spend that time simply camping. And so he had Ravingari spend
          his days making the keep as comfortable as possible; hunting game, building furniture, even a bit of
          weaving.` },
      { text:`Ahh. That would explain why some of the furniture, what I've found in the great hall mostly, is in pretty
          good condition still. Then for some reason they seem to have abandoned it all, leaving even this journal
          behind. I wonder what happened to them? Did something happen, or did they find what they were looking for and
          simply left?` },
      { text:`Ultimately I decide against reading ahead. I love a good story and wouldn't want to spoil it. Knowing
          their entire story may be of more value than jumping ahead in any case. I wouldn't want to skip over anything
          important after all.` },
      { text:`And with that in mind I set the book aside for the evening.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.add({ code:'journal-3' });
  },

});
