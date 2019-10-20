Species.build('kobold', {
  name: 'Kobold',

  physical: 15,
  personal: 10,
  mental:   10,
  magical:  10,

  violenceAverage: 30,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 850,
    heightRange: 200,
    maleHeightAdjust: 100,

    tailShape: 'dragon',
    faceShape: 'dragon',
    eyeColors: 'dragon',
    skinColors: 'dragon',
    hornShapes:'curved-back',
    scaleColors: {
      black:  30,
      green:  30,
      red:    60,
      gray:   10,
    },

    tits: false,
    nipples: false,
    mouth: {
      tongueShape: 'forked',
      averageTongueLength: 100,
    },
    cock: {
      shape: 'dragon',
      sheath: 'scales',
      minimumWidth: 12,
      size: {
        average: 10,
        big:     30,
      }
    },
    pussy:{ shape:'dragon' }
  },

  nameGenerator: KoboldNameGenerator,
  flags: ['furry','scalie']
});
