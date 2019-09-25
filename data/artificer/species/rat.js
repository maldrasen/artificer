let rat = Species.build('rat', {
  name: 'Rat',

  physical: 10,
  personal: 5,
  mental:   5,
  magical:  0,

  violenceAverage: 10,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 660,
    heightRange: 300,
    maleHeightAdjust: 100,
    tailShape: 'rat',
    faceShape: 'rat',

    // furColors: ['gray','brown','black','white'],
    // skinColors: ['human'],
    // mouth: {
    //   averageSize: 150,
    //   averageTongueLength: 50,
    //   averageThroatWidth: 20,
    // },

    tits: {
      count: 12,
      size: {
        zero: 10,
        tiny: 20,
        small: 30,
        average: 10,
      },
    },

    // cocks: {
    //   averageSize: 100,
    //   urethraWidth: 1,
    //   sheath: 'fur',
    // },
    // balls: {
    //   extraProduction: 3,
    // },
    // pussy: {
    //   averageSize: 30,
    //   urethraWidth: 1,
    //   elasticity: 6,
    //   cervixElasticity: 3,
    // },
    // anus: {
    //   elasticity: 6,
    // },
  },
  nameGenerator: RatNameGenerator,
});

//   flags: ['furry'],
//   personalities: {
//     skivering: 100,
//   },
//   aspects: {
//     'beast-lover':   100,
//     'lascivious':    40,
//     'orgy-director': 40,
//     'shameless':     40,
//   },
