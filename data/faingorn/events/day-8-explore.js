Event.build('day-8-explore', {
  location: 'upper-keep',
  background:{ location:'upper-keep', time:'afternoon' },

  actors: { R:'any-scaven' },

  stages:[{
    pages:[
      { text:`Given all the free time that I find myself with I thought it would be a good idea to explore the keep a
          bit further. I started down in the cellars and have been working my way upwards over the last several days. I
          was hoping to find some more supplies, stashed away somewhere, but I haven't had any luck so far.` },
      { text:`Again I'm struck by how absolutely sexual the architecture is here.` },
      { text:`There are sculptures everywhere, usually incorporated into the architecture in some way, as buttresses,
          supports, or just as ornaments. Each sculpture is unique, and each is more perverse than the last. It's as
          though the original builders were trying to one up each other with how shocking they could be.` },
      { text:`Or perhaps this is all the work of one master carver, who over the decades that it must have taken to
          build this place, slowly went mad.` },
      { text:`Some of the sculptures are not even pornographic.` },
      { text:`They've gone to a realm well beyond erotica that while still sexual, have lost all connection with any
          real sex act or anything that one might find arousing.` },
      { text:`Well, unless you have some very peculiar sexual tastes that is&hellip;` },
      { text:`Today, I have started exploring the upper levels of the keep. Because the tower's roof has collapsed the
          highest rooms in the keep have suffered the most damage, so I haven't held out much hope for these rooms.
          That and I haven't been exactly thrilled about wading barefoot through several decades worth of bird shit
          again.` },
      { text:`Perhaps I'll have {{R::character.firstName}} lick my feet clean tonight&hellip;` },
      { text:`There's a statue at the landing of the topmost stairwell depicting a caprien woman in labor. Her features
          are very sheep like, but also twisted in pain and horror. Her legs are spread far apart and large wolf snout
          has pushed half way out of her very stretched pussy.` },
      { text:`From the size of the snarling mouth it looks like she's trying to give birth to a full grown wolf, and
          from the expression on its face it looks like it intends to devour her once that happens.` },
      { text:`The statue also has {{inch|1}} or so of bird shit heaped on top of it. I'm not sure if that enhances or
          detracts from whatever it was that the sculptor was going for here.` },
      { text:`Pressing on, I begin to search through the other rooms up here.` },
      { text:`I'm really tempted to just set fire to it all. The stone walls have been magically hardened and wouldn't
          be damaged by it, but in the end I decide not to. It's unlikely, but there still might be something
          salvageable up here.` },
      { text:`It's slow going as I try to avoid stepping into anything unnecessarily, building bridges and paths for
          myself with pieces of old wood from the collapsed roof.` },
      { text:`I think these rooms made up the master's chambers once. At one time they were finely decorated, but all
          that's left now are heaps of rot and scat and nothing at all that looks remotely useful.` },
      { text:`It's not until I'm searching what was once a study when I finally find something interesting. A large oak
          desk lies in the center of the room, crushed under a large wooden beam. The inside of the desk though, a
          couple of drawers at least, look like they've been fairly well sealed away.` },
      { text:`There's no way I'm opening the drawers normally, so I simply rip the side of the desk off with a
          telekinetic yank. Within, I find two things; a brass timekeeping device of some sort, and an old journal.
          What's surprising is that they're both in absolutely perfect condition.` },
      { text:`I examine the device first, a wheel of polished brass about the size of a dinner plate. It's a calendar I
          think. I mean I can't remember seeing anything quite like it, but I do somehow know what it is.` },
      { text:`The face of the calendar is divided into seven concentric rings. Reading from the outer ring in the date
          is, {{game|fullDate}}.` },
      { text:`Huh.` },
      { text:`Well, that doesn't help at all.` },
      { text:`I mean, I guess that's good to know, but it doesn't really change matters any.` },
      { text:`I take a look at the book next. It's an old leather bound journal with vellum pages maybe {{inch|1}} or
          so thick. Giving the book a quick flip through I can see that it's about halfway full and handwritten in a
          neat thin script.` },
      { text:`Both items are clearly magical and perhaps enchanted with spells of permanency that have prevented them
          from aging. It's an interesting find though and might shed some light on what happened here. Perhaps I'll
          read a bit of it this evening.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('location-menu.show-date','unlocked');
    AvailableEvent.add({ code:'journal-1' });
  },

});
