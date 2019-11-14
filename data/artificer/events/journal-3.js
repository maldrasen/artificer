Event.build('journal-3', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'afternoon',

  stages:[{
    pages:[
      { text:`Again I decide to spend the rest of the evening reading Malcolm's journal.` },
      { text:`The next several entries describe his and Wren's progress as they rebuild the ruined keep.` },
      { text:`It would seem that Malcolm had planned ahead for a big construction project like this.` },
      { text:`They brought all the tools they conceivably could, reminding me of my own desperate lack of such implements.` },
      { text:`Anything else they had a need for was built on site, a crane, a forge.` },
      { text:`I think some of the rubble in the courtyard might have been from a crane and I think I saw an old forge too among the debris of the lower keep.` },
      { text:`Malcolm writes in his journal with less frequency as the work slowly progresses.` },
      { text:`It isn't until the dead of winter that something truly interesting happens.` },
      { text:`While clearing some deteriorated crates from a basement storeroom Wren uncovered an entrance to an entirely new section beneath the keep.` },
      { text:`They had long suspected there was more to the keep's cellars that they hadn't yet found.` },
      { text:`After all, their Rat problem was still not completely taken care of, meaning they were still breeding someplace close by.` },
      { text:`The stonework in this new section was old; unimaginably old, older than the keep itself, which is by all reckonings already ancient.` },
      { text:`Malcolm goes into great detail here about the stonework, which as an antiquarian, he seems to know a great deal about.` },
      { text:`His normally perfect and elegantly formed writing seems almost rushed and careless as he starts to describe "The Well."` },
      { text:`The Well is clearly the focal point of this new set of vaults.` },
      { text:`It's a hole, flush to the floor, measuring thirteen {{meters}} across.` },
      { text:`A decorative frieze is carved about the circumference of the well, in a design reminiscent of tangled brambles, hemmed in by an inner and an outer ring border.` },
      { text:`The most notable feature of The Well though is that it seems bottomless.` },
      { text:`Malcolm and Wren both spend some time trying to ascertain it's depth, mostly by causing rocks and such to glow and watching as they tumble into the depths below.` },
      { text:`The lighted objects fall freely down The Well, lighting the smooth stone walls as they plummet.` },
      { text:`No matter how brightly they cause an object to glow though, after perhaps a dozen seconds or so of free fall, they disappear.` },
      { text:`They are not obscured, they simply grow too tiny to make out from what must be an immense distance.` },
      { text:`No sound of an impact can be heard either.` },
      { text:`In fact no sound at all, not even wind, comes from the seemingly bottomless pit.` },
      { text:`It's a shocking discovery, and clearly has something to do with the purpose of this place.` },
      { text:`Though its presence raises far more questions than answers.` },
      { text:`Interesting...` },
    ]
  },{
    requires:`flag.enqueued.clear-lower-keep-start`,
    pages:[
      { text:`The entrance to the cellars should be somewhere within the lower keep.` },
      { text:`Given the progress my rats and I are making in clearing the debris there, it should be accessible soon.` },
    ]
  },{
    requires:`no-flag.enqueued.clear-lower-keep-start`,
    pages:[
      { text:`There's still much work to be done in the lower keep though before I can even think about finding this Well.` },
      { text:`I should start by removing the rubble there.` },
    ]
  },{
    pages: [
      { text:`I must remain cautious though.` },
      { text:`There's no telling what I may uncover after all.` },
      { text:`With that in mind, I decide to turn in for the night.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'journal-4' }]);
  },

});
