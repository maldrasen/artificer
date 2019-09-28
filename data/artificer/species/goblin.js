Species.build('goblin', {
  name: 'Goblin',

  physical: 20,
  personal: 10,
  mental:   10,
  magical:  0,

  violenceAverage: 25,
  violenceRange: 50,

  bodyOptions: {
    baseHeight: 900,
    heightRange: 300,
    maleHeightAdjust: 100,

    skinColors: {
      green: 30,
      gray:  10
    },
    hairColors: {
      'black':       30,
      'gray':        5,
      'light-green': 20,
      'green':       15,
      'dark-green':  10,
    },
    eyeColors: {
      amber: 20,
      green: 40,
      gray:  20,
    },

    mouth: {
      averageTongueLength: 50,
    },
    tits:{ size:{
      average: 20,
      big:     60,
      huge:    20,
    }},
    cock:{ size:{
      average: 30,
      big:     20,
      huge:    10,
    }},
    pussy:{ condition:{
      tight: 20,
      average: 40,
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
//     insane: 100,
//     vicious: 20,
//   },
//   aspects: {
//     'lascivious': 40,
//     'perverted':  30,
//   },
