Event.build('journal-3', {
  background: { code:'journal' },
  time:'afternoon',

  actors: { R:'any-scaven' },

  stages:[{
    pages:[
      { text:`Again I decide to spend the rest of the evening reading Malcolm's journal.` },
      { text:`The next several entries describe the progress that he and Wren make in their investigations. From the
          sound of it it's all rather dry and tedious work. It isn't until the dead of winter when something truly
          interesting happens.` },
      { text:`While clearing some deteriorated crates from a basement storeroom Wren uncovered an entrance to an
          entirely new section beneath the keep. They had long suspected there was more to the keep's cellars that they
          hadn't yet found. After all, their scaven problem was still not completely taken care of, meaning they were
          still breeding someplace close by.` },
      { text:`The stonework in this new section was old; unimaginably old, older than the keep itself and perhaps even
          from the first age. Malcolm goes into great detail here about the stonework, which as an antiquarian, he
          seems to know a great deal about.` },
      { text:`His normally perfect and elegantly formed writing seems almost rushed and careless as he starts to
          describe "The Well."` },
      { text:`The Well is clearly the focal point of this new set of vaults. It's a hole, flush to the floor, measuring
          thirteen {{meters}} across. A decorative frieze is carved about the circumference of the well, in a design
          reminiscent of tangled brambles, hemmed in by an inner and an outer ring border.` },
      { text:`The most notable feature of The Well though is that it seems bottomless.` },
      { text:`Malcolm and Wren both spend some time trying to ascertain it's depth, mostly by dropping glowing rocks
          and watching as they tumble into the depths below. They fall freely down The Well, lighting the smooth stone
          walls as they plummet, but no matter how brightly they cause an object to glow the light from the stones
          grow too dim to make out.` },
      { text:`No sound of an impact can be heard either.` },
      { text:`It's a shocking discovery. Malcolm clearly believes that it has something to do with the purpose of this
          place, and why the all records of it have been erased. In all of his study he's never heard of anything quite
          like it.` },
      { text:`I should talk to {{R::character.firstName}} about this, see what {{he}} knows about this <i>Well</i>. The
          fact that the scaven call themselves the Deep Hole Clan can't be a coincidence.` },
      { text:`With that in mind, I decide to turn in for the night.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.add('journal-4');
    LocationEvent.enable('journal-4-well-talk');
  },

});
