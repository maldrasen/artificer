Species.build('gnome', {
  name: 'Gnome',

  physical: 15,
  personal: 15,
  mental:   30,
  magical:  10,
  genderRatio: { female:35, futa:5, male:60 },

  violenceAverage: -10,
  violenceRange: 10,
  foodPerDay: 3,

  bodyOptions: {
    baseHeight: 1200,
    heightRange: 300,
    maleHeightAdjust: 100,

    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    mouth:{ maxMouthWidth:38 },
    tits:{ size:{
      average: 30,
      big:     50,
      huge:    10,
    }},
    cock:{ size:{
      average: 30,
      big:     60,
      huge:    10,
    }},
  },

  flags: ['fae']
});
