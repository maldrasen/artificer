//
// // === Elf Bodies ===
//
// Description.buildBody({ species:'elf',
//   includes:['height-weight'],
//   d: `{{His}} {{C::species.elven}} body is {{C::body.fiveFeetTenInches}} tall, weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).is-male','minion(C).body.physique.below-average'],
//   includes:['skin-color'],
//   d: `{{He}} has a thin but unmistakably masculine {{C::species.elven}} body with {{C::body.skinColor}} skin.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).is-not-male','minion(C).body.physique.feeble'],
//   includes:['skin-color'],
//   d: `{{He}} is very thin with a lithe and flexible looking body with {{C::body.skinColor}} skin.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).body.physique.below-average','minion(C).body.height-short-for-species'],
//   includes:['height-weight'],
//   d: `{{He}}'s a very small {{C::species.elf}}, both thin and short. {{He}}'s only {{C::body.fiveFeetTenInches}} tall
//       and weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).body.physique.below-average','minion(C).body.height-average-for-species'],
//   includes:['skin-color'],
//   d: `{{His}} graceful {{C::species.elven}} body is slender and a little fragile looking with {{C::body.skinColor}} skin.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).body.physique.below-average','minion(C).body.height-tall-for-species'],
//   includes:['height-weight'],
//   d: `{{His}} body is tall and willowy, very thin and fragile looking while also being taller than most other
//       {{C::species.elves}}. {{He}} is {{C::body.fiveFeetTenInches}} tall but only weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).is-male','minion(C).body.physique.above-average'],
//   includes:['skin-color'],
//   d: `{{He}}'s a strong looking {{C::species.elf}} with hard well defined muscles rippling under {{his}}
//       {{C::body.skinColor}} skin.`
// });
//
// Description.buildBody({ species:'elf', requires:['minion(C).is-male','minion(C).body.physique.far-above-average'],
//   includes:['skin-color'],
//   d: `{{He}}'s a very strong and masculine {{C::species.elf}} with rock hard cords of muscle rippling under {{his}}
//       {{C::body.skinColor}} skin.`
// });
//
// // === Furry Bodies ===
//
// Description.buildBody({ species:'furry',
//   includes:['height-weight','fur-color'],
//   d: `{{His}} {{C::species.elven}} body is {{C::body.fiveFeetTenInches}} tall, weighs {{C::body.fiftyPounds}}, and
//       covered in {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).is-male','minion(C).body.physique.below-average'],
//   includes:['fur-color'],
//   d: `{{He}} has a thin but unmistakably masculine {{C::species.elven}} body with {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).is-not-male','minion(C).body.physique.feeble'],
//   includes:['fur-color'],
//   d: `{{He}} is very thin with a lithe and flexible looking body covered in {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).body.physique.below-average','minion(C).body.height-short-for-species'],
//   includes:['height-weight'],
//   d: `{{He}}'s very small for a {{C::species.elf}}, both thin and short. {{He}}'s only {{C::body.fiveFeetTenInches}}
//       tall and weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).body.physique.below-average','minion(C).body.height-average-for-species'],
//   includes:['fur-color'],
//   d: `{{His}} slender {{C::species.elven}} body is covered with {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).body.physique.below-average','minion(C).body.height-tall-for-species'],
//   includes:['height-weight'],
//   d: `{{His}} body is tall and willowy, very thin and fragile looking while also being taller than most other
//       {{C::species.elves}}. {{He}} is {{C::body.fiveFeetTenInches}} tall but only weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).is-male','minion(C).body.physique.above-average'],
//   includes:['fur-color'],
//   d: `{{He}}'s a strong looking {{C::species.elf}} with hard well defined muscles rippling under {{his}}
//       {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'furry', requires:['minion(C).is-male','minion(C).body.physique.far-above-average'],
//   includes:['fur-color'],
//   d: `{{He}}'s a very strong and masculine {{C::species.elf}} with rock hard cords of muscle rippling under {{his}}
//       {{C::body.furColor}} fur.`
// });
//
// // === Caprien Bodes ===
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.below-average'],
//   includes:['fur-color','height-weight'],
//   d: `The goat man's {{C::body.fiftyPound}}, {{C::body.fiveFootTenInch}} body looks slender and lithe under {{his}}
//       {{C::body.furColor}} fur. A small goat tail rests just above {{C::gender.his}} inviting ass.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average'],
//   includes:['fur-color'],
//   d: `{{He}} has thick {{C::body.furColor}} fur covering {{his}} body and {{he}} has a small goat tail resting just
//       above {{his}} ass.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average'],
//   includes:['fur-color','height-weight'],
//   d: `{{His}} {{C::body.fiveFootTenInch}} body is covered in thick {{C::body.furColor}} fur. {{He}} weighs
//       {{C::body.fiftyPounds}} and has a small goat tail resting just above {{his}} ass. `
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average','minion(C).body.height-short-for-species'],
//   includes:['fur-color','height-weight'],
//   d: `The goat man is shorter than most other caprians at {{C::body.fiveFootTenInches}}. {{He}} weighs
//       {{C::body.fiftyPounds}}, has thick {{C::body.furColor}} fur, and a small goat tail.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.average','minion(C).body.height-tall-for-species'],
//   includes:['fur-color'],
//   d: `The goat man is taller than most other caprians at {{C::body.fiveFootTenInches}}. {{He}} weighs
//       {{C::body.fiftyPounds}}, has thick {{C::body.furColor}} fur, and a small goat tail.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average'],
//   includes:['fur-color'],
//   d: `{{He}}'s a strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average','minion(C).body.height-short-for-species'],
//   includes:['fur-color'],
//   d: `{{He}}'s a short but strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.above-average','minion(C).body.height-tall-for-species'],
//   includes:['fur-color'],
//   d: `{{He}}'s a tall and strong looking goat with well defined muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average'],
//   includes:['fur-color'],
//   d: `{{He}}'s a very muscular looking goat with hard rippling muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average','minion(C).body.height-short-for-species'],
//   includes:['fur-color'],
//   d: `{{He}}'s a very stocky and muscular looking goat with hard rippling muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-male','minion(C).body.physique.far-above-average','minion(C).body.height-tall-for-species'],
//   includes:['fur-color'],
//   d: `{{He}}'s a huge muscular looking goat with massive rippling muscles under {{his}} {{C::body.furColor}} fur.`
// });
//
// // === Feminine Capriens ===
//
// Description.buildBody({ species:'caprien', requires:['minion(C).is-not-male'],
//   includes:['height-weight'],
//   d: `{{He}}'s {{C::body.fiveFootTenInches}} tall, weighs {{C::body.fiftyPounds}}, and has a little
//       {{C::body.hairColor}} goat tail that rests just above {{his}} shapely ass.`
// });
//
// // === Centaur Bodies ===
// // The minion's face type partially drives what kind of lower body the character has.
//
// Description.buildBody({ species:'centaur',
//   includes:['fur-color','height-weight'],
//   d: `{{He}} has the lower body of a horse with {{C::body.furColor}} fur. With {{his}} elven upper body {{he}}'s
//       {{C::body.fiveFootTenInches}} tall.`
// });
//
// Description.buildBody({ species:'centaur', requires:['minion(C).face.hard'],
//   includes:['fur-color','height-weight'],
//   d: `{{He}}'s a centaur with the lower body of a draft horse. {{His}} fetlocks are thick and shaggy with long
//       {{C::body.furColor}} hair. With {{his}} upper body {{he}}'s {{C::body.fiveFootTenInches}} tall.`
// });
//
// Description.buildBody({ species:'centaur', requires:['minion(C).is-male','minion(C).body.physique.above-average'],
//   includes:['skin-color','fur-color','height-weight'],
//   d: `{{His}} lower horse body is large and muscular and covered in thick {{C::body.furColor}} fur. With {{his}} well
//       toned and {{C::body.skinColor}} skinned upper body {{he}}'s {{C::body.fiveFootTenInches}} tall.`
// });
//
// Description.buildBody({ species:'centaur', requires:['minion(C).is-male','minion(C).body.physique.far-above-average'],
//   includes:['skin-color'],
//   d: `{{He}} has a very large and burly lower horse body, bulging with hard muscles and covered in thick
//       {{C::body.furColor}} fur. With {{his}} muscular and {{C::body.skinColor}} skinned upper body {{he}}'s
//       {{C::body.fiveFootTenInches}} tall.`
// });
//
// // === Dragon Bodies ===
// // TODO: We'll need more of these when more dragons are in the game.
//
// Description.buildBody({ species:'dragon', requires:[],
//   includes:['height-weight'],
//   d: `{{His}} large muscular dragon body is {{C::body.fiveFootTenInches}} tall. {{He}} has a long thick tail and
//       clawed feet and hands.`
// });
//
// // === Dryad Bodies ===
// // TODO: We'll need more of these when more dryads are in the game.
//
// Description.buildBody({ species:'dryad', requires:[],
//   includes:['height-weight','fur-color'],
//   d: `{{He}} has a body like a centaur, except {{his}} lower body is that of a deer with {{C::body.furColor}} fur. With
//       {{his}} upper body {{he}}'s {{C::body.fiveFootTenInches}} tall.`
// });
//
// // === Kobold Bodies ===
// // TODO: We'll need more of these when more kobolds are in the game.
//
// Description.buildBody({ species:'kobold', requires:[],
//   includes:['height-weight'],
//   d: `{{His}} small draconic body is {{C::body.fiveFootTenInches}} tall, and {{he}} weighs {{C::body.fiftyPounds}}.`
// });
//
// // === Naga Bodies ===
// // TODO: We'll need more of these when more naga are in the game.
//
// Description.buildBody({ species:'naga', requires:[],
//   includes:['height-weight'],
//   d: `When {{he}} holds {{him}}self upright {{he}}'s about {{C::body.fiveFootTenInches}} tall, though {{his}} long
//       serpentine body is fully {{C::body.nagaFeet}} long.`
// });
//
// // === Scaven Bodies ===
//
// Description.buildBody({ species:'scaven', requires:[],
//   includes:['height-weight'],
//   d: `{{His}} small lythe body is {{C::body.fiveFootTenInches}} tall, and {{he}} weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'scaven', requires:['minion(C).body.height-average-for-species'],
//   includes:['fur-color'],
//   d: `{{His}} rat-like body is covered in {{C::body.furColor}} fur.`
// });
//
// Description.buildBody({ species:'scaven', requires:['minion(C).body.height-short-for-species'],
//   includes:['height-weight'],
//   d: `At {{C::body.fiveFootTenInches}} tall {{he}}'s even smaller than most scaven and only weighs {{C::body.fiftyPounds}}.`
// });
//
// Description.buildBody({ species:'scaven', requires:['minion(C).body.height-tall-for-species'],
//   includes:['height-weight'],
//   d: `Though still small, he is {{C::body.fiveFootTenInches}} tall, which is a bit bigger than most other scaven. His rat-like body weighs {{C::body.fiftyPounds}}.`
// });
//
// // === Selkie Bodies ===
// // TODO: We'll need more of these when more selkie are in the game.
//
// Description.buildBody({ species:'selkie', requires:[],
//   includes:['fur-color'],
//   d: `{{He}} has the short sleek body of an otter with thick and gleaming {{C::body.furColor}} fur.`
// });
//
// // === Goblin Bodies ===
// // TODO: Goblins and Ogres will probably need their own body describer. I want
// //       their bodies to have a lot of variety and to be rather unusual.
//
// Description.buildBody({ species:'goblin', requires:[], d:`(TODO: Goblin Bodies)` });
// Description.buildBody({ species:'ogre', requires:[], d:`(TODO: Ogre Bodies)` });
//
// // === Incubus Bodies ===
// // TODO: And while we're at it, the same is probably true for demons who will
// //       have a bunch of unusual and demonic features.
//
// Description.buildBody({ species:'incubus', requires:[], d:`(TODO: Incubus Bodies)` });
// Description.buildBody({ species:'succubus', requires:[], d:`(TODO: Succubus Bodies)` });
