Species.build('rat', {
  name: 'Rat',

  physical: 10,
  personal: 5,
  mental:   5,
  magical:  0,

  violenceAverage: 10,
  violenceRange: 20,

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
      averageTongueLength: 50,
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

  nameGenerator: RatNameGenerator,
  flags: ['furry']
});

//   personalities: {
//     skivering: 100,
//   },
//   aspects: {
//     'beast-lover':   100,
//     'lascivious':    40,
//     'orgy-director': 40,
//     'shameless':     40,
//   },
