
Description.buildHead({ requires:[], includes:['eye-color'],
  d: `(He has a head with eyes.)`
});

Description.buildHead({ requires:[],
  d: `(He has a head)`
});

// Masculine Capriens
Description.buildHead({ conditions:['minion(C).is-caprien','minion(C).is-male'],
  d: `(He has a male caprien head.)`
});

// Feminine Capriens
Description.buildHead({ conditions:['minion(C).is-caprien','minion(C).is-not-male'],
  d: `(He has a female caprien head.)`
});


// // Head description is complex for a caprien because males have anthro goat
// // heads and females do not.
// headDescription: (character,body) => {
//   let horns = {
//   }[body.hornShape];
//
//   if (character.genderCode == 'male') {
//     return `{{C::gender.He}} has the head of a goat with {{C::body.eyeColor}} eyes, ${horns}, and covered in
//             {{C::body.furColor}} fur.`;
//   }
//
//   return `{{C::gender.He}} has {{C::body.eyeColor}} eyes and a face like an elf except that {{C::gender.his}} head is
//           crowned with ${horns} parting {{C::gender.his}} {{C::body.hairColor}} hair.`;
// },
//
