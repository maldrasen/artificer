let ogre = Species.build('ogre', {
  name: 'Ogre',

  bodyOptions: {
    baseHeight: 2000,
    heightRange: 700,
    maleHeightAdjust: 200,
    skinColors: ['green','gray'],
    hairColors: ['black','gray','light-green','green','dark-green'],
    mouth: {
      averageTongueLength: 80,
      averageThroatWidth: 50,
    },
    tits: {
      averageSize: 650,
    },
    cocks: {
      averageSize: 380,
      urethraWidth: 3,
      widthRatio: 1.15,
    },
    balls: {
      extraProduction: 1,
    },
    pussy: {
      averageSize: 80,
      urethraWidth: 3,
    }
  },
});

//   flags: ['goblin'],
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
//   physical: 70,
//   personal: 10,
//   mental:   0,
//   magical:  0,
