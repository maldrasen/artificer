
// === Elf Bodies ===

Description.buildBody({ species:'elf', requires:[],
  d: `(TODO: Elf Bodies)`
});

// === Furry Bodies ===

Description.buildBody({ species:'furry', requires:[],
  d: `(TODO: Furry Bodies)`
});

// === Caprien Bodes ===

Description.buildBody({ species:'caprien', requires:[],
  d: `(TODO: Caprien Bodies)`
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


// Moving, Caprien
// skinDescription: (character,body) => {
//   return (character.genderCode == 'male') ?
//     `{{C::gender.His}} body is also covered in thick {{C::body.furColor}} fur and {{C::gender.he}} has a small goat tail resting just above {{C::gender.his}} ass.`:
//     `{{C::gender.He}} has {{C::body.skinColor}} skin and a small goat tail resting just above {{C::gender.his}} shapely ass.`
// },
