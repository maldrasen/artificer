let lupin = Species.build('lupin', {
  name: 'Lupin',

  physical: 30,
  personal: 20,
  mental:   20,
  magical:  10,

  violenceAverage: 20,
  violenceRange: 10,

  bodyOptions: {
    faceShape: 'dog',
    tailShape: 'dog',

    // furColors: ['gray','brown'],
    // skinColors: ['human','red','black'],
    // mouth: {
    //   averageSize: 360,
    //   averageTongueLength: 120,
    // },

    tits: {
      count: 6,
      size: {
        average: 20,
        big: 60,
        huge: 10,
      },
    },

    // cocks: {
    //   averageSize: 150,
    //   shape: 'dog',
    //   sheath: 'fur',
    // },
    // pussy: {
    //   shape: 'dog',
    // },
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     fun: 30,
//     motherly: 20,
//     slut: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'carnivore': 100,
//   },
