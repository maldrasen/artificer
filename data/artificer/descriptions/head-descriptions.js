
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
  d: `{{His}} elf-like face is crowned with {{C::body.ramHorns}} parting {{his}} {{C::body.hairColor}} hair.`
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

// === Dragons ===

Description.buildHead({ species:'dragon',
  d: `{{He}} has a distincly dragon-shaped head topped with a long pair of ridged backswept horns.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.hard'],
  d: `A long pair of ridged backswept horns give {{his}} draconic face a savage yet majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.hard'],
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns give {{his}} {{C::body.scaleColor}} scaled draconic face a savage yet
      majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.soft'],
  d: `A long pair of ridged backswept horns give {{his}} draconic face a wise and majestic look.`
});

Description.buildHead({ species:'dragon', requires:['minion(C).face.soft'],
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns give {{his}} {{C::body.scaleColor}} scaled draconic face a wise and
      majestic look.`
});

Description.buildHead({ species:'dragon',
  includes:['eye-color','scale-color'],
  d: `{{He}} has the face of a dragon, with {{C::body.scaleColor}} scales, {{C::body.eyeColor}} eyes, and a pair of
      ridged backswept horns.`
});

Description.buildHead({ species:'dragon',
  includes:['scale-color'],
  d: `A long pair of ridged backswept horns crown the top of {{his}} draconic {{C::body.scaleColor}} scaled head.`
});

// === Dryads ===

Description.buildHead({ species:'dryad',
  includes:['hair-color'],
  d: `Like other dryads {{he}} has a pair of deer antlers that crown the top of {{his}} head, emerging from {{his}}
      {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'dryad',
  includes:['eye-color','hair-color'],
  d: `{{He}} has an elf-like face with {{C::body.eyeColor}} eyes and a rack of deer antlers parting {{his}}
      {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'dryad', requires:['minion(C).face.hard'],
  includes:['eye-color','hair-color'],
  d: `{{He}} has a savage looking face like that of a {{C::body.eyeColor}} eyed elf, but with a large branching rack of
      deer antlers parting {{his}} {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'dryad', requires:['minion(C).face.soft'],
  includes:['eye-color','hair-color'],
  d: `{{He}} has a kind and friendly looking face like that of a {{C::body.eyeColor}} eyed elf, but with two small deer
      horns parting {{his}} {{C::body.hairColor}} hair.`
});

// === Equians ===

Description.buildHead({ species:'equian',
  includes:['fur-color','hair-color'],
  d: `{{He}} has a big horse shaped head covered in short {{C::body.furColor}} fur and topped with long
      {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'equian',
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has a big horse shaped head with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes. Long
      {{C::body.hairColor}} hair hangs loosly down one side of {{his}} face.`
});

Description.buildHead({ species:'equian',
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has a head like that of a horse with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes. Long
      {{C::body.hairColor}} hair hangs loosly down one side of {{his}} face.`
});

Description.buildHead({ species:'equian',
  includes:['eye-color','fur-color','hair-color'],
  d: `{{His}} large {{C::body.furColor}} furred head is distinctly horse shaped with large {{C::body.eyeColor}} eyes.
      Long {{C::body.hairColor}} hair hangs loosly down one side of {{his}} face.`
});

Description.buildHead({ species:'equian', requires:['minion(C).face.hard','minion(C).is-male'],
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has a big muscular head like that of a large drafthorse with {{C::body.furColor}} fur and
      {{C::body.eyeColor}} eyes. Long {{C::body.hairColor}} hair hangs loosly down one side of {{his}} face.`
});

Description.buildHead({ species:'equian', requires:['minion(C).face.hard','minion(C).is-male'],
  includes:['fur-color','hair-color'],
  d: `{{He}} has a big muscular head like that of a large drafthorse with {{C::body.furColor}} fur and long
      {{C::body.hairColor}} hair that hangs loosly down one side of {{his}} face.`
});

// === Kobolds ===

Description.buildHead({ species:'kobold',
  includes:['scale-color'],
  d: `{{He}} has a small dragon head with {{C::body.scaleColor}} scales and a short pair of ridged back facing horns.`
});

Description.buildHead({ species:'kobold',
  includes:['scale-color','eye-color'],
  d: `{{He}} has a small {{C::body.eyeColor}} eyed dragon head with {{C::body.scaleColor}} scales and a short pair of
      ridged back facing horns.`,
});

Description.buildHead({ species:'kobold', requires:['minion(C).face.hard'],
  includes:['eye-color','scale-color'],
  d: `{{He}} has a head like a dragon, though smaller and meaner looking, with {{C::body.scaleColor}} scales,
      {{C::body.eyeColor}} eyes, and a short pair of ridged back facing horns.`,
});

Description.buildHead({ species:'kobold', requires:['minion(C).face.soft','minion(C).face.at-least-average'],
  includes:['eye-color','scale-color'],
  d: `{{He}} has a small dragon shaped head that, on {{his}} short {{C::body.scaleColor}} scaled body, looks really
      rather cute rather than fearsome. {{He}} has {{C::body.eyeColor}} eyes, and a short pair of ridged back facing horns.`,
});

// === Lupins ===

// headDescription: `{{He}} has the face of a wolf with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

// === Minotaurs ===

// Head description is complex for a caprien because males have anthro goat
// heads and females do not.
// headDescription: (character,body) => {
//   let horns = {
//     'forward-cow': 'sharp forward facing steer horns',
//     'wide-buffalo': 'wide and thick buffalo horns',
//   }[body.hornShape];
//
//   if (character.genderCode == 'male') {
//     return `{{He}} has a big bull's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
//             and ${horns}.`;
//   }
//
//   return `{{He}} has a big cows's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes,
//           and ${horns}.`;
// },

// === Naga ===

// headDescription: `{{He}} has a snake's face, with {{C::body.scaleColor}} scales and {{C::body.eyeColor}} eyes.`,

// === Neko ===

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

// === Selkie ===
// headDescription: `{{He}} has a face like a seal with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,

// === Viera ===
// headDescription: `{{He}} has {{C::body.eyeColor}} eyes and a face like an elf except that two long rabbit
//                   ears press upward from {{his}} {{C::body.hairColor}} hair.`,
