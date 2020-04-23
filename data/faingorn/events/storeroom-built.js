/* I used wood reclaimed from around the keep to build some completely
haphazard shelves. Which is good because it hides their true purpose. The
basketof blood berries are on the top shelf. To get at them the thief will have
to climb, but thier weight should be enough to cause the haphazard shelves to
collapse, and when they do they'll collapse onto the door, slaming it shut,
trapping the theif inside, and making a lot of noise. At least that's how it
should work in theory. Lots that could go wrong with this sort of setup, but I
think it has a fair chance of working.*/

Event.build('storeroom-built', {

  setting: {
    phase: 'after-work',
    location: 'storeroom',
  },

  stages:[{
    pages:[
      { text:`(*) I have built the storeroom and set the trap.` },
    ]
  }],

});
