global.AnusDescription = class AnusDescription extends Description {}
global.FaceDescription = class FaceDescription extends Description {}
global.NipplesDescription = class FaceDescription extends Description {}

// Some species have their own species specific body descriptions. The elf
// races just have average human-like bodies. The 'furry' species are similar
// enough to not need distinct body descriptions, except for the caprien and
// selkie who are different enough to need their own descriptions. All the
// other species need their own custom descriptions:
//
// Custom Descriptions Needed
//    Caprien, Centaur, Dragon, Dryad, Goblin, Incubus, Kobold,
//    Naga, Ogre, Scaven, Selkie, Succubus
//
global.BodyDescription = class BodyDescription extends Description {
  conditionsMet(context) {
    const elfBodied = ['human','dark-elf','elf','gnome','neko','nymph','sylph','viera','wood-elf'];
    const furryBodied = ['equian','lupin','minotaur'];
    const speciesCode = context.get('C').character.speciesCode;

    if (ArrayUtility.contains(elfBodied, speciesCode)) { return this.species == 'elf' }
    if (ArrayUtility.contains(furryBodied, speciesCode)) { return this.species == 'furry' }

    return this.species == speciesCode;
  }
}


// When a cock description includes a description of a cock feature we need
// to make sure that cock feature is actually present. Also, the normal cock
// descriptions don't really make a lot of sense when used to describe horse
// cocks, mostly because of the size comparason stuff, so horsecocks always
// need to use horsecock specific descriptions. Multicock descriptions are
// also distinct.
global.CockDescription = class CockDescription extends Description {
  conditionsMet(context) {
    const cock = context.get('C').cock;

    for (let i=0; i<(this.includes||[]).length; i++) {
      if (this.includes[i] == 'knobs'  && cock.hasKnobs == false ) { return false; }
      if (this.includes[i] == 'knot'   && cock.hasKnot == false)   { return false; }
      if (this.includes[i] == 'spines' && cock.hasSpines == false) { return false; }
      if (this.includes[i] == 'sheath' && cock.hasSheath == false) { return false; }
    }

    if (this.conditionFailed('minion(C).cock.horse',   cock.shape == 'horse')) { return false; }
    if (this.conditionFailed('minion(C).cock.count=2', cock.count == 2)) { return false; }
    if (this.conditionFailed('minion(C).cock.count=3', cock.count == 3)) { return false; }

    return true;
  }
}


// Head descriptions only need to check to see if the species matches for
// non-elven looking species.
global.HeadDescription = class HeadDescription extends Description {
  conditionsMet(context) {
    const nonElves = ['caprien','dragon','scaven','dryad','equian','kobold','lupin','minotaur','naga','neko','selkie','viera']
    const speciesCode = context.get('C').character.speciesCode;
    return ArrayUtility.contains(nonElves,speciesCode) ?
      (this.species == speciesCode ) :
      (this.species == null);
  }
}


// Tits descriptions are specialized for flat chests and scaven tits.
global.TitsDescription = class TitsDescription extends Description {
  conditionsMet(context) {
    const character = context.get('C').character;
    const tits = context.get('C').tits;

    if (this.conditionFailed('minion(C).is-scaven', character.speciesCode == 'scaven'))  { return false; }
    if (this.conditionFailed('minion(C).tits.zero', tits.currentSizeClass == 'zero')) { return false; }

    return true;
  }
}
