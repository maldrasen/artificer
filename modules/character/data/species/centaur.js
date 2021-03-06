Species.build('centaur', {
  name: 'Centaur',
  adjective: 'centaurian',

  physical: 40,
  personal: 20,
  mental:   20,
  magical:  5,

  violenceAverage: -10,
  violenceRange: 20,
  foodPerDay: 10,

  bodyOptions: {
    shape: 'quadruped',
    baseHeight: 1700,
    heightRange: 800,
    maleHeightAdjust: 300,

    tailShape: 'horse',
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',
    furColors: { brown:30, gray:10, black:20 },

    mouth: {
      maxMouthWidth: 54,
      maxThroatWidth: 38,
    },
    tits:{ size:{
      average: 20,
      big:     60,
      huge:    10,
    }},
    cock: {
      shape: 'horse',
      sheath: 'skin',
      minimumWidth: 30,
      size: {
        small:   20,
        average: 40,
        big:     20,
        huge:    10,
      }
    },
    pussy:{ shape:'horse' },
    anus:{  shape:'horse' }
  },

  flags: ['furry']
});
