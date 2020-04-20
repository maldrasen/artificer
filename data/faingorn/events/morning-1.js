Event.build('morning-1', {

  setting: {
    phase: 'morning',
    location: 'courtyard'
  },

  stages:[{
    pages:[
      { text:`I wake up early the next morning. I'm surprised that I could sleep at all given the constant howling
              wind.` },
      { text:`After gathering wood for a fire I decided to sleep out in the courtyard. With the fire warming my body,
              sleeping nude under the stars just felt right, and an overgrown patch of long grass was certainly more
              comfortable than a hard stone floor.` },
      { text:`The remains of my fire sit smoldering a few feet away from me. I stretch and yawn. A cold shiver runs
              through my body, reminding me that clothing will become a necessity soon.` },
      { text:`Food and water as well of course. I still haven't eaten anything and in these early morning hours I'm
              feeling particularly famished.` },
      { text:`I stoke the fire back to life and contemplate my situation. There's at least one more issue that needs
              thought through before I begin the day's work.` },
      { text:`It would appear that I'm a wizard.` },
      { text:`Or a mage or whatever term is best used to describe someone who can cause wood to burst into flame with a
              thought.` },
      { text:`I was having some difficulty starting a file last night. I had no tools of any sort, and for a while I
              was at a loss for what to do. My mind raced with thoughts of flame, and that was apparently enough to
              conjure them into being.` },
      { text:`Without seemingly doing anything I was able to make a crackling little fire in no time at all. The effort
              though left me exhausted. I lay down next to the fire and was asleep before I could even think over what
              happened.` },
      { text:`It's only now that I'm really able to contemplate it, although I suppose it doesn't really address my
              immediate problems. No amount of thinking of food seems to summon it to me.` },
      { text:`So then, what should be my first priority? ` },
    ]
  },{
    selectionPage: true,
    selectionKey: 'task',
    selections:[
      { text:`Scavenge the keep for supplies.`, value:'supplies' },
      { text:`Search for some food and water.`, value:'food' },
    ]
  },{
    choice:{ task:'supplies' },
    pages:[
      { text:`Wandering about the keep in the nude seems ill advised. While the place certainly seems abandoned that
              doesn't mean that it's free from all danger. Some shoes would be nice to have at the very least. `},
    ]
  },{
    choice:{ task:'food' },
    pages:[
      { text:`The rumbling in my stomach informs me that food is my first priority.` },
      { text:`However, this land is barren and foraging will be difficult and time consuming.` },
      { text:`There do seem to be birds however&hellip; I glance up at the keep's single tall tower encircled about by
              numerous small flying shapes. Already the thought of a roasted bird has my mouth watering.` },
      { text:`I'll need to make my way through the keep and up into it's tower first though. I need to be cautious.
              There's no telling what I may find within.` },
    ]
  },{
    pages:[
      // TODO: Background, the keep's front door.
      { text:`I approach the keep's entrance. The front door's in better shape than the courtyard gate. It's hanging
              open, but it remains on its hinges at least.` },
      { text:`Looking down at the threshold I can see pawprints in the dust. They're about {{inches|4}} long and padded.
              Made by animals of some sort, though not anything I recognize. It isn't surprising that something would
              want to make this place into their lair. The question is what exactly?` },
      { text:`Well, whatever it is isn't going to stop me, so I press on and begin my search.` },

      // TODO: Background, piss fountain
      { text:`The sound of running water leads me to my first discovery, a large fountain of sorts centrally located on
              the keep's main floor. Like the statue out in the courtyard, it looks like the goal of whoever designed
              the fountain was to be as filthy as possible.` },
      { text:`A tiny looking Selkie girl sits in the middle of the fountain, her face upturned and mouth opened wide to
              catch the piss streams of the dozen or so men arranged in a semicircle around her. Her hands are gripping
              her plump breasts from below, holding them so that the few streams not filling her mouth splash upon them
              instead.` },
      { text:`Despite the subject matter the running water looks clear and clean. So at least I'll have a source of
              water here, even if it is statue dick water.` },

      // TODO: Background, cistern
      { text:`Next to the fountain a small door leads to an expansive bathroom. It would make sense that all the
              plumbing would be centralized in this one small area, though it look like there's only the single shared
              bathroom for the keep. It's large enough that a dozen or so people could use it at once, if they had no
              qualms or need for privacy.` },
      { text:`With that sorted out I continue my search.` }
    ]
  }],

  onFinish: async choices => {
    Flag.set('events.morning-1',`did-${choices.task}`);
    Game.chainEvent(`morning-1-${choices.task}`);
  },

});
