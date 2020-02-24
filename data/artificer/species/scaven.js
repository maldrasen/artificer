Species.build('scaven', {
  name: 'Scaven',

  physical: 10,
  personal: 5,
  mental:   5,
  magical:  0,

  violenceAverage: 10,
  violenceRange: 20,
  foodPerDay: 20,

  bodyOptions: {
    baseHeight: 760,
    heightRange: 200,
    maleHeightAdjust: 100,

    tailShape: 'rat',
    faceShape: 'rat',
    skinColors: 'human',
    furColors: {
      black: 20,
      brown: 50,
      gray:  20,
      white: 10,
    },
    eyeColors: {
      black: 20,
      red: 40,
      pink:  20,
    },

    mouth: {
      averageTongueLength: 30,
      maxMouthWidth: 50,
    },
    tits: {
      count: 12,
      size: {
        zero:  10,
        tiny:  30,
        small: 10,
      },
    },
    nipples: {
      shape: 'puffy',
      extraLength: 10,
      extraWidth: 10,
    },
    cock: {
      sheath: 'fur',
      urethraWidth: 1,
      minimumWidth: 12,
      size: {
        small:   10,
        average: 40,
        big:     10,
      }
    }
  },

  skillCaps: {
    foraging: 2,
    hunting: 1,
  },

  headDescription: `The scaven's face is unsurprisingly rat-like with {{C::body.eyeColor}} eyes, a short muzzle, long
                    whiskers and a twitchy pink nose.`,

  nameGenerator: ScavenNameGenerator,
  flags: ['furry']
});

//   personalities: {
//     skivering: 100,
//   },
//   aspects: {
//     'beast-lover':   100,
//     'lascivious':    40,
//     'orgy-lover': 40,
//     'shameless':     40,
//   },
