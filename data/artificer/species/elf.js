Species.build('elf', {
  name: 'Elf',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  20,

  violenceAverage: 0,
  violenceRange: 30,

  bodyOptions: {
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    tits:{ size:{
      zero:    5,
      tiny:    10,
      small:   20,
      average: 35,
      big:     15,
      huge:    5,
    }},
    cock:{ size:{
      small:   10,
      average: 50,
      big:     30,
    }},
    pussy:{ condition:{
      virgin: 5,
      tight: 25,
      average: 75,
      loose: 15,
    }},
    anus:{ condition:{
      virgin: 20,
      tight: 60,
      average: 30,
      loose: 10,
    }}
  },

  flags: ['elf']
});

//   flags: ['elf'],
//   personalities: {
//     average: 100,
//     fun: 10,
//     motherly: 10,
//     slut: 10,
//   },
//   aspects: {},
