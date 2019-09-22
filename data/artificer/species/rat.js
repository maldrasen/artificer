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
    furColors: ['gray','brown'],
    skinColors: ['human'],
    tailShape: 'rat',
    mouth: {
      shape: 'muzzle',
      averageSize: 150,
      averageTongueLength: 50,
      averageThroatWidth: 20,
    },
    tits: {
      averageSize: 250,
      count: 12,
    },
    cocks: {
      averageSize: 100,
      urethraWidth: 1,
      sheath: 'fur',
    },
    balls: {
      extraProduction: 3,
    },
    pussy: {
      averageSize: 30,
      urethraWidth: 1,
      elasticity: 6,
      cervixElasticity: 3,
    },
    anus: {
      elasticity: 6,
    },
  },
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
