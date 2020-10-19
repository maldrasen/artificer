Species.build('goblin', {
  name: 'Goblin',
  adjective: 'goblish',

  physical: 20,
  personal: 10,
  mental:   10,
  magical:  0,

  violenceAverage: 25,
  violenceRange: 50,
  foodPerDay: 3,

  bodyOptions: {
    baseHeight: 1000,
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
    pussy:{ conditionMap:{
      tight: 20,
      average: 40,
      loose: 20,
      gaping: 10,
    }},
    anus:{ conditionMap:{
      tight: 40,
      average: 30,
      loose: 10,
      gaping: 5,
    }}
  },

  skillCaps: {
    foraging: 1,
    hunting: 2,
  },

  // nameGenerator: GoblinNameGenerator,
  flags: ['goblin']
});
