Species.build('caprien', {
  name: 'Caprien',
  adjective: 'caprien',

  physical: 20,
  personal: 20,
  mental:   20,
  magical:  15,

  violenceAverage: 0,
  violenceRange: 25,
  foodPerDay: 5,

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
    cock:{
      sheath: 'fur',
      size:{
        small:   10,
        average: 60,
        big:     20,
      }
    },
  },

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

  skinDescription: (character,body) => {
    return (character.genderCode == 'male') ?
      `{{C::gender.His}} body is also covered in thick {{C::body.furColor}} fur and {{C::gender.he}} has a small goat tail resting just above {{C::gender.his}} ass.`:
      `{{C::gender.He}} has {{C::body.skinColor}} skin and a small goat tail resting just above {{C::gender.his}} shapely ass.`
  },

  flags: ['furry']
});
