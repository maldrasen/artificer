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
    tailShape: 'horse',

    // furColors: ['brown','gray'],
    // skinColors: ['human'],
    // hairColors: ['human'],

    tits:{ size:{
      average: 20,
      big: 60,
      huge: 10,
    }},
    cock: {
      shape: 'horse',
      sheath: 'skin',
      urethraWidth: 4,
      minimumWidth: 30,
      size: {
        small: 20,
        average: 40,
        big: 20,
        huge: 10,
      }
    },

    // balls: {
    //   extraProduction: 2,
    // },
    // pussy: {
    //   sizeClasses:['huge'],
    //   shape: 'horse',
    //   urethraWidth: 4,
    // },
    // anus: {
    //   shape: 'horse',
    // },
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
