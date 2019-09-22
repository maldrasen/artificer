let naga = Species.build('naga', {
  name: 'Naga',

  bodyOptions: {
    baseHeight: 1600,
    heightRange: 800,
    maleHeightAdjust: 300,
    shape:'half-snake',
    scaleColors: ['green','gray'],
    skinColors: ['red','green','black'],
    tailShape: 'snake',
    mouth: {
      shape: 'snake',
      tongueShape: 'forked',
      elasticity: 10,
      averageTongueLength: 300,
      averageSize: 600,
      averageThroatWidth: 400,
    },
    tits: {
      averageSize: 300,
    },
    cocks: {
      count: 2,
      averageSize: 250,
      shape: 'snake',
    },
    balls: {
      internal: true,
    },
    pussy: {
      shape: 'snake',
      averageSize: 100,
    }
  },
});

//   flags: ['scalie'],
//   personalities: {
//     average: 30,
//     vicious: 70,
//   },
//   aspects: {
//     'sadist': 60,
//     'dominant': 80
//   },
//   physical: 20,
//   personal: 10,
//   mental:   30,
//   magical:  30,
