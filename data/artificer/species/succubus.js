let succubus = Species.build('succubus', {
  name: 'Succubus',

  physical: 10,
  personal: 40,
  mental:   20,
  magical:  30,
  genderRatio: { female:35, futa:65, male:0 },

  violenceAverage: -30,
  violenceRange: 60,

  bodyOptions: {
    tailShape: 'demon',
    skinColors: 'red',
    hornShapes: {
      'curved-ram':  40,
      'forward-cow': 20,
      'curved-back': 20,
    },
    hairColors: {
      'black':  40,
      'purple': 10,
      'red':    50,
      'white':  20,
    },
    eyeColors: {
      black:  20,
      gold:   20,
      purple: 20,
      red:    40,
    },

    // mouth: {
    //   elasticity: 4,
    //   tongueShape: 'forked',
    //   averageTongueLength: 80,
    //   averageThroatWidth: 60,
    // },

    tits:{ size:{
      zero: 30,
      tiny: 10,
      big:  20,
      huge: 40,
    }},
    cock:{ size:{
      big:  90,
      huge: 10,
    }}
  },
  nameGenerator: DemonNameGenerator
});

//   flags: ['demon'],
//   personalities: {
//     demonic: 100,
//   },
//   aspects: {
//     'anal-lover':    100,
//     'anal-slut':     100,
//     'androphilic':   100,
//     'beast-lover':   100,
//     'binder':        80,
//     'bound':         90,
//     'breeder':       80,
//     'cock-lover':    100,
//     'cock-slut':     100,
//     'cum-lover':     100,
//     'dominant':      80,
//     'golden':        40,
//     'gynephilic':    100,
//     'masochist':     90,
//     'masterbator':   100,
//     'milky':         80,
//     'multiorgasmic': 75,
//     'oral-lover':    100,
//     'oral-slut':     100,
//     'orgy-director': 50,
//     'pussy-lover':   100,
//     'pussy-slut':    100,
//     'revolting':     20,
//     'sadist':        80,
//     'size-queen':    80,
//     'stretcher':     30,
//     'submissive':    90,
//     'tit-lover':     100,
//     'tit-slut':      100
//   },
