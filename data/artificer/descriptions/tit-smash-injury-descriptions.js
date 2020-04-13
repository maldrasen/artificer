
// === Single Tit Smashed ===

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', furryAddendum:'red-color',
  d: `slapped around a bit; it's looking red and sore.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', furryAddendum:'red-color',
  d: `slapped and spanked until turning a bright red color.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruises',
  d: `banged up and bruised a bit. A wide brown and yellow bruise is spreading across {{C::gender.his}}
      {{C::tits.size}} {{tit}}.`,
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
  d: `badly bruised. A single {{C::tits.smashShape}} shaped bruise mars {{C::gender.his}} {{C::tits.smashPlace}}
      {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruises',
  requires:['tits-smash-count-2'],
  d: `badly beaten; a pair of deep brown and purple bruises visible on the surface of {{C::gender.his}} swollen
      {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruises',
  requires:['tits-smash-count-over-2'],
  d: `badly beaten and covered with small, but deep and painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr', furryAddendum:'bruises',
  d: `smashed or crushed somehow. {{C::gender.His}} {{C::tits.size}} breast is visibly swollen and purple with
      bruising.`,
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
  d: `banged up and bruised a bit. Brown and yellow bruise are spreading across {{C::gender.his}} {{C::tits.size}}
      {{tits}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all', furryAddendum:'bruises',
  d: `badly beaten. {{C::gender.His}} {{C::tits.size}} {{tits}} are visibly bruised and swollen.`,
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
  d: `smashed or crushed somehow. {{C::gender.His}} {{C::tits.size}} breasts are visibly swollen and purple with
      bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  d: `completely smashed. Both of {{C::gender.his}} swollen brutalized {{tits}} have turned completely purple from the
      extensive bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  d: `savagely crushed. {{C::gender.His}} black and purple {{tits}} look flattened and misshapen.`,
});

// === Flat Chested ===

Description.buildTitInjury({ damageType:'smash', level:1, furryAddendum:'red-color',
  conditions:['tits-size-zero'],
  d: `slapped a bit. {{C::gender.His}} flat chest is bright red from the slapping.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, furryAddendum:'bruises',
  conditions:['tits-size-zero'],
  d: `banged up and bruised a bit. A few brown and yellow bruises are spreading over {{C::gender.his}} flat chest.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, furryAddendum:'bruise',
  conditions:['tits-size-zero'], requires:['tits-smash-count-1'],
  d: `badly beaten. A wide bruise spreads across {{C::gender.his}} completely flat chest.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, furryAddendum:'bruises',
  conditions:['tits-size-zero'], requires:['tits-smash-count-2'],
  d: `badly beaten. {{C::gender.His}} flat chest is marred by a pair of deep bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, furryAddendum:'bruises',
  conditions:['tits-size-zero'], requires:['tits-smash-count-over-2'],
  d: `badly beaten. {{C::gender.His}} flat chest is adorned with several wide bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, furryAddendum:'bruises',
  conditions:['tits-size-zero'],
  d: `punched and beaten until most of {{C::gender.his}} flat chest has been covered in deep black and purple bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, furryAddendum:'deep-bruising',
  conditions:['tits-size-zero'],
  d: `savagely beaten. {{C::gender.His}} flat chest is completely black and purple with painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, furryAddendum:'deep-bruising',
  conditions:['tits-size-zero'], requires:['tits-smash-shape'],
  d: `savagely beaten. {{C::gender.His}} flat chest is completely black and purple with painful looking bruises and
      {{C::tits.smashShape}} prints.`,
});

// === Scavens ===
// These descriptions are stupid similar to the ones above, but usually the
// scaven tit descriptions need to be distinct on account of them having 12
// tits. I could work on that logic a bit more so that that rule doesn't apply
// to injuries to a single tit, or I can just copy them from above and adjust as
// nessesary.
//
// It might be possible to use the same descriptions for the lupins as well,
// or turn these into general multi-tit character descriptions.

Description.buildTitInjury({ damageType:'smash', level:1, place:'lr', furryAddendum:'red-color',
  conditions:['species-scaven'],
  d: `slapped around a bit; it's looking red and sore.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `banged up and bruised a bit. A wide brown and yellow bruise is spreading across {{C::gender.his}}
      {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruise',
  conditions:['species-scaven'], requires:['tits-smash-count-1'],
  d: `recently bruised. A single yellow bruise mars the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'lr', furryAddendum:'bruises',
  conditions:['species-scaven'], requires:['tits-smash-count-2'],
  d: `recently bruised. A couple of yellow bruises mar the surface of {{C::gender.his}} {{C::tits.size}} {{tit}}.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'lr', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `badly beaten. It's visibly bruised and swollen.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'lr', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `smashed or crushed somehow. It's visibly swollen and purple with bruising.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'lr', furryAddendum:'deep-bruising',
  conditions:['species-scaven'],
  d: `completely smashed. It's turned black and purple with deep bruising and looks flattened and misshapen.`,
});

Description.buildTitInjury({ damageType:'smash', level:1, place:'all', furryAddendum:'red-color',
  conditions:['species-scaven'],
  d: `slapped around for a bit. Most of {{C::gender.his}} {{tits}} are bright red from the rough treatment.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, place:'all', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `banged up and bruised a bit. A few of {{C::gender.his}} {{tits}} have brown and yellow bruises spreading over
      them.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, place:'all', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `badly beaten. Most of {{C::gender.his}} {{C::tits.size}} {{tits}} look visibly bruised and swollen.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, place:'all', furryAddendum:'bruises',
  conditions:['species-scaven'],
  d: `punched and beaten until almost all of {{C::gender.his}} {{C::tits.size}} {{tits}} have turned deep pruple and
      black with bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  conditions:['species-scaven'],
  d: `savagely beaten. Every single one of {{C::gender.his}} {{C::tits.size}} {{tits}} are completely black and purple
      with painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, place:'all', furryAddendum:'deep-bruising',
  conditions:['species-scaven'], requires:['tits-smash-shape'],
  d: `savagely beaten. Every single one of {{C::gender.his}} {{C::tits.size}} {{tits}} are completely black and purple
      with painful looking bruises in the shape of {{C::tits.smashShape}} prints.`,
});

// === Flat Chested Rats ===

Description.buildTitInjury({ damageType:'smash', level:1, furryAddendum:'red-color',
  conditions:['species-scaven','tits-size-zero'],
  d: `slapped a bit. {{C::gender.His}} flat chest is bright red from the slapping.`,
});

Description.buildTitInjury({ damageType:'smash', level:2, furryAddendum:'bruises',
  conditions:['species-scaven','tits-size-zero'],
  d: `banged up and bruised a bit. A few brown and yellow bruises are spreading over {{C::gender.his}} flat chest.`,
});

Description.buildTitInjury({ damageType:'smash', level:3, furryAddendum:'bruises',
  conditions:['species-scaven','tits-size-zero'],
  d: `badly beaten. {{C::gender.His}} flat chest is adorned with several wide bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:4, furryAddendum:'bruises',
  conditions:['species-scaven','tits-size-zero'],
  d: `punched and beaten until most of {{C::gender.his}} flat chest has been covered in deep black and purple bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, furryAddendum:'deep-bruising',
  conditions:['species-scaven','tits-size-zero'],
  d: `savagely beaten. {{C::gender.His}} flat chest is completely black and purple with painful looking bruises.`,
});

Description.buildTitInjury({ damageType:'smash', level:5, furryAddendum:'deep-bruising',
  conditions:['species-scaven','tits-size-zero'], requires:['tits-smash-shape'],
  d: `savagely beaten. {{C::gender.His}} flat chest is completely black and purple with painful looking bruises and
      {{C::tits.smashShape}} prints.`,
});
