let neko = Species.build('neko', {
  name: 'Neko',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  20,

  violenceAverage: -10,
  violenceRange: 20,

  bodyOptions: {
    tailShape: 'cat',
    // furColors: ['brown','red'],
    // skinColors: ['human'],
    // hairColors: ['human'],

    tits:{ size:{
      zero: 5,
      tiny: 10,
      small: 20,
      average: 25,
      big: 25,
      huge: 10,
    }},

    // cocks: {
    //   averageSize: 180,
    // },
  },
});

//   flags: ['elf'],
//   personalities: {
//     average: 100,
//     fun: 100,
//     slut: 20,
//   },
//   aspects: {
//     'carnivore': 30,
//     'emotional': 50,
//   },
