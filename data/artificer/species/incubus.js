let incubus = Species.build('incubus', {
  name: 'Incubus',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  40,
  genderRatio: { female:0, futa:0, male:100 },

  violenceAverage: 25,
  violenceRange: 25,

  bodyOptions: {
    tailShape: 'demon',

    // skinColors: ['red'],
    // hairColors: ['red','black','purple','white'],
    // hornShapes: ['curved-ram','forward-cow','curved-back'],
    // mouth: {
    //   elasticity: 4,
    //   tongueShape: 'forked',
    //   averageTongueLength: 80,
    //   averageThroatWidth: 60,
    // },

    cock:{ size:{
      average: 10,
      big: 30,
      huge: 50,
    }},

    // balls: {
    //   extraProduction: 2,
    // },
    // anus: {
    //   elasticity: 6,
    // },
  },
  nameGenerator: DemonNameGenerator,
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
//     'multiorgasmic': 20,
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
