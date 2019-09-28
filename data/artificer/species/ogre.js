Species.build('ogre', {
  name: 'Ogre',

  physical: 70,
  personal: 10,
  mental:   0,
  magical:  0,

  violenceAverage: 50,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 2000,
    heightRange: 700,
    maleHeightAdjust: 200,

    skinColors: {
      green: 50,
      gray:  10,
    },
    hairColors: {
      'black':       30,
      'dark-green':  10,
      'gray':        20,
      'green':       10,
      'light-green': 10,
    },
    eyeColors: {
      amber: 20,
      green: 40,
      gray:  20,
    },

    mouth: {
      averageTongueLength: 80,
    },
    tits:{ size:{
      big: 60,
      huge: 20,
    }},
    cock: {
      widthRatio: 1.15,
      minimumWidth: 40,
      size: {
        average: 40,
        big: 20,
        huge: 10,
      }
    },
    pussy:{ condition:{
      tight: 10,
      average: 30,
      loose: 20,
      gaping: 10,
    }},
    anus:{ condition:{
      tight: 40,
      average: 30,
      loose: 10,
      gaping: 5,
    }}
  },

  nameGenerator: GoblinNameGenerator,
  flags: ['goblin']
});

//   personalities: {
//     brutish: 100,
//     average: 10,
//     vicious: 30,
//   },
//   aspects: {
//     'emotional': 50,
//     'perverted': 40,
//     'sadist':    60
//   },
