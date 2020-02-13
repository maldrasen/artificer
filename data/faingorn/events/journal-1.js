Event.build('journal-1', {
  background: { code:'journal' },
  time:'afternoon',

  stages:[{
    pages:[
      { text:`The light of the day is fading, and with nothing more pressing at hand, it seems like a good time to start reading this journal I found.` },
      { text:`The book itself is large, bound in dark leather with fine vellum pages.` },
      { text:`The bookbinder who made this was clearly a master at his craft.` },
      { text:`It's in remarkable condition as well, despite being found buried beneath the rubble of the tower's former roof.` },
      { text:`It's clearly been enchanted with spells of durability and permanence.` },
      { text:`Just holding the book in my hands is enough to tell me that though. It simply throbs with magical energies.` },
      { text:`I crack it open to the journal's first page.` },
      { text:`The first entry is dated, "Day of Ruby, Summer, Year of The Raging Goblin, 13th Age"` },
      { text:`I glance over at the calendar device I found earlier. It reads {{game|fullDate}}` },
      { text:`I think that's somewhere around fifty years ago. I'd have to consult a processional table though to be sure.` },
      { text:`Such an inconvenient way of keeping time. Someone should really invent a more intuitive way of naming the days and years.` },
      { text:`Perhaps something where days are simply numbered?` },
      { text:`...` },
      { text:`..` },
      { text:`.` },
      { text:`The great hall has grown completely dark by the time I finish reading the first dozen or so entries.` },
      { text:`With a wave of my hand I extinguish the small glowing orb hovering over my shoulder, lay back, and think about what I had read.` },
      { text:`The journal was written by a Lord Malcolm Eigendrax, a nobleman from a city far west of here called Dennevar.` },
      { text:`The man described himself as an antiquarian, a man who searches for treasures from a time long forgotten.` },
      { text:`One of these treasures was apparently a map he had found, tucked away in some long forgotten vault somewhere.` },
      { text:`On that map he had found a place called Faingorn Keep, the "largest known structure in the eastern Hinterlands"` },
      { text:`Beyond the map though, he could find nothing about a Faingorn Keep mentioned in any other historical record he could find.` },
      { text:`Nor could he find any reason why anyone would build a keep that far from the city of Dennevar.` },
      { text:`Was it a defensive structure? If so, what could it possibly be protecting?` },
      { text:`With those questions in mind he decided to form an expedition of sorts, to travel deep into the Hinterlands to see this keep for himself.` },
      { text:`This Dennevar city must be some great distance from here.` },
      { text:`Even on horseback it took him and his assistant Wren, five weeks to finally find the keep.` },
      { text:`They did have to spend a week or so searching for the place, even so...` },
      { text:`<i>I do the math quickly in my head.</i>` },
      { text:`That's maybe two or three hundred miles away?` },
      { text:`Not a journey I'll be doing on foot any time soon at least.` },
      { text:`Not with those <i>things</i> out there.` },
      { text:`It's curious there's no mention of twisted abominations of any sort in the journal.` },
      { text:`If they didn't encounter any does that indicate that they're a recent problem, or am I just lucky?` },
      { text:`In any case it's certain that this is Faingorn Keep.` },
      { text:`Well, at least I have a name for the place now, though as the keep's new {{P::character.title}} perhaps I should name it after myself?` },
      { text:`=== TODO: Dialog where you can rename the keep and the hinterlands ===` },
      { text:`And with that decided, I retire for the evening.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'journal-2' }]);
  },

});
