Species.build('vulpine', {
  name: 'Vulpine',

  physical: 20,
  personal: 30,
  mental:   20,
  magical:  10,

  violenceAverage: 15,
  violenceRange: 10,

  bodyOptions: {
    tailShape: 'fox',
    faceShape: 'fox',
    furColors: {
      gray: 10,
      brown: 40,
      red: 60,
    },
    skinColors: {
      human: 30,
      black: 10,
    },
    eyeColors: {
      brown: 50,
      red:   20,
      amber: 10,
      gold:  10,
      hazel: 10,
    },

    mouth: {
      averageTongueLength: 120,
    },
    tits: {
      count: 6,
      size: {
        big:  60,
        huge: 20,
      },
    },
    cock: {
      shape: 'dog',
      sheath: 'fur',
      size: {
        small:   10,
        average: 50,
        big:     25,
      }
    },
    pussy: { shape:'dog' }
  },

  headDescription: `{{C::gender.He}} has the face of a fox with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

  flags: ['furry']
});

//   personalities: {
//     average: 100,
//     fun: 40,
//     motherly: 30,
//     slut: 20,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'lascivious':  30,
//     'carnivore': 100,
//   },
