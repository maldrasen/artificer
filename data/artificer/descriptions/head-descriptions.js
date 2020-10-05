
// Sometimes with elves there isn't anything to say about the head, so we can
// just use an empty description and let the finishHead() function add details
// about the eyes and hair.
Description.buildHead({ d:`` });

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

Description.buildHead({ species:'caprien', requires:['minion(C).is-male'],
  d: `{{His}} {{C::body.furColor}} furry head is distinctly goat shaped and crowned with two {{C::body.ramHorns}}.`
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

Description.buildHead({ species:'lupin',
  includes:['fur-color'],
  d: `{{His}} has a {{C::body.furColor}} furred wolf shaped head.`,
});

Description.buildHead({ species:'lupin',
  includes:['eye-color','fur-color'],
  d: `{{He}} has the head of a wolf with {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`,
});

Description.buildHead({ species:'lupin', requires:['minion(C).face.hard'],
  includes:['fur-color'],
  d: `{{He}} has a savage, feral looking wolf head covered in coarse {{C::body.furColor}} fur.`
});

Description.buildHead({ species:'lupin', requires:['minion(C).face.soft'],
  includes:['eye-color','fur-color'],
  d: `{{He}} has a sweet looking wolf head that gives {{him}} a more dog than wolf-like appearance. {{He}} has
      {{C::body.eyeColor}} eyes and his canine face is covered in soft {{C::body.furColor}} fur.`
});

// === Minotaurs ===
// Minotaurs, like Capriens have bull headed males and cow headed females. (Usually)

Description.buildHead({ species:'minotaur', requires:['minion(C).is-male'],
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has a big bull's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes, and two
      {{C::body.ramHorns}}. Between {{his}} horns is a shaggy tuft of {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-male'],
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has the head of a bull with {{C::body.eyeColor}} eyes, {{C::body.ramHorns}}, and is covered in
      {{C::body.furColor}} fur. Between {{his}} horns is a shaggy tuft of {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-male'],
  includes:['fur-color','hair-color'],
  d: `{{His}} {{C::body.furColor}} fur covered head is distinctly bull shaped, with a shaggy tuft of
      {{C::body.hairColor}} hair growing between {{his}} two {{C::body.ramHorns}}.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-male','minion(C).face.soft'],
  includes:['fur-color','hair-color'],
  d: `{{His}} {{C::body.furColor}} furred boyish face is distinctly cow-like and crowned with two {{C::body.ramHorns}}.
      A shaggy tuft of {{C::body.hairColor}} hair grows out from between {{his}} horns.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-not-male'],
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has a big cow's head covered in {{C::body.furColor}} fur, {{C::body.eyeColor}} eyes, and two
      {{C::body.ramHorns}}. Between {{his}} horns is a shaggy tuft of {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-not-male'],
  includes:['eye-color','fur-color','hair-color'],
  d: `{{He}} has the head of a cow with {{C::body.eyeColor}} eyes, {{C::body.ramHorns}}, and is covered in
      {{C::body.furColor}} fur. Between {{his}} horns is a shaggy tuft of {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-not-male'],
  includes:['fur-color','hair-color'],
  d: `{{His}} {{C::body.furColor}} fur covered head is distinctly cow shaped, with a shaggy tuft of
      {{C::body.hairColor}} hair growing between {{his}} two {{C::body.ramHorns}}.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).is-not-male','minion(C).face.soft'],
  includes:['fur-color','hair-color'],
  d: `{{His}} {{C::body.furColor}} furred head is distinctly cow-like and crowned with two {{C::body.ramHorns}}.
      A shaggy tuft of {{C::body.hairColor}} hair grows out from between {{his}} horns.`
});

Description.buildHead({ species:'minotaur', requires:['minion(C).face.hard'],
  includes:['eye-color','hair-color'],
  d: `{{His}} angry looking, {{C::body.eyeColor}} eyed, bull head is crowned with two {{C::body.ramHorns}}. A shaggy
      tuft of {{C::body.hairColor}} hair grows out from between {{his}} horns.`
});

// === Naga ===
// More naga features depend on face type. In order to maintain consistancy
// all naga head descriptions need to include their type.
//   Plain:  Elongated, glistening.
//   Hard:   Wide and dull scaled.
//   Soft:   Large Eyes.
//   Exotic: Cobra hoods.

Description.buildHead({ species:'naga', requires:['minion(C).face.plain'],
  includes:['scale-color','eye-color'],
  d: `{{He}} has an elongated snake-like head, with glistening {{C::body.scaleColor}} scales and {{C::body.eyeColor}} eyes.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.plain'],
  includes:['scale-color'],
  d: `{{His}} elongated snake-like head is covered in glistining {{C::body.scaleColor}} scales.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.hard'],
  includes:['scale-color','eye-color'],
  d: `{{He}} has a wide snake head with {{C::body.eyeColor}} eyes and dull {{C::body.scaleColor}} scales.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.hard'],
  includes:['scale-color','eye-color'],
  d: `{{His}} snake head is broad with dull {{C::body.scaleColor}} scales and {{C::body.eyeColor}} eyes.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.soft'],
  includes:['eye-color'],
  d: `Big {{C::body.eyeColor}} eyes shine hypnotically in {{his}} snake-like head.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.soft'],
  includes:['scale-color','eye-color'],
  d: `{{His}} head is distinctly snake-like with large {{C::body.eyeColor}} eyes and {{C::body.scaleColor}} scales.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.exotic'],
  includes:['scale-color','eye-color'],
  d: `{{He}} has a cobra like head with a wide flared hood, {{C::body.scaleColor}} scales, and {{C::body.eyeColor}} eyes.`,
});

Description.buildHead({ species:'naga', requires:['minion(C).face.exotic'],
  includes:['eye-color'],
  d: `{{His}} head resembles a cobra with a wide flared hood at the back of his head and mesmerizing
      {{C::body.eyeColor}} eyes.`,
});

// === Neko ===
// Neko fur is the same as their hair color, so no need to mention it twice.

Description.buildHead({ species:'neko',
  includes:['eye-color','hair-color','fur-color'],
  d: `{{He}} has shining {{C::body.eyeColor}} cat eyes and a pair of {{C::body.furColor}} furred ears.`
});

Description.buildHead({ species:'neko',
  includes:['eye-color','hair-color','fur-color'],
  d: `{{He}} has bright {{C::body.eyeColor}} cat eyes and a pair of furry ears that poke out from {{his}}
      {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'neko',
  includes:['hair-color','fur-color'],
  d: `{{He}} has a pair of tall furry ears parting {{his}} {{C::body.hairColor}} hair.`
});

// === Scaven ===

Description.buildHead({ species:'scaven',
  includes:['eye-color'],
  d: `The scaven has a face like a rat with beady {{C::body.eyeColor}} eyes.`
});

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

Description.buildHead({ species:'selkie',
  includes:['eye-color','fur-color'],
  d: `{{He}} has a head like a seal with short and shiny {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`
});

Description.buildHead({ species:'selkie',
  includes:['eye-color','fur-color'],
  d: `{{His}} head is seal shaped with glistening {{C::body.furColor}} fur and {{C::body.eyeColor}} eyes.`
});

// === Viera ===

Description.buildHead({ species:'viera',
  includes:['eye-color','hair-color','fur-color'],
  d: `{{He}} has {{C::body.eyeColor}} eyes and a face like an elf except for two long rabbit ears pressing upward from {{his}} {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'viera',
  includes:['hair-color','fur-color'],
  d: `{{His}} elven face has two long rabbit ears pressing upward from {{his}} {{C::body.hairColor}} hair.`
});

Description.buildHead({ species:'viera',
  includes:['hair-color','fur-color'],
  d: `{{His}} elven face has two long furry rabbit ears parting {{his}} {{C::body.hairColor}} hair.`
});
