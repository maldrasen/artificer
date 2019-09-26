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
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    tits:{ size:{
      zero:    10,
      tiny:    20,
      small:   30,
      average: 20,
    }},
    cock:{ size:{
      small:   20,
      average: 30,
      big:     10,
    }}
  }
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
