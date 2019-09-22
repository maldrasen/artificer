let kobold = Species.build('kobold', {
  name: 'Kobold',

  bodyOptions: {
    baseHeight: 750,
    heightRange: 300,
    maleHeightAdjust: 100,
    scaleColors: ['red','gold','green','blue','purple','black','white'],
    skinColors: ['red','green','blue','purple','black'],
    tailShape: 'dragon',
    mouth: {
      shape: 'dragon',
      tongueShape: 'forked',
      averageTongueLength: 100,
      averageSize: 150,
      averageThroatWidth: 30,
    },
    cocks: {
      averageSize: 100,
      urethraWidth: 1,
      shape: 'dragon',
      sheath: 'scales',
    },
    pussy: {
      averageSize: 50,
      urethraWidth: 1,
      elasticity: 8,
      cervixElasticity: 5,
    },
    anus: {
      elasticity: 6,
    },
  },
});
