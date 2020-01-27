Species.build('minotaur', {
  name: 'Minotaur',

  physical: 50,
  personal: 10,
  mental:   10,
  magical:  10,

  violenceAverage: 30,
  violenceRange: 20,
  foodPerDay: 4,

  bodyOptions: {
    baseHeight: 1850,
    heightRange: 600,
    maleHeightAdjust: 300,

    tailShape: 'cow',
    faceShape: 'cow',
    hornShapes: {
      'forward-cow': 40,
      'wide-buffalo': 10
    },
    furColors: {
      black: 10,
      brown: 40,
      gray: 20,
    },
    skinColors: {
      human: 30,
      black: 10
    },
    hairColors: {
      'black':      10,
      'dark-brown': 30,
      'brown':      20,
      'red':        10,
    },
    eyeColors: {
      brown: 50,
      blue:  20,
      amber: 10,
      green: 10,
      hazel: 10,
    },

    mouth: {
      averageTongueLength: 120,
      maxMouthWidth: 80,
    },
    tits:{ size:{
      big: 50,
      huge: 50,
    }},
    nipples: {
      count: 4,
      shape: 'teat',
    },
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
    pussy:{ shape:'horse' },
    anus:{  shape:'horse' }
  },

  // Head description is complex for a caprien because males have anthro goat
  // heads and females do not.
  headDescription: (character,body) => {
    let horns = {
      'forward-cow': 'sharp forward facing steer horns',
      'wide-buffalo': 'wide and thick buffalo horns',
    }[body.hornShape];

    if (character.genderCode == 'male') {
      return `{{C::gender.He}} has a big bull's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
              and ${horns}.`;
    }

    return `{{C::gender.He}} has a big cows's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
            and ${horns}.`;
  },

  flags: ['furry']
});

//   personalities: {
//     average: 100,
//     motherly: 10,
//     brutish: 10,
//   },
//   aspects: {
//     'beast-lover': 100,
//     'vegetarian': 100,
//   },
