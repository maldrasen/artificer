Species.build('selkie', {
  name: 'Selkie',
  adjective: 'selkie',

  physical: 10,
  personal: 30,
  mental:   20,
  magical:  10,

  violenceAverage: -20,
  violenceRange: 10,
  foodPerDay: 3,

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
      maxMouthWidth: 58,
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
