let dryad = Species.build('dryad', {
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
    skinColors: ['pale-green'],
    hairColors: ['dark-brown','brown','light-brown','light-green','green','dark-green'],
    hornShapes: ['deer'],
    tits: {
      averageSize: 200,
    },
    cocks: {
      averageSize: 150,
    },
  },
});

//   flags: ['fae'],
//   personalities: {
//     average: 50,
//     aloof: 25,
//     motherly: 25,
//   },
//   aspects: {
//     'vegetarian': 100,
//   },
