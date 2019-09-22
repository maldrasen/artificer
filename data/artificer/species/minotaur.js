let minotaur = Species.build('minotaur', {
  name: 'Minotaur',

  bodyOptions: {
    baseHeight: 1850,
    heightRange: 600,
    maleHeightAdjust: 300,
    furColors: ['brown','gray'],
    skinColors: ['human','black'],
    hairColors: ['black','dark-brown','red'],
    tailShape: 'cow',
    mouth: {
      shape: 'horse',
      averageSize: 140,
      averageTongueLength: 120,
      averageThroatWidth: 40,
    },
    tits: {
      averageSize: 800,
      extraProduction: 2,
    },
    nipples: {
      count: 4,
      shape: 'teat',
    },
    cocks: {
      averageSize: 400,
      urethraWidth: 3,
      shape: 'horse',
      sheath: 'skin',
    },
    balls: {
      extraProduction: 1.5,
    },
    pussy: {
      shape: 'horse',
      averageSize: 90,
      urethraWidth: 3,
    },
    anus: {
      shape: 'horse',
    },
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
//   physical: 50,
//   personal: 10,
//   mental:   10,
//   magical:  10,
