Event.build('journal-1', {
  background: { code:'journal' },

  setting: {
    phase: 'night',
    location: 'player-bedroom'
  },

  stages:[{
    pages:[
      { text:`The light of the day is fading, and with nothing more pressing at hand, it seems like a good time to
          start reading this journal I found.` },
      { text:`The book itself is large, bound in dark leather with fine vellum pages. The bookbinder who made this was
          clearly a master at his craft. It's in remarkable condition as well, especially considering that it's been
          locked in a drawer for who knows how long. It's clearly been enchanted somehow to preserve it against the
          elements.` },
      { text:`I open it to the first page and see that the first entry is dated, "Day of Ruby, Summer, Year of The
          Raging Goblin, 13th Age"` },
      { text:`I glance over at the calendar device I found earlier. It reads {{game|fullDate}}, so that would put the
          start of this journal somewhere around fifty years ago I think. I'd have to consult a processional table
          though to be sure.` },
      { text:`Such an inconvenient way of keeping time. Someone should really invent a more intuitive way of naming the
          days and years. Perhaps something where days are simply numbered?` },
      { text:`Later&hellip;` },
      { text:`The great hall has grown completely dark by the time I finish reading the first dozen or so entries. With
          a wave of my hand I extinguish the small glowing orb hovering over my shoulder, lay back, and think about
          what I had read.` },
      { text:`The journal was written by a Lord Malcolm Eigendrax, a nobleman from the city of Dennevar.` },
      { text:`The man described himself as an antiquarian, a man who searches for treasures from a time long forgotten.
          One of these treasures was apparently a map he had found, tucked away in some long forgotten vault.` },
      { text:`On that map he had found a place called Faingorn Keep. It piqued his curiosity because there didn't seem
          to be any need for a military structure like that out in the Hinterlands which had never been home to any
          great lord.` },
      { text:`And so, digging a bit deeper he found something that made him even more curious. Nothing about the fort
          itself, but evidence of tampering; missing records, missing pages, a corner of a map that's been
          'accidentally' torn away.` },
      { text:`He was convinced that there was some concerted effort to eliminate Faingorn keep from any record,
          official or otherwise. And so, he decided to form an expedition of sorts, to travel deep into the Hinterlands
          to see this keep, or at least whatever was left of it, for himself.` },
      { text:`It was a small expedition, just three people. Lord Malcolm himself, his assistant Wren, and a woodsman
          named Ravingari. It took six weeks for them to reach the Hinterlands, though they were traveling slowly.` },
      { text:`Whoever these people were who erased the existence of the keep might not have any qualms about erasing
          the existence of those who went looking into it either.` },
      { text:`And so they traveled lightly, doing whatever they could to not draw attention to themselves. They took
          the back roads and cut through the wilderness whenever they could. And they made sure not to tell anyone
          where they were going or even that they had left.` },
      { text:`When they arrived at the keep they found it abandoned, in essentially the same state that I found it in.
          He spends several entries describing the keep and its sculptures, in a shocked tone that none the less
          described everything in lurid detail.` },
      { text:`While he felt some satisfaction in proving that the place did at least exist he wasn't any closer to
          finding any answers about the place. And so they decided to set up a permanent camp in the keep so that they
          could spend the next several months pulling apart its secrets.` },
      { text:`So, this is Faingorn Keep then&hellip; Well, at least I have a name for the place now, though as the
          keep's new {{P::character.title}} perhaps I should name it after myself?` },
    ]
  },{
    formPage: 'keep-name-form'
  },{
    pages:[{ text:`And with that decided, I retire for the evening.` }]
  }],

  onFinish: async choices => {
    AvailableEvent.add('journal-2');
    Flag.set('location.keep-name',choices.name);
  },

});
