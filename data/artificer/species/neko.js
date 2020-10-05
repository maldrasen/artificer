Species.build('neko', {
  name: 'Neko',
  adjective: 'feline',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  10,

  violenceAverage: -10,
  violenceRange: 20,
  foodPerDay: 4,

  bodyOptions: {
    tailShape: 'cat',
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',
    furColors: 'matchHair',

    tits:{ size:{
      zero:    5,
      tiny:    10,
      small:   20,
      average: 25,
      big:     25,
      huge:    5,
    }},
    cock:{ size:{
      small:   10,
      average: 50,
      big:     30,
    }},
  },

  flags: ['elf']
});
