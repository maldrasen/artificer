let nymph = Species.build('nymph', {
  name: 'Nymph',

  physical: 10,
  personal: 40,
  mental:   10,
  magical:  20,
  genderRatio: { female:60, futa:40, male:0 },

  violenceAverage: -50,
  violenceRange: 25,

  bodyOptions: {
    baseHeight: 1400,
    heightRange: 300,
    maleHeightAdjust: 100,
    // skinColors: ['human'],
    // hairColors: ['chestnut','auburn','platinum-blond','golden-blond','strawberry-blond','red','copper','light-blue','blue','purple'],

    tits:{ size:{
      average: 20,
      big: 40,
      huge: 50,
      monster: 10,
    }},

    // cocks: {
    //   averageSize: 220,
    // },
    // balls: {
    //   extraProduction: 1,
    // },
    // pussy: {
    //   elasticity: 5,
    //   cervixElasticity: 2,
    // },
  },
});

//   flags: ['fae'],
//   aspects: ['emotional','lascivious','submissive'],
//   personalities: {
//     average: 50,
//     fun: 60,
//     motherly: 40,
//     slut: 20,
//   },
//   aspects: {
//     'vegetarian': 50,
//     'emotional':  50,
//     'lascivious': 40,
//     'submissive': 30,
//   },
