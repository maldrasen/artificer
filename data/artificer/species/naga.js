Species.build('naga', {
  name: 'Naga',

  physical: 20,
  personal: 10,
  mental:   30,
  magical:  30,

  violenceAverage: 40,
  violenceRange: 20,
  foodPerDay: 9,

  bodyOptions: {
    baseHeight: 1600,
    heightRange: 800,
    maleHeightAdjust: 300,

    shape: 'half-snake',
    tailShape: 'snake',
    faceShape: 'snake',
    scaleColors: { green:30, gray:10  },
    skinColors:  { green:20, black:10 },
    eyeColors: {
      amber: 10,
      black: 10,
      gray:  20,
      green: 50,
      red:   10,
    },

    mouth: {
      tongueShape: 'forked',
      averageTongueLength: 300,
      maxMouthWidth: 500,
      maxThroatWidth: 150,
    },
    tits:{ size:{
      tiny: 30,
      small: 20,
      average: 10,
      big: 5,
    }},
    cock: {
      count: 2,
      shape: 'snake',
      internalBalls: true,
      size: {
        small: 10,
        average: 50,
        big: 25,
        huge: 5,
      },
    },
    pussy:{ shape:'snake' },
  },

  headDescription: `{{C::gender.He}} has a snake's face, with {{C::body.scaleColor}} scales and {{C::body.eyeColor}} eyes.`,

  flags: ['scalie']
});

//   personalities: {
//     average: 30,
//     vicious: 70,
//   },
//   aspects: {
//     'sadist': 60,
//     'dominant': 80
//   },
