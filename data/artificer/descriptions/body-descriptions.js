
// === Elf Bodies ===

Description.buildBody({ species:'elf', requires:[],
  d: `(TODO: Elf Bodies)`
});

// === Furry Bodies ===

Description.buildBody({ species:'furry', requires:[],
  d: `(TODO: Furry Bodies)`
});

// === Caprien Bodes ===

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.below-average'],
  includes:['fur-color','height-weight'],
  d: `The goat man's {{C::body.fiftyPound}}, {{C::body.fiveFootTenInch}} body looks slender and lithe under {{his}}
      {{C::body.furColor}} fur. A small goat tail rests just above {{C::gender.his}} inviting ass.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average'],
  includes:['fur-color'],
  d: `{{He}} has thick {{C::body.furColor}} fur covering {{his}} body and {{he}} has a small goat tail resting just
      above {{his}} ass.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average'],
  includes:['fur-color','height-weight'],
  d: `{{His}} {{C::body.fiveFootTenInch}} body is covered in thick {{C::body.furColor}} fur. {{He}} weighs
      {{C::body.fiftyPounds}} and has a small goat tail resting just above {{his}} ass. `
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average','minion(C).body.height-short-for-species'],
  includes:['fur-color','height-weight'],
  d: `The goat man is shorter than most other caprians at {{C::body.fiveFootTenInches}}. {{He}} weighs
      {{C::body.fiftyPounds}}, has thick {{C::body.furColor}} fur, and a small goat tail.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average','minion(C).body.height-tall-for-species'],
  includes:['fur-color'],
  d: `The goat man is taller than most other caprians at {{C::body.fiveFootTenInches}}. {{He}} weighs
      {{C::body.fiftyPounds}}, has thick {{C::body.furColor}} fur, and a small goat tail.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average'],
  includes:['fur-color'],
  d: `{{He}}'s a strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average','minion(C).body.height-short-for-species'],
  includes:['fur-color'],
  d: `{{He}}'s a short but strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average','minion(C).body.height-tall-for-species'],
  includes:['fur-color'],
  d: `{{He}}'s a tall and strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average'],
  includes:['fur-color'],
  d: `{{He}}'s a very muscular looking goat with hard rippling muscles under {{his}} {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average','minion(C).body.height-short-for-species'],
  includes:['fur-color'],
  d: `{{He}}'s a very stocky and muscular looking goat with hard rippling muscles under {{his}} {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average','minion(C).body.height-tall-for-species'],
  includes:['fur-color'],
  d: `{{He}}'s a huge muscular looking goat with massive rippling muscles under {{his}} {{C::body.furColor}} fur.`
});

// === Feminine Capriens ===

Description.buildBody({ species:'caprien', requires:['minion(C).is-not-male'],
  includes:['height-weight'],
  d: `{{He}}'s {{C::body.fiveFootTenInches}} tall, weighs {{C::body.fiftyPounds}}, and has a little
      {{C::body.hairColor}} goat tail that rests just above {{his}} shapely ass.`
});

// === Centaur Bodies ===

Description.buildBody({ species:'centaur', requires:[],
  d: `(TODO: Centaur Bodies)`
});

// === Dragon Bodies ===

Description.buildBody({ species:'dragon', requires:[],
  d: `(TODO: Dragon Bodies)`
});

// === Dryad Bodies ===

Description.buildBody({ species:'dryad', requires:[],
  d: `(TODO: Dryad Bodies)`
});

// === Goblin Bodies ===

Description.buildBody({ species:'goblin', requires:[],
  d: `(TODO: Goblin Bodies)`
});

// === Incubus Bodies ===

Description.buildBody({ species:'incubus', requires:[],
  d: `(TODO: Incubus Bodies)`
});

// === Kobold Bodies ===

Description.buildBody({ species:'kobold', requires:[],
  d: `(TODO: Kobold Bodies)`
});

// === Naga Bodies ===

Description.buildBody({ species:'naga', requires:[],
  d: `(TODO: Naga Bodies)`
});

// === Ogre Bodies ===

Description.buildBody({ species:'ogre', requires:[],
  d: `(TODO: Ogre Bodies)`
});

// === Scaven Bodies ===

Description.buildBody({ species:'scaven', requires:[],
  includes:['height-weight'],
  d: `{{His}} small lythe body is {{C::body.fiveFootTenInches}} tall, and {{he}} weighs {{C::body.fiftyPounds}}.`
});

Description.buildBody({ species:'scaven', requires:['minion(C).body.height-average-for-species'],
  includes:['fur-color'],
  d: `{{His}} rat-like body is covered in {{C::body.furColor}} fur.`
});

Description.buildBody({ species:'scaven', requires:['minion(C).body.height-short-for-species'],
  includes:['height-weight'],
  d: `At {{C::body.fiveFootTenInches}} tall {{he}}'s even smaller than most scaven and only weighs {{C::body.fiftyPounds}}.`
});

Description.buildBody({ species:'scaven', requires:['minion(C).body.height-tall-for-species'],
  includes:['height-weight'],
  d: `Though still small, he is {{C::body.fiveFootTenInches}} tall, which is a bit bigger than most other scaven. His rat-like body weighs {{C::body.fiftyPounds}}.`
});

// === Selkie Bodies ===

Description.buildBody({ species:'selkie', requires:[],
  d: `(TODO: Selkie Bodies)`
});

// === Succubus Bodies ===

Description.buildBody({ species:'succubus', requires:[],
  d: `(TODO: Succubus Bodies)`
});
