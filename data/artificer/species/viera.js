let viera = Species.build('viera', {
  name: 'Viera',

  physical: 30,
  personal: 30,
  mental:   20,
  magical:  10,
  genderRatio: { female:50, futa:50, male:0 },

  violenceAverage: 0,
  violenceRange: 10,

  bodyOptions: {
    skinColors: ['human'],
    hairColors: ['human'],

    tits:{ size:{
      average: 30,
      big: 50,
      huge: 10,
    }},
    cock:{ size:{
      small: 10,
      average: 30,
      big: 60,
    }}
  }
});
