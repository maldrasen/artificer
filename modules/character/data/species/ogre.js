Species.build('ogre', {
  name: 'Ogre',
  adjective: 'ogrish',

  physical: 70,
  personal: 10,
  mental:   0,
  magical:  0,

  violenceAverage: 50,
  violenceRange: 20,
  foodPerDay: 10,

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
      maxMouthWidth: 100,
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
    pussy:{ conditionMap:{
      tight: 10,
      average: 30,
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

  nameGenerator: GoblinNameGenerator,
  flags: ['goblin']
});
