let minotaur = Species.build('minotaur', {
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

    // furColors: ['brown','gray'],
    // skinColors: ['human','black'],
    // hairColors: ['black','dark-brown','red'],
    // hornShapes: ['forward-cow','wide-buffalo'],
    // mouth: {
    //   averageSize: 140,
    //   averageTongueLength: 120,
    //   averageThroatWidth: 40,
    // },

    tits:{ size:{
      big: 50,
      huge: 50,
    }},
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

    // nipples: {
    //   count: 4,
    //   shape: 'teat',
    // },
    // pussy: {
    //   shape: 'horse',
    //   averageSize: 90,
    // },
    // anus: {
    //   shape: 'horse',
    // },
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
