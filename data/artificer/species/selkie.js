let selkie = Species.build('selkie', {
  name: 'Selkie',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  20,

  violenceAverage: -20,
  violenceRange: 10,

  bodyOptions: {
    baseHeight: 800,
    heightRange: 250,
    maleHeightAdjust: 50,
    tailShape: 'seal',
    faceShape: 'seal',

    // furColors: ['brown','gray'],
    // skinColors: ['human','black'],
    // mouth: {
    //   averageSize: 240,
    //   averageTongueLength: 80,
    // },

    tits:{ size:{
      zero: 40,
      tiny: 20,
    }},
    cock: {
      sheath: 'fur',
      size: {
        small: 20,
        average: 60,
        big: 30,
      }
    },

    // pussy: {
    //   elasticity: 7,
    // },
    // anus: {
    //   elasticity: 5,
    // },
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     fun: 30,
//     motherly: 20,
//     slut: 15,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'carnivore': 100,
//     'lascivious':  20,
//     'size-queen': 75,
//   },
