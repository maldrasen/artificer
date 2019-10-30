
// === Single Tit Smashed ===

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', furryAddendum:'red-color',
  d: `slapped around a bit; it's looking red and sore.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', furryAddendum:'red-color',
  d: `slapped and spanked until turning a bright red color.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruises',
  d: `banged up and bruised a bit.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruise',
  requires:['tits-smash-count-1'],
  d: `recently bruised. A single yellow bruise mars the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruises',
  requires:['tits-smash-count-2'],
  d: `recently bruised. A couple of yellow bruises mar the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruise',
  requires:['tits-smash-count-1'],
  d: `badly bruised. A single deep purple bruise covers {{C::gender.his}} {{C::tits.smashPlace}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruise',
  requires:['tits-smash-shape','tits-smash-count-1'],
  d: `badly bruised. A single {{C::tits.smashShape}} shaped bruise mars {{C::gender.his}} {{C::tits.smashPlace}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruises',
  requires:['tits-smash-count-2'],
  d: `badly beaten; a pair of deep brown and purple bruises visible on the surface of {{C::gender.his}} swollen {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruises',
  requires:['tits-smash-count-over-2'],
  d: `badly beaten and covered with small, but deep and painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr', furryAddendum:'bruises',
  d: `smashed or crushed somehow. {{C::gender.His}} {{C::tits.size}} breast is visibly swollen and purple with bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr', furryAddendum:'deep-bruising',
  d: `completely brutalized. {{C::gender.His}} {{tit}} is a single huge swollen purple bruise.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr', furryAddendum:'deep-bruising',
  d: `savagely crushed. {{C::gender.His}} black and purple {{tit}} looks flattened and misshapen.`,
});

// === All Tits Smashed ===

Description.buildTitInjury({ damageType:'smash', level:1, place:'all', furryAddendum:'red-color',
  d: `slapped around a bit; they're looking red and sore.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'all', furryAddendum:'red-color',
  d: `slapped and spanked until turning a bright red color.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'all', furryAddendum:'bruises',
  d: `banged up and bruised a bit.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all', furryAddendum:'bruises',
  requires:['tits-smash-count-2'],
  d: `badly beaten; with each of {{C::gender.his}} swollen {{tits}} baring a deep brown and purple bruise.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all', furryAddendum:'bruises',
  requires:['tits-smash-count-over-2'],
  d: `badly beaten and covered with small, but deep and painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'all', furryAddendum:'bruises',
  d: `smashed or crushed somehow. {{C::gender.His}} {{C::tits.size}} breasts are visibly swollen and purple with bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  d: `completely smashed. Both of {{C::gender.his}} swollen brutalized {{tits}} have turned completely purple from the extensive bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  d: `savagely crushed. {{C::gender.His}} black and purple {{tits}} look flattened and misshapen.`,
});

// === Flat Chested ===

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', conditions:['tits-size-zero'],
  d: `slapped a bit. {{C::gender.His}} flat chest is bright red from the slapping.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', conditions:['tits-size-zero'],
  d: `banged up and bruised a bit.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', conditions:['tits-size-zero'],
  requires:['tits-smash-count-1'],
  d: `badly beaten. A wide bruise spreads across {{C::gender.his}} completely flat chest.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', conditions:['tits-size-zero'],
  requires:['tits-smash-count-2'],
  d: `badly beaten. {{C::gender.His}} flat chest is marred by a pair of deep bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', conditions:['tits-size-zero'],
  requires:['tits-smash-count-over-2'],
  d: `badly beaten. {{C::gender.His}} flat chest is adorned with several wide bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr', conditions:['tits-size-zero'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr', conditions:['tits-size-zero'],
  d: `completely smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'all', conditions:['tits-size-zero'],
  d: `slightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'all', conditions:['tits-size-zero'],
  d: `lightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all', conditions:['tits-size-zero'],
  d: `smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'all', conditions:['tits-size-zero'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', conditions:['tits-size-zero'],
  d: `completely smashed.`,
});




// === Rats ===
// These descriptions are stupid similar to the ones above, but usually the rat
// tit descriptions need to be distinct on account of them having 12 tits. I
// could work on that logic a bit more so that that rule doesn't apply to
// injuries to a single tit, or I can just copy them from above and adjust as
// nessesary.

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr',
  conditions:['species-rat'],
  d: `slapped around for a bit. It would look red and sore if not for {{C::gender.his}} thick {{C::body.furColor}} fur.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr',
  conditions:['species-rat'],
  d: `banged up and bruised a bit.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr',
  conditions:['species-rat'], requirements:['tits-smash-count-1'],
  d: `recently bruised. A single yellow bruise mars the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr',
  conditions:['species-rat'], requirements:['tits-smash-count-2'],
  d: `recently bruised. A couple of yellow bruises mar the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr',
  conditions:['species-rat'],
  d: `smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr',
  conditions:['species-rat'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr',
  conditions:['species-rat'],
  d: `completely smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'all',
  conditions:['species-rat'],
  d: `slapped around for a bit. They would look red and sore if not for {{C::gender.his}} thick {{C::body.furColor}} fur.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'all',
  conditions:['species-rat'],
  d: `lightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all',
  conditions:['species-rat'],
  d: `smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'all',
  conditions:['species-rat'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all',
  conditions:['species-rat'],
  d: `completely smashed.`,
});

// === Flat Chested Rats ===

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr',
  conditions:['species-rat','tits-size-zero'],
  d: `slightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr',
  conditions:['species-rat','tits-size-zero'],
  d: `lightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr',
  conditions:['species-rat','tits-size-zero'],
  d: `smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr',
  conditions:['species-rat','tits-size-zero'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr',
  conditions:['species-rat','tits-size-zero'],
  d: `completely smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'all',
  conditions:['species-rat','tits-size-zero'],
  d: `slightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'all',
  conditions:['species-rat','tits-size-zero'],
  d: `lightly smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all',
  conditions:['species-rat','tits-size-zero'],
  d: `smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'all',
  conditions:['species-rat','tits-size-zero'],
  d: `well smashed.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all',
  conditions:['species-rat','tits-size-zero'],
  d: `completely smashed.`,
});
