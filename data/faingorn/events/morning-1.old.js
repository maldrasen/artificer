Event.build('morning-1-old', {
  location: 'courtyard',
  background:{ location:'courtyard', time:'morning' },

  stages:[{
    pages:[





      { narratorSpeaker:true, text:`During the day you will be able to plan that day's activities.`, alert:{ unlock:"Projects" }},
      { narratorSpeaker:true, text:`For today, add a project to create some crude fur clothing.` },

      { text:`This place though, it's strange.` },
      { text:`The architecture here, from the way it was constructed to how it was decorated, it's unsettling.` },
      { text:`I wouldn't say that I was disturbed by it; it takes a lot to disturb me.` },
      { text:`The first thing I noticed was that the architecture here is elven, though I'm not exactly sure how I know it's elven.` },
    ]
  },{
    requires: 'player.elf',
    pages:[
      { text:`I am an elf, so perhaps there's some cultural memory that comes along with this form.` },
      { text:`I recognize it because it's the architectural style of my people.` },
    ]
  },{
    requires: 'player.not-elf',
    pages:[
      { text:`I may have no memory, but I find that I do have knowledge.` },
    ]
  },{
    pages:[
      { text:`This place has all the hallmarks of elven construction, sweeping organic forms, stone walls that look like they were grown rather than built.` },
      { text:`Every room seems to be built to allow the maximum amount of natural light in as possible.` },
      { text:`The walls are stone, but they're not solid.` },
      { text:`They act more like bones, just there to maintain the structure of the building while its form is mostly defined by its windows.` },
      { text:`While I feel like all of this is normal, everything else I've seen is decidedly not.` },
      { text:`The architecture here is&hellip; sexual, for lack of a better word.` },
      { text:`I can't imagine that it's the norm for all of a building's ornamentation to be bondage and sadomasochism themed, but that's what we have here.` },
      { text:`From the statues in the great hall alone one might assume that was once a cathedral of some ostentatious sex cult.` },
      { text:`The keep though doesn't have the layout of a church.` },
      { text:`It has the layout of a home.` },
      { text:`A grand home to be sure, with servants quarters and other luxurious amenities, but it is the home of a single family, or perhaps even one single incredibly perverse person.` },
      { text:`I haven't seen a single room in this keep that doesn't have a dick carved into it somewhere.` },
      { text:`And when compared to all of the pierced and gaping assholes, overstuffed wide spread pussies, and bound and smashed tortured tits everywhere, the dicks almost seem pedestrian.` },
      { text:`No subject seems to have been taboo or off limits to the sculpture who made all of this.` },
      { text:`Torture, bestiality, scatophilia, are all well represented in the keep's ornamentation, with all three sometimes combined into a single work.` },
      { text:`It's all quite too much, though I have to assume that must be the point; that the too-muchness of it all is meant to overwhelm, disorient, and perhaps even disgust.` },
      { text:`I do find myself drawn to it though, some of it at least.` },
      { text:`The fountain in the entry hall has caught my eye more than once as well.` },
      { text:`A tiny looking Selkie girl sits in the middle of the fountain, her face upturned and mouth opened wide to catch the piss streams of the dozen or so men arranged in a semicircle around her.` },
      { text:`It's quite the piece, and looks like it might actually be a good source of fresh water, even if it is dick water and all.` },
      { text:`At one point, the keep must have been even more depraved and oppulant, back before anything that wasn't nailed down was scavenged away.` },
      { text:`Despite it all though, I think I will grow to like it here.` },
      { text:`For as long as I'm here at least.` },
    ]
  }],

  onFinish: async choices => {
  },

});
