let goblin = Species.build('goblin', {
  name: 'Goblin',

  bodyOptions: {
    baseHeight: 900,
    heightRange: 300,
    maleHeightAdjust: 100,
    skinColors: ['green','gray'],
    hairColors: ['black','gray','light-green','green','dark-green'],
    mouth: {
      elasticity: 2,
      averageTongueLength: 50,
    },
    tits: {
      averageSize: 700,
    },
    cocks: {
      averageSize: 130,
      widthRatio: 1.25,
    },
    balls: {
      extraProduction: 1,
    },
    pussy: {
      averageSize: 35,
      elasticity: 6,
      cervixElasticity: 3,
    },
    anus: {
      elasticity: 5,
    },
  },
});

//   flags: ['goblin'],
//   personalities: {
//     insane: 100,
//     vicious: 20,
//   },
//   aspects: {
//     'lascivious': 40,
//     'perverted':  30,
//   },
//   physical: 20,
//   personal: 10,
//   mental:   10,
//   magical:  0,
