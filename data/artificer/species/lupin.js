let lupin = Species.build('lupin', {
  name: 'Lupin',

  bodyOptions: {
    furColors: ['gray','brown'],
    skinColors: ['human','red','black'],
    tailShape: 'dog',
    mouth: {
      shape: 'muzzle',
      averageSize: 360,
      averageTongueLength: 120,
    },
    tits: {
      averageSize: 400,
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
//     fun: 30,
//     motherly: 20,
//     slut: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'carnivore': 100,
//   },
//   physical: 30,
//   personal: 20,
//   mental:   20,
//   magical:  10,
