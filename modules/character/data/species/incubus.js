Species.build('incubus', {
  name: 'Incubus',
  adjective: 'demonic',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  40,
  genderRatio: { female:0, futa:0, male:100 },

  violenceAverage: 25,
  violenceRange: 25,
  foodPerDay: 0,

  bodyOptions: {
    tailShape: 'demon',
    skinColors: 'red',
    hornShapes: {
      'curved-ram':  40,
      'forward-cow': 20,
      'curved-back': 20,
    },
    hairColors: {
      'black':  40,
      'purple': 10,
      'red':    50,
      'white':  20,
    },
    eyeColors: {
      black:  20,
      gold:   20,
      purple: 20,
      red:    40,
    },

    tits: false,
    mouth: {
      tongueShape: 'forked',
      averageTongueLength: 80,
      maxMouthWidth: 100,
      maxThroatWidth: 80,
    },
    cock:{ size:{
      average: 10,
      big:     30,
      huge:    50,
    }}
  },

  // nameGenerator: DemonNameGenerator,
  flags: ['demon']
});
