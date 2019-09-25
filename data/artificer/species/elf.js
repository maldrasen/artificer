let elf = Species.build('elf', {
  name: 'Elf',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  20,

  violenceAverage: 0,
  violenceRange: 30,

  bodyOptions: {
    skinColors: ['human'],
    hairColors: ['human'],

    tits:{ size:{
      zero: 5,
      tiny: 10,
      small: 20,
      average: 35,
      big: 15,
      huge: 5,
    }},

    // cocks: {
    //   averageSize: 150,
    // },
  },
});

//   flags: ['elf'],
//   personalities: {
//     average: 100,
//     fun: 10,
//     motherly: 10,
//     slut: 10,
//   },
//   aspects: {},
