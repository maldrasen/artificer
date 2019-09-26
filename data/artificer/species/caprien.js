let caprien = Species.build('caprien', {
  name: 'Caprien',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  30,

  violenceAverage: 0,
  violenceRange: 25,

  bodyOptions: {
    tailShape: 'goat',
    hornShapes: {
      'curved-ram':  50,
      'curved-back': 50
    },
    eyeColors: {
      blue:  100,
      brown: 40,
      gold:  20,
      red:   20,
    },

    tits:{ size:{
      small:   20,
      average: 30,
      big:     50,
    }},
    cock:{ size:{
      small:   10,
      average: 60,
      big:     20,
    }},
  }
});
