Event.build('journal-2', {
  background: { code:'journal' },
  time:'afternoon',

  stages:[{
    pages:[
      { text:`I retire for the evening and decide to read a bit more of Malcolm's journal.` },
      { text:`By his estimation, by the time he and Wren find the place, it's been abandoned for at least a thousand years.` },
      { text:`For such an old structure though it's in remarkable shape.` },
      { text:`It's stone walls must have powerful enchantments to protect them from time and the elements.` },
      { text:`Anything however that had been made of wood had crumbled to dust and blown away.` },
      { text:`He expresses clear disappointment here.` },
      { text:`He wasn't sure what he'd find, but was hoping for more than stones and dust.` },
      { text:`...` },
      { text:`Again, I'm struck by the strange nature of my memory loss.` },
      { text:`Is a thousand years a long time?` },
      { text:`There's a nagging sensation that a building shouldn't be that old, but how old should a building be?` },
      { text:`What sort of world is this that it has thousand year old structures, and that's only of slight interest to a historian?` },
      { text:`...` },
      { text:`He and Wren encountered a warren of Rhysh Rats here as well, early on in their explorations.` },
      { text:`He seems to absolutely hate the creatures though, calling them disgusting, dirty, disease ridden, soulless, little monsters.` },
      { text:`It's true, they are dirty and disease ridden. Soulless though seems an odd way to describe them.` },
      { text:`Perhaps that's some sort of religious designation? Some dogma regarding the little rodents that I'm unaware of and that he doesn't elaborate on?` },
      { text:`Malcolm would kill the Rats on sight, in increasingly brutal and painful ways; in order to train them, he writes, not to venture into the keep.` },
      { text:`He lavishes over the details in all the ways he finds to end them.` },
      { text:`That might explain why the Rats reacted to me with such fear when they first saw me, although they do seem to be into that sort of thing.` },
      { text:`Other than killing Rats and sealing away their warrens he and Wren spend the next several weeks making the keep as livable as is possible.` },
      { text:`Though he found nothing but ruins here, he was still planning on uncovering the mystery of this place.` },
      { text:`Why was it built?` },
      { text:`What was it guarding against?` },
      { text:`Such an investigation might take years of careful study, and as a nobleman who was accustomed to a
              certain level of luxury, he wasn't about to spend that time simply camping.` },
      { text:`Thus he and Wren, though mostly Wren, begin to rebuild the keep; constructing roofs, doors, furnishings; anything they would need really.` },
      { text:`The ruins of their efforts lie all around me.` },
      { text:`I'm tempted to skip to the end of the journal to find out what had happened.` },
      { text:`Did some horrible fate befall them?` },
      { text:`Are they somehow responsible for these creatures that lurk outside?` },
      { text:`Or did they find what they were looking for and simply left?` },
      { text:`Ultimately I decide against reading ahead. I love a good story and wouldn't want to spoil it.` },
      { text:`Knowing their entire story may be of more value than jumping to conclusions anyway.` },
      { text:`I wouldn't want to skip over anything important after all.` },
      { text:`And with that in mind I set the book aside for the evening.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'journal-3' }]);
  },

});
