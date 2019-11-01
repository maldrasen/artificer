Species.build('selkie', {
  name: 'Selkie',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  20,

  violenceAverage: -20,
  violenceRange: 10,

  bodyOptions: {
    baseHeight: 900,
    heightRange: 250,
    maleHeightAdjust: 50,

    tailShape: 'seal',
    faceShape: 'seal',
    eyeColors: 'black',
    furColors: {
      brown: 50,
      gray:  10,
    },
    skinColors: {
      human: 30,
      black: 10,
    },

    mouth: {
      averageTongueLength: 80,
    },
    tits:{ size:{
      zero: 40,
      tiny: 20,
    }},
    cock: {
      sheath: 'fur',
      size: {
        small:   20,
        average: 60,
        big:     30,
      }
    }
  },

  headDescription: `{{C::gender.He}} has a face like a seal with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

  flags: ['furry']
});

//   personalities: {
//     average: 100,
//     fun: 30,
//     motherly: 20,
//     slut: 15,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'carnivore': 100,
//     'lascivious':  20,
//     'size-queen': 75,
//   },
