let caprien = Species.build('caprien', {
  name: 'Caprien',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  30,

  violenceAverage: 0,
  violenceRange: 25,

  bodyOptions: {
    skinColors: ['human'],
    hairColors: ['human'],
    tits: {
      averageSize: 400,
    },
    cocks: {
      averageSize: 200,
    },
    balls: {
      // Bigger size as well would be good.
      extraProduction: 2,
    },
  },
});
