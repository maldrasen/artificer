let vulpine = Species.build('vulpine', {
  name: 'Vulpine',

  physical: 20,
  personal: 30,
  mental:   20,
  magical:  10,
  
  violenceAverage: 15,
  violenceRange: 10,

  bodyOptions: {
    furColors: ['gray','brown','red'],
    skinColors: ['human','red','black'],
    tailShape: 'fox',
    mouth: {
      shape: 'muzzle',
      averageSize: 360,
      averageTongueLength: 120,
    },
    tits: {
      averageSize: 700,
      count: 6,
    },
    cocks: {
      averageSize: 150,
      shape: 'dog',
      sheath: 'fur',
    },
    pussy: {
      shape: 'dog',
    },
  },
});

//   flags: ['furry'],
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
