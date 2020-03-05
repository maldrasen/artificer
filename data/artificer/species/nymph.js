Species.build('nymph', {
  name: 'Nymph',

  physical: 10,
  personal: 40,
  mental:   10,
  magical:  10,
  genderRatio: { female:60, futa:40, male:0 },

  violenceAverage: -50,
  violenceRange: 25,
  foodPerDay: 4,

  bodyOptions: {
    baseHeight: 1400,
    heightRange: 300,
    maleHeightAdjust: 100,

    skinColors: 'human',
    eyeColors: 'human',
    hairColors: {
      'chestnut':         30,
      'auburn':           20,
      'platinum-blond':   10,
      'golden-blond':     10,
      'strawberry-blond': 10,
      'red':              30,
      'copper':           30,
      'light-blue':       5,
      'blue':             5,
      'purple':           5,
      'light-purple':     5,
    },

    tits:{ size:{
      average: 20,
      big:     40,
      huge:    20,
    }},
    cock:{ size:{
      small:   10,
      average: 50,
      big:     30,
    }}
  },

  flags: ['fae']
});
