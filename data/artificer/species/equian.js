Species.build('equian', {
  name: 'Equian',

  physical: 30,
  personal: 20,
  mental:   20,
  magical:  10,
  genderRatio: { female:30, futa:20, male:50 },

  violenceAverage: 10,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 1750,
    heightRange: 600,
    maleHeightAdjust: 200,

    tailShape: 'horse',
    faceShape: 'horse',
    furColors: {
      brown: 30,
      black: 20,
      gray:  10,
    },
    skinColors: {
      human: 30,
      black: 10
    },
    hairColors: {
      'black':       10,
      'dark-brown':  20,
      'brown':       40,
      'light-brown': 30,
    },
    eyeColors: {
      brown: 50,
      blue:  20,
      amber: 10,
      green: 10,
      hazel: 10,
    },

    mouth: {
      averageTongueLength: 90,
    },
    tits:{ size:{
      average: 20,
      big:     60,
      huge:    10,
    }},
    nipples: {
      shade: 0,
      shape: 'teat',
    },
    cock: {
      shape: 'horse',
      sheath: 'skin',
      minimumWidth: 30,
      size: {
        average: 30,
        big:     20,
        huge:    10,
      }
    },
    pussy:{ shape:'horse' },
    anus:{  shape:'horse' }
  },

  flags: ['furry']
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     fun: 10,
//     motherly: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'vegetarian': 100,
//   },
