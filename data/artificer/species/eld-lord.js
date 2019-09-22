let elfLord = Species.build('elf-lord', {
  name: 'Elf Lord',

  physical: 20,
  personal: 30,
  mental:   30,
  magical:  50,

  violenceAverage: -20,
  violenceRange: 10,

  bodyOptions: {
    baseHeight: 1700,
    heightRange: 300,
    maleHeightAdjust: 100,
    skinColors: ['human'],
    hairColors: ['human'],
    tits: {
      averageSize: 300,
    },
    cocks: {
      averageSize: 150,
    },
  },
});

//   flags: ['elf'],
//   personalities: {
//     aloof: 75,
//     average: 25,
//   },
//   aspects: {
//     'vegetarian': 60,
//     'dominant': 80,
//     'solo-act': 60,
//   },
