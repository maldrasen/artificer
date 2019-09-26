let ogre = Species.build('ogre', {
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
    // skinColors: ['green','gray'],
    // hairColors: ['black','gray','light-green','green','dark-green'],
    // mouth: {
    //   averageTongueLength: 80,
    //   averageThroatWidth: 50,
    // },
    //

    tits:{ size:{
      big: 60,
      huge: 20,
    }},
    cock: {
      urethraWidth: 3,
      widthRatio: 1.15,
      minimumWidth: 40, // 1.5 inch min with for ogres
      size: {
        average: 40,
        big: 20,
        huge: 10,
      }
    },


    // balls: {
    //   extraProduction: 1,
    // },
    // pussy: {
    //   averageSize: 80,
    //   urethraWidth: 3,
    // }
  },
  nameGenerator: GoblinNameGenerator,
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
