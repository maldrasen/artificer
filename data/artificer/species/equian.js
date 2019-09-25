let equian = Species.build('equian', {
  name: 'Equian',

  physical: 30,
  personal: 20,
  mental:   20,
  magical:  10,
  genderRatio: { female:30, futa:20, male:50 },

  violenceAverage: 10,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 1750,
    heightRange: 600,
    maleHeightAdjust: 200,
    tailShape: 'horse',
    faceShape: 'horse',

    // furColors: ['brown','gray'],
    // skinColors: ['human','black'],
    // hairColors: ['black','dark-brown','brown','light-brown'],
    // mouth: {
    //   averageSize: 120,
    //   averageTongueLength: 90,
    //   averageThroatWidth: 40,
    // },

    tits:{ size:{
      average: 20,
      big: 60,
      huge: 10,
    }},

    // nipples: {
    //   shade: 0,
    //   shape: 'teat',
    // },
    // cocks: {
    //   averageSize: 360,
    //   urethraWidth: 3,
    //   shape: 'horse',
    //   sheath: 'skin',
    // },
    // balls: {
    //   extraProduction: 1,
    // },
    // pussy: {
    //   shape: 'horse',
    //   averageSize: 80,
    //   urethraWidth: 3,
    // },
    // anus: {
    //   shape: 'horse',
    // },
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     fun: 10,
//     motherly: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'vegetarian': 100,
//   },
