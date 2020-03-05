Species.build('dragon', {
  name: 'Dragon',

  physical: 40,
  personal: 30,
  mental:   30,
  magical:  40,

  violenceAverage: 25,
  violenceRange: 25,
  foodPerDay: 9,

  bodyOptions: {
    baseHeight: 2000,
    heightRange: 800,
    maleHeightAdjust: 200,

    tailShape:  'dragon',
    faceShape:  'dragon',
    eyeColors:  'dragon',
    skinColors: 'dragon',
    hornShapes: 'curved-back',
    scaleColors: {
      black:  30,
      blue:   5,
      gold:   10,
      green:  30,
      purple: 5,
      red:    50,
    },

    mouth: {
      tongueShape: 'forked',
      averageTongueLength: 250,
      maxMouthWidth: 500,
      maxThroatWidth: 80,
    },
    tits:{ size:{
      zero:    30,
      tiny:    20,
      small:   10,
      average: 10,
      big:     30,
      huge:    10,
    }},
    cock: {
      shape: 'dragon',
      sheath: 'scales',
      minimumWidth: 30,
      size: {
        average: 30,
        big:     20,
        huge:    10,
      }
    },
    pussy:{ shape:'dragon' }
  },

  headDescription: `{{C::gender.He}} has the face of a dragon, with {{C::body.scaleColor}} scales, {{C::body.eyeColor}}
                    eyes, and a pair of ridged swept back horns.`,

  flags: ['scalie']
});
