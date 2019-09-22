let centaur = Species.build('centaur', {
  name: 'Centaur',

  physical: 40,
  personal: 20,
  mental:   20,
  magical:  20,

  violenceAverage: -10,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 1700,
    heightRange: 800,
    maleHeightAdjust: 300,
    shape:'quadruped',
    furColors: ['brown','gray'],
    skinColors: ['human'],
    hairColors: ['human'],
    tailShape: 'horse',
    tits: {
      averageSize: 600,
    },
    cocks: {
      averageSize: 500,
      urethraWidth: 4,
      shape: 'horse',
      sheath: 'skin',
    },
    balls: {
      extraProduction: 2,
    },
    pussy: {
      shape: 'horse',
      averageSize: 100,
      urethraWidth: 4,
    },
    anus: {
      shape: 'horse',
    },
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     motherly: 10,
//     aloof: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'solo-act': 75
//   },
