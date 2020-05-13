Species.build('sylph', {
  name: 'Sylph',
  adjective: 'sylphic',

  physical: 10,
  personal: 20,
  mental:   30,
  magical:  15,
  genderRatio: { female:75, futa:20, male:5 },

  violenceAverage: -30,
  violenceRange: 20,
  foodPerDay: 3,

  bodyOptions: {
    baseHeight: 1350,
    heightRange: 300,
    maleHeightAdjust: 100,

    skinColors: 'blue',
    hairColors: {
      'black':      10,
      'dark-blue':  30,
      'blue':       20,
      'light-blue': 40,
      'white':      10,
    },
    eyeColors: {
      blue:   40,
      green:  10,
      purple: 20,
    },

    mouth:{ maxMouthWidth:44 },
    tits:{ size:{
      zero: 30,
      tiny: 20,
      small: 10,
    }},
    cock:{ size:{
      small: 20,
      average: 20,
    }}
  },

  flags: ['fae']
});
