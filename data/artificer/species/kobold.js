Species.build('kobold', {
  name: 'Kobold',
  adjective: 'koboldic',

  physical: 15,
  personal: 10,
  mental:   10,
  magical:  0,

  violenceAverage: 30,
  violenceRange: 20,
  foodPerDay: 2,

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
      maxMouthWidth: 200,
      maxThroatWidth: 40,
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

  skillCaps: {
    foraging: 2,
    hunting: 1,
  },

  headDescription: `{{C::gender.He}} has a face like a dragon, though smaller and meaner looking, with
                    {{C::body.scaleColor}} scales, {{C::body.eyeColor}} eyes, and a short pair of ridged
                    back facing horns.`,

  nameGenerator: KoboldNameGenerator,
  flags: ['scalie']
});
