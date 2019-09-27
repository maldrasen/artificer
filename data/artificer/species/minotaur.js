Species.build('minotaur', {
  name: 'Minotaur',

  physical: 50,
  personal: 10,
  mental:   10,
  magical:  10,

  violenceAverage: 30,
  violenceRange: 20,

  bodyOptions: {
    baseHeight: 1850,
    heightRange: 600,
    maleHeightAdjust: 300,

    tailShape: 'cow',
    faceShape: 'cow',
    hornShapes: {
      'forward-cow': 40,
      'wide-buffalo': 10
    },
    furColors: {
      black: 10,
      brown: 40,
      gray: 20,
    },
    skinColors: {
      human: 30,
      black: 10
    },
    hairColors: {
      'black':      10,
      'dark-brown': 30,
      'brown':      20,
      'red':        10,
    },
    eyeColors: {
      brown: 50,
      blue:  20,
      amber: 10,
      green: 10,
      hazel: 10,
    },

    mouth: {
      averageTongueLength: 120,
    },
    tits:{ size:{
      big: 50,
      huge: 50,
    }},
    nipples: {
      count: 4,
      shape: 'teat',
    },
    cock: {
      shape: 'horse',
      sheath: 'skin',
      minimumWidth: 30,
      size: {
        small: 10,
        average: 30,
        big: 20,
        huge: 10,
      }
    },
    pussy:{ shape:'horse' },
    anus:{  shape:'horse' }
  },
});

//   flags: ['furry'],
//   personalities: {
//     average: 100,
//     motherly: 10,
//     brutish: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'vegetarian': 100,
//   },
