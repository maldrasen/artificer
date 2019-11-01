Species.build('viera', {
  name: 'Viera',

  physical: 30,
  personal: 30,
  mental:   20,
  magical:  10,
  genderRatio: { female:50, futa:50, male:0 },

  violenceAverage: 0,
  violenceRange: 10,

  bodyOptions: {
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    tits:{ size:{
      average: 30,
      big:     50,
      huge:    10,
    }},
    cock:{ size:{
      small:   10,
      average: 30,
      big:     60,
    }}
  },

  headDescription: `{{C::gender.He}} has {{C::body.eyeColor}} eyes and a face like an elf except that two long rabbit
                    ears press upward from {{C::gender.his}} {{C::body.hairColor}} hair.`,

  flags: ['elf']
});
