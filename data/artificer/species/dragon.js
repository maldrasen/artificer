let dragon = Species.build('dragon', {
  name: 'Dragon',

  physical: 40,
  personal: 30,
  mental:   30,
  magical:  40,

  violenceAverage: 25,
  violenceRange: 25,

  bodyOptions: {
    baseHeight: 2000,
    heightRange: 800,
    maleHeightAdjust: 200,
    tailShape: 'dragon',
    faceShape: 'dragon',

    // scaleColors: ['red','gold','green','blue','purple','black','white'],
    // skinColors: ['red','green','blue','purple','black'],
    // hornShapes: ['curved-back'],
    // TODO: Dragons Eye Color should complement scale color.

    // mouth: {
    //   tongueShape: 'forked',
    //   averageTongueLength: 250,
    //   averageSize: 500,
    //   averageThroatWidth: 300,
    // },

    tits:{ size:{
      zero: 30,
      tiny: 20,
      small: 10,
      average: 10,
      big: 30,
      huge: 10,
    }},
    cock: {
      shape: 'dragon',
      sheath: 'scales',
      minimumWidth: 30,
      size: {
        average: 30,
        big: 20,
        huge: 10,
      }
    },

    // pussy: {
    //   shape: 'snake',
    //   averageSize: 100,
    // }
  },
});

//   flags: ['scalie'],
//   personalities: {
//     average: 100,
//     vicious: 30,
//     slut: 10,
//   },
//   aspects: {
//     'carnivore': 100,
//     'dominant': 60,
//     'solo-act': 40,
//   },
