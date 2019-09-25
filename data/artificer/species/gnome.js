let gnome = Species.build('gnome', {
  name: 'Gnome',

  physical: 15,
  personal: 15,
  mental:   30,
  magical:  30,
  genderRatio: { female:35, futa:5, male:60 },

  violenceAverage: -10,
  violenceRange: 10,

  bodyOptions: {
    baseHeight: 1200,
    heightRange: 300,
    maleHeightAdjust: 100,
    // skinColors: ['human'],
    // hairColors: ['human'],

    tits:{ size:{
      average: 20,
      big: 50,
      huge: 30,
    }},

    // cocks: {
    //   averageSize: 130,
    // },
  },
});

//   flags: ['fae'],
//   personalities: {
//     average: 50,
//     fun: 25,
//     motherly: 25,
//   },
//   aspects: {},
