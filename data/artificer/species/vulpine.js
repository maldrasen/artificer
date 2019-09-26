let vulpine = Species.build('vulpine', {
  name: 'Vulpine',

  physical: 20,
  personal: 30,
  mental:   20,
  magical:  10,

  violenceAverage: 15,
  violenceRange: 10,

  bodyOptions: {
    tailShape: 'fox',
    faceShape: 'fox',
    // furColors: ['gray','brown','red'],
    // skinColors: ['human','red','black'],
    // mouth: {
    //   averageSize: 360,
    //   averageTongueLength: 120,
    // },

    tits: {
      count: 6,
      size: {
        big: 60,
        huge: 20,
      },
    },
    cock: {
      shape: 'dog',
      sheath: 'fur',
      size: {
        small: 10,
        average: 50,
        big: 25,
      }
    },

    // pussy: {
    //   shape: 'dog',
    // },
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     fun: 40,
//     motherly: 30,
//     slut: 20,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'lascivious':  30,
//     'carnivore': 100,
//   },
