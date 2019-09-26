let pixie = Species.build('pixie', {
  name: 'Pixie',

  physical: 0,
  personal: 30,
  mental:   30,
  magical:  30,
  genderRatio: { female:100, futa:0, male:0 },

  violenceAverage: -30,
  violenceRange: 10,

  bodyOptions: {
    baseHeight: 550,
    heightRange: 100,
    maleHeightAdjust: 10,

    skinColors: {
      'human': 30,
      'blue':  10,
      'green': 10,
    },
    hairColors: {
      'blond':        30,
      'light-blue':   20,
      'light-green':  20,
      'light-purple': 20,
      'white':        10,
    },
    eyeColors: {
      amber:  20,
      blue:   30,
      gold:   20,
      green:  30,
      hazel:  30,
      pink:   5,
      purple: 10,
    },

    // mouth: {
    //   averageSize: 10,
    //   throatWidth: 5,
    //   elasticity: 6,
    //   averageTongueLength: 10,
    // },

    tits:{ size:{
      zero: 30,
      tiny: 20,
      small: 10,
    }},
    cock: {
      minimumWidth: 6,
      size: {
        average: 50,
        big: 25,
        huge: 10,
      }
    },

    // pussy: {
    //   averageSize: 20,
    //   elasticity: 12,
    //   cervixElasticity: 6,
    //   urethraWidth: 1,
    // },
    // anus: {
    //   elasticity: 10,
    // },
  },
});

//   flags: ['fae'],
//   personalities: {
//     average: 25,
//     fun: 25,
//     slut: 25,
//   },
//   aspects: {
//     'vegetarian': 30,
//     'emotional': 50,
//     'shameless': 100,
//   },
