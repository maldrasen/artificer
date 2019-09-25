
let woodElf = Species.build('wood-elf', {
  name: 'Wood Elf',

  physical: 30,
  personal: 20,
  mental:   20,
  magical:  10,

  violenceAverage: 10,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 1350,
    heightRange: 300,
    maleHeightAdjust: 100,
    tailShape: 'dog',
    // skinColors: ['human'],
    // hairColors: ['human'],

    tits:{ size:{
      zero: 5,
      tiny: 10,
      small: 20,
      average: 20,
      big: 20,
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
//     fun: 20,
//     motherly: 20,
//     slut: 20,
//   },
//   aspects: {
//     'carnivore': 20,
//     'beast-lover': 75,
//   },
