let kobold = Species.build('kobold', {
  name: 'Kobold',

  physical: 15,
  personal: 10,
  mental:   10,
  magical:  10,

  violenceAverage: 30,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 750,
    heightRange: 300,
    maleHeightAdjust: 100,
    scaleColors: ['red','gold','green','blue','purple','black','white'],
    skinColors: ['red','green','blue','purple','black'],
    tailShape: 'dragon',
    faceShape: 'dragon',
    hornShapes: ['curved-back'],
    tits: false,
    nipples: false,
    mouth: {
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
  nameGenerator: KoboldNameGenerator,
});
