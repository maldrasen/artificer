Species.build('dryad', {
  name: 'Dryad',

  physical: 10,
  personal: 20,
  mental:   20,
  magical:  30,
  genderRatio: { female:75, futa:20, male:5 },

  violenceAverage: -30,
  violenceRange: 20,

  bodyOptions: {
    shape:'quadruped',
    baseHeight: 1350,
    heightRange: 300,
    maleHeightAdjust: 100,

    skinColors: 'pale-green',
    hornShapes: 'deer',
    hairColors: {
      'dark-brown':  30,
      'brown':       15,
      'light-brown': 10,
      'light-green': 15,
      'green':       10,
      'dark-green':  5,
    },
    eyeColors: {
      blue:  10,
      brown: 15,
      gold:  15,
      green: 30,
      hazel: 20,
    },

    tits:{ size:{
      tiny:    20,
      small:   40,
      average: 20,
    }},
    cock: {
      sheath: 'fur',
      size: {
        small:   20,
        average: 40,
        big:     10,
      }
    }
  },

  flags: ['fae','furry']
});

//   personalities: {
//     average: 50,
//     aloof: 25,
//     motherly: 25,
//   },
//   aspects: {
//     'vegetarian': 100,
//   },
