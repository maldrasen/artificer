
Description.buildHead({ requires:[], includes:['eye-color'],
  d: `({{He}} has a head with eyes.)`
});

Description.buildHead({ requires:[],
  d: `({{He}} has a head)`
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
