// === Adjustment Flags ===

static adjustmentFlags() {
  return [
    'small-cock',
    'big-cock',
    'monster-cock',
    'horse-cock',
    'dog-cock',
    'multi-cock'
  ];
}

static canApplyFlag(flag) {
  return Cock.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag) {
  if (flag == 'small-cock')   { this.applySmallCock();   }
  if (flag == 'big-cock')     { this.applyBigCock();     }
  if (flag == 'monster-cock') { this.applyMonsterCock(); }
  if (flag == 'horse-cock')   { this.applyHorseCock();   }
  if (flag == 'dog-cock')     { this.applyDogCock();     }
  if (flag == 'multi-cock')   { this.applyMultiCock();   }
}

applySmallCock() { this.setLength(Math.round(this.length/(1.5+Math.random()))); }

applyBigCock() {
  this.setLength(Math.round(this.length*(1.5+Math.random())));
  this.getCharacter().getBalls().applyBigBalls();
}

applyMonsterCock() {
  this.setLength(Math.round(this.length*(2.5+Math.random())));
  this.getCharacter().getBalls().applyMonsterBalls();
}

applyMultiCock() {
  this.setCount(this.count + 1);
}

// If you grow a horse cock, it should increase the length to at least as
// large as an average Equian. If the cock is already that long or longer
// though, no adjustment is nessessary. If they already have a horse cock
// just increase its size.
applyHorseCock() {
  if (this.shape == 'horse') {
    return this.applyBigCock();
  }

  this.setShape('horse');
  let horseLength = CockFactory.randomCockLength(Race.lookup('equian'));
  if (horseLength > this.length) {
    this.setLength(horseLength);
  }
}

// If you grow a dog cock, a the knot width ratio needs to be set. If they
// already have a dog cock increase both the size and knot size.
applyDogCock() {
  if (this.shape == 'dog') {
    this.applyBigCock();
    this.setKnotWidthRatio(this._knotWidthRatio*(1+Math.random()))
    return;
  }

  this.setShape('dog');
  if (this.knotWidthRatio == null) {
    this.setKnotWidthRatio((Random.upTo(5)+10)/10);
  }
}
