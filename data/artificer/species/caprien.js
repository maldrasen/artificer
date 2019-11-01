Species.build('caprien', {
  name: 'Caprien',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  30,

  violenceAverage: 0,
  violenceRange: 25,

  bodyOptions: {
    skinColors: 'human',
    hairColors: 'human',
    eyeColors: 'human',

    tailShape: 'goat',
    hornShapes: {
      'curved-ram':  50,
      'curved-back': 50
    },
    eyeColors: {
      blue:  100,
      brown: 40,
      gold:  20,
      red:   20,
    },

    tits:{ size:{
      small:   20,
      average: 30,
      big:     50,
    }},
    cock:{ size:{
      small:   10,
      average: 60,
      big:     20,
    }},
  },

  flags: ['furry'],

  // Head description is complex for a caprien because males have anthro goat
  // heads and females do not.
  headDescription: (character,body) => {
    let horns = {
      'curved-ram': 'curved ram horns',
      'curved-back': 'long swept back horns',
    }[body.hornShape];

    if (character.genderCode == 'male') {
      return `{{C::gender.He}} has the head of a goat with {{C::body.eyeColor}} eyes, ${horns}, and covered in
              {{C::body.furColor}} fur.`;
    }

    return `{{C::gender.He}} has {{C::body.eyeColor}} eyes and a face like an elf except that {{C::gender.his}} head is
            crowned with ${horns} parting {{C::gender.his}} {{C::body.hairColor}} hair.`;
  },
});
