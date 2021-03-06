global.Species = class Species extends Form {

  get isFae()          { return this.hasFlag('fae');    }
  get isElf()          { return this.hasFlag('elf');    }
  get isDemon()        { return this.hasFlag('demon');  }
  get isScalie()       { return this.hasFlag('scalie'); }
  get hasCockSheath()  { return this.bodyOptions.cock.sheath != null; }
  get hasHair()        { return this.bodyOptions.hairColors != null; }

  get pluralName() {
    if (this.code == 'dark-elf') { return 'Dark Elves'; }
    if (this.code == 'elf')      { return 'Elves'; }
    if (this.code == 'incubus')  { return 'Incubi'; }
    if (this.code == 'scaven')   { return 'Scaven'; }
    if (this.code == 'succubus') { return 'Succubi'; }
    if (this.code == 'wood-elf') { return 'Wood Elves'; }
    return `${this.name}s`
  }

  // Used in the describers to describe a character's species in general. A
  // nymph and a sylph can be reffered to as a fae or a woodelf might just be
  // called an elf. Otherwise the character's species name is the same as the
  // class.
  get classname() {
    if (this.isFae) return 'fae';
    if (this.isElf) return 'elf';
    if (this.isDemon) return 'demon';
    return this.name.toLowerCase();
  }

  get pluralClassname() {
    if (this.isFae) return 'fae';
    if (this.isElf) return 'elves';
    if (this.isDemon) return 'demons';
    return this.pluralName.toLowerCase();
  }

  // I sometimes need to know if a character of this species would have a
  // decent bite attack, like a lupin or a scaven. I don't think it's worth
  // having a sepatate species attribute for just that though.
  get biter() {
    return (['dragon','kobold','lupin','naga','scaven']).indexOf(this.code) >= 0
  }

  isFurry(gender) { return (this.code == 'caprien') ? (gender == 'male') : this.hasFlag('furry'); }
  hasFlag(flag)  { return (this.flags||[]).indexOf(flag) >= 0; }

  // Pick a random gender code based on a species' gender frequency map.
  randomGender() {
    return Random.fromFrequencyMap(this.genderRatio || { female:45, futa:10, male:45 });
  }

  randomizedAttribute(attribute) {
    if (this[attribute] == 0) { return 0; }
    let value = this[attribute] + Random.upTo(18) - 9;
    if (value<0) { value=0; }
    return value;
  }

  randomHeight(gender) {
    let base =   this.bodyOptions.baseHeight || 1520;
    let range =  this.bodyOptions.heightRange || 300;
    let adjust = this.bodyOptions.maleHeightAdjust || 100;

    let height = base + Random.upTo(range);
    if (gender == 'male') { height += adjust; }
    if (gender == 'futa') { height += adjust/2; }

    return height;
  }

  averageHeight(gender) {
    let base =   this.bodyOptions.baseHeight || 1520;
    let range =  this.bodyOptions.heightRange || 300;
    let adjust = this.bodyOptions.maleHeightAdjust || 100;

    let height = base + Math.round(range/2);
    if (gender == 'male') { height += adjust; }
    if (gender == 'futa') { height += adjust/2; }

    return height;
  }

  sizeFactor() {
    if (this.bodyOptions.shape == 'quadruped') { return 2; }
    return (this.bodyOptions.baseHeight || 1520) / 1520
  }

  // Caprien females look nothing like the males. The women have slighly
  // goaty features like small horns while the men are furry goat morphs.
  random(part, gender) {
    if (this.code == 'caprien') {
      if (part == 'skin')                       { return 'human' }
      if (part == 'hair' && gender == 'female') { return 'human' }
      if (part == 'fur'  && gender == 'male')   {
        return Random.fromFrequencyMap({
          black: 20,
          brown: 50,
          gray:  30,
          white: 10
        });
      }
    }

    let colors = {
      skin:  this.bodyOptions.skinColors,
      fur:   this.bodyOptions.furColors,
      scale: this.bodyOptions.scaleColors,
      hair:  this.bodyOptions.hairColors,
      eye:   this.bodyOptions.eyeColors,
      horn:  this.bodyOptions.hornShapes
    }[part];

    if (colors == null) { return null; }
    if (typeof colors == 'string') { return colors; }

    return Random.fromFrequencyMap(colors);
  }

  // Caprien and Dryad females have elven looking faces while the males of
  // their species have goat and deer faces respectivly.
  getFaceShape(gender) {
    if (this.code == 'caprien') { return gender == 'male' ? 'goat' : 'elf' }
    if (this.code == 'dryad')   { return gender == 'male' ? 'deer' : 'elf' }
    return this.bodyOptions.faceShape || 'elf';
  }

}
