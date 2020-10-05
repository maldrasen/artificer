Event.build('storeroom-built', {

  setting: {
    phase: 'after-work',
    location: 'storeroom',
  },

  stages:[{
    pages:[
      { text:`I've finished building my combination store room and rat trap.` },
      { text:`I used wood reclaimed from around the keep to build some completely haphazard shelves. I could have done
          a better job on them, but their janky nature hides their true purpose.` },
      { text:`The basket of blood berries are on the top shelf. To get at them the thief will have to climb the
          shelves, but their weight should be enough to cause the unstable shelves to collapse, and when they do
          they'll collapse onto the door, slamming it shut, trapping the thief inside, and making a lot of noise.` },
      { text:`At least that's how it should work in theory.` },
      { text:`A lot could go wrong with this sort of setup, but I think it has a fair chance of working.` },
    ]
  }],

});
