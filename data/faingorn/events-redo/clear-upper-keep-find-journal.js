Event.build('clear-upper-keep-find-journal', {
  background: { location:'study', locationState:'ruined' },

  stages:[{
    pages:[
      { text: `Clearing out the keep's upper floors is proving to be a monumental task.` },
      { text: `The entire roof's caved in, and in the intervening years the debris from the roof have become home to a multitude of nesting birds.` },
      { text: `Which of course means that most of the tower's top floor is covered in ankle deep bird shit.` },
      { text: `I'm tempted to just set fire to it all.` },
      { text: `The stone walls have been magically hardened and wouldn't be damaged, but in the end though I decide not to.` },
      { text: `It's unlikely, but there might be something salvageable up here.` },
      { text: `...` },
      { text: `It's late in the afternoon when my hunch proves correct.` },
      { text: `One of the rooms on the top floor seems to have been a study of some sort.` },
      { text: `Under the rubble and on top of what was once a desk I find two things; a brass timekeeping device of some sort, and an old journal.` },
      { text: `What's surprising is that they're both in absolutely perfect condition.` },
      { text: `I examine the device first, a wheel of polished brass about the size of a dinner plate.` },
      { text: `It's a calendar I think.` },
      { text: `I mean I can't remember seeing anything quite like it, but I do somehow know what it is.` },
      { text: `The face of the calendar is divided into seven concentric rings.` },
      { text: `Reading from the outer ring the date is, {{game|fullDate}}.` },
      { text: `Huh.` },
      { text: `Well, that doesn't help at all.` },
      { text: `I mean, I guess that's good to know, but it doesn't really help matters any.` },
      { text: `I take a look at the book next.` },
      { text: `It's an old leather bound journal with vellum pages maybe an inch or so thick.` },
      { text: `Giving the book a quick flip through I can see that it's about halfway full and hand written in a neat thin script.` },
      { text: `Both items are clearly magical and perhaps enchanted with spells of permanency that have prevented them from aging.` },
      { text: `It's an interesting find though and might shed some light on what happened here.` },
      { text: `Perhaps I read a bit of it this evening.` },
    ]
  }],

  onFinish: async () => {
    Flag.set('locationMenu.showDate','unlocked');
    AvailableEvent.addAll([{ code:'journal-1' }]);
  },

});
