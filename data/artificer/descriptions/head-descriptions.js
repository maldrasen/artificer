
Description.buildHead({ requires:[], includes:['eye-color'],
  d: `({{He}} has a head with eyes.)`
});

Description.buildHead({ requires:[],
  d: `({{He}} has a head)`
});

// == Masculine Capriens ===
// Capriens specifically have goat headed males, but elven faced females.

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-male'],
  includes:['eye-color','fur-color'],
  d: `{{He}} has the head of a goat with {{C::body.eyeColor}} eyes, {{C::body.ramHorns}}, and is covered in {{C::body.furColor}} fur.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-male'],
  includes:['fur-color'],
  d: `{{His}} {{C::body.furColor}} fur covered head is distinctly goat shaped and topped with two {{C::body.ramHorns}}.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-male','minion(C).face.hard'],
  d: `{{His}} hardened face is distinctly goat shaped and crowned with two {{C::body.ramHorns}}.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-male','minion(C).face.soft'],
  d: `{{His}} boyish face is distinctly goat shaped and crowned with two {{C::body.ramHorns}}.`
});

// === Feminine Capriens ===

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-not-male'],
  includes:['hair-color'],
  d:`{{His}} elven head is crowned with {{C::body.ramHorns}} parting {{C::gender.his}} {{C::body.hairColor}} hair.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-not-male'],
  includes:['eye-color','hair-color'],
  d: `{{He}}'s a caprien but only the males of {{his}} species have goat shaped heads. Instead {{his}} face is elven
      with large {{C::body.eyeColor}} eyes, and {{C::body.hairColor}} hair. {{His}} {{C::body.ramHorns}} though mark
      {{him}} as one of the demonic goat people.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-not-male','minion(C).face.soft'],
  includes:['eye-color','hair-color'],
  d:`{{His}} elven face and big {{C::body.eyeColor}} eyes give {{him}} a young and innocent look, though {{his}}
     {{C::body.ramHorns}} also add a slightly demonic flair.`
});

Description.buildHead({ conditions:['minion(C).is-caprien'], requires:['minion(C).is-not-male','minion(C).face.hard'],
  includes:['eye-color','hair-color'],
  d:`{{His}} {{C::body.ramHorns}} and hard {{C::body.eyeColor}} eyes make {{his}} elven face look dangerous and demonic.`
});
