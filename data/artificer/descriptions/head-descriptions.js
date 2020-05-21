
Description.buildHead({ requires:[], includes:['eye-color'],
  d: `({{He}} has a normal elven head with {{C::body.eyeColor}} eyes.)`
});

Description.buildHead({ requires:[],
  d: `({{He}} has a normal elven head)`
});

// == Masculine Capriens ===
// Capriens specifically have goat headed males, but elven faced females.

Description.buildHead({ species:'caprien', requires:['minion(C).is-male'],
  includes:['eye-color','fur-color'],
  d: `{{He}} has the head of a goat with {{C::body.eyeColor}} eyes, {{C::body.ramHorns}}, and is covered in
      {{C::body.furColor}} fur.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-male'],
  includes:['fur-color'],
  d: `{{His}} {{C::body.furColor}} fur covered head is distinctly goat shaped and topped with two {{C::body.ramHorns}}.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-male','minion(C).face.hard'],
  d: `{{His}} hardened face is distinctly goat shaped and crowned with two {{C::body.ramHorns}}.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-male','minion(C).face.soft'],
  d: `{{His}} boyish face is distinctly goat shaped and crowned with two {{C::body.ramHorns}}.`
});

// === Feminine Capriens ===

Description.buildHead({ species:'caprien', requires:['minion(C).is-not-male'],
  includes:['hair-color'],
  d: `{{His}} elf-like face is crowned with {{C::body.ramHorns}} parting {{C::gender.his}} {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-not-male'],
  includes:['eye-color','hair-color'],
  d: `{{He}}'s a caprien but only the males of {{his}} species have goat shaped heads. Instead {{his}} face is elven
      with large {{C::body.eyeColor}} eyes, and {{C::body.hairColor}} hair. {{His}} {{C::body.ramHorns}} though mark
      {{him}} as one of the demonic goat people.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-not-male','minion(C).face.soft'],
  includes:['eye-color','hair-color'],
  d: `{{His}} elf-like face and big {{C::body.eyeColor}} eyes give {{him}} a young and innocent look, though {{his}}
      {{C::body.ramHorns}} also add a slightly demonic flair.`
});

Description.buildHead({ species:'caprien', requires:['minion(C).is-not-male','minion(C).face.hard'],
  includes:['eye-color','hair-color'],
  d: `{{His}} {{C::body.ramHorns}} and hard {{C::body.eyeColor}} eyes make {{his}} elf-like face look dangerous and
      demonic.`
});

// === Dragon ===

Description.buildHead({ species:'dragon',
  d: `{{C::gender.He}} has a distincly dragon-shaped head topped with a long pair of ridged backswept horns.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.hard'],
  d: `A long pair of ridged backswept horns give {{C::gender.his}} draconic face a savage yet majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.hard'],
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns give {{C::gender.his}} {{C::body.scaleColor}} scaled draconic face a
      savage yet majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.soft'],
  d: `A long pair of ridged backswept horns give {{C::gender.his}} draconic face a wise and majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.soft'],
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns give {{C::gender.his}} {{C::body.scaleColor}} scaled draconic face a wise
      and majestic look.`
});

Description.buildHead({ species:'dragon',
  includes:['eye-color','scale-color'],
  d: `{{C::gender.He}} has the face of a dragon, with {{C::body.scaleColor}} scales, {{C::body.eyeColor}} eyes, and a
      pair of ridged backswept horns.`
});

Description.buildHead({ species:'dragon',
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns crown the top of {{C::gender.his}} draconic {{C::body.scaleColor}} scaled
      head.`
});



// Dryad
// headDescription: `{{C::gender.He}} has {{C::body.eyeColor}} eyes and a face like an elf except that {{C::gender.his}}
//                   head is crowned with a rack of deer antlers parting {{C::gender.his}} {{C::body.hairColor}} hair.`,

// Equian
// headDescription: `{{C::gender.He}} has a big horse shaped head with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

// Kobold
// headDescription: `{{C::gender.He}} has a face like a dragon, though smaller and meaner looking, with
//                   {{C::body.scaleColor}} scales, {{C::body.eyeColor}} eyes, and a short pair of ridged
//                   back facing horns.`,

// Lupin
// headDescription: `{{C::gender.He}} has the face of a wolf with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

// Mino
// Head description is complex for a caprien because males have anthro goat
// heads and females do not.
// headDescription: (character,body) => {
//   let horns = {
//     'forward-cow': 'sharp forward facing steer horns',
//     'wide-buffalo': 'wide and thick buffalo horns',
//   }[body.hornShape];
//
//   if (character.genderCode == 'male') {
//     return `{{C::gender.He}} has a big bull's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
//             and ${horns}.`;
//   }
//
//   return `{{C::gender.He}} has a big cows's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
//           and ${horns}.`;
// },

// Naga
// headDescription: `{{C::gender.He}} has a snake's face, with {{C::body.scaleColor}} scales and {{C::body.eyeColor}} eyes.`,

// Neko
// need to call out cat ears

// === Scaven ===

Description.buildHead({ species:'scaven', requires:['minion(C).face.at-least-average'],
  includes:['eye-color'],
  d: `The scaven's face is unsurprisingly rat-like with beady {{C::body.eyeColor}} eyes, a short muzzle, long whiskers
      and a twitchy pink nose.`
});

Description.buildHead({ species:'scaven', requires:['minion(C).face.at-least-average'],
  includes:['eye-color','fur-color'],
  d: `{{His}} head is a rat-like with beady {{C::body.eyeColor}} eyes, a twitchy pink nose, and covered in coarse
      {{C::body.furColor}} fur.`
});

Description.buildHead({ species:'scaven', requires:['minion(C).face.below-average'],
  includes:['fur-color'],
  d: `{{His}} rat shaped head is covered in greasy coarse patches of {{C::body.furColor}} fur.`
});

Description.buildHead({ species:'scaven', requires:['minion(C).face.below-average'],
  includes:['eye-color','fur-color'],
  d: `{{His}} misshapen head is a rat-like with beady {{C::body.eyeColor}} eyes and is covered in greasy coarse patches
      of {{C::body.furColor}} fur.`
});

// Selkie
// headDescription: `{{C::gender.He}} has a face like a seal with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

// Viera
// headDescription: `{{C::gender.He}} has {{C::body.eyeColor}} eyes and a face like an elf except that two long rabbit
//                   ears press upward from {{C::gender.his}} {{C::body.hairColor}} hair.`,
