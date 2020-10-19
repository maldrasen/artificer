Species.build('human', {
  name: 'Human',
  adjective: 'human',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  10,

  violenceAverage: 0,
  violenceRange: 30,
  foodPerDay: 5,

  bodyOptions: {
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    tits:{ size:{
      zero:    5,
      tiny:    10,
      small:   20,
      average: 35,
      big:     15,
      huge:    5,
    }},
    cock:{ size:{
      small:   10,
      average: 50,
      big:     30,
    }},
    pussy:{ conditionMap:{
      tight: 25,
      average: 75,
      loose: 15,
    }},
    anus:{ conditionMap:{
      tight: 60,
      average: 30,
      loose: 10,
    }}
  },

});
