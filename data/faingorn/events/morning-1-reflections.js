Event.build('morning-1-reflections', {
  background:{ location:'courtyard', time:'morning' },

  stages:[{
    pages:[
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
    ]
  }],

});
