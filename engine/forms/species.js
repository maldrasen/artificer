global.Species = class Species extends Form {

  // Pick a random gender code based on a species' gender frequency map.
  randomGender() {
    return Random.fromFrequencyMap(this.genderRatio || { female:45, futa:10, male:45 });
  }

  randomizedAttribute(attribute) {
    let value = this[attribute] + Random.upTo(18) - 9;
    if (value<0) { value=0; }
    return value;
  }

  randomizedViolenceProclivity(gender) {
    let base = Random.roll(this.violenceRange, this.violenceAverage);

    // Unless you're a drow, men are slightly more violent and female are
    // slightly more passive, with futa being unchanged.
    if (this.code == 'dark-elf') {
      if (gender == 'male')   { base -= 10; }
      if (gender == 'female') { base += 10; }
    } else {
      if (gender == 'male')   { base += 10; }
      if (gender == 'female') { base -= 10; }
    }

    if (base > 100)  { base = 100;  }
    if (base < -100) { base = -100; }

    return base;
  }

};

//   get isFurry() { return this.flags.indexOf('furry') >= 0; }
//   get isDemon() { return this.flags.indexOf('demon') >= 0; }
//   get isGoblin() { return this.flags.indexOf('goblin') >= 0; }

//   randomHeight(gender) {
//     let base =   this.bodyOptions.baseHeight || 1500;
//     let range =  this.bodyOptions.heightRange || 300;
//     let adjust = this.bodyOptions.maleHeightAdjust || 100;
//
//     let height = base + Random.upTo(range);
//     if (gender == 'male') { height += adjust; }
//     if (gender == 'futa') { height += adjust/2; }
//
//     return height;
//   }
// }
