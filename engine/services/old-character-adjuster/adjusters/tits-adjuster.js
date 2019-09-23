// === Adjustment Flags ===

// Lactation should also increase nipple size. We'll probably eventually move
// this out of the factory once there's a more direct way to make a character
// start lactating. This should do for now though.
function getProduction(species) {
  return 0.5 + (Random.upTo(100)/100) + (ObjectUtility.fetch(species, 'bodyOptions', 'tits', 'extraProduction') || 0);
}

// Randomly induce lactation in 2.5% of random characters and in 20% of
// minotaurs because cows.
if (params.productionMultiplier == null) {
  if (Random.upTo(40)==0 || (character.species.code=='minotaur' && Random.upTo(5)==0)) {
    params.productionMultiplier = getProduction(species);
  }
}




static adjustmentFlags() {
  return [
    'small-tits',
    'big-tits',
    'monster-tits',
  ];
}

static canApplyFlag(flag) {
  return Tits.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag, adjustments) {
  if (flag == 'small-tits')   { this.applySmallTits(adjustments);   }
  if (flag == 'big-tits')     { this.applyBigTits(adjustments);     }
  if (flag == 'monster-tits') { this.applyMonsterTits(adjustments); }
}

applySmallTits(adjustments) {
  if (adjustments.indexOf('big-tits') >= 0) { throw `Contradicting tits adjustment, can't apply small-tits` }
  if (adjustments.indexOf('monster-tits') >= 0) { throw `Contradicting tits adjustment, can't apply small-tits` }

  let sizeClass = this.sizeClass;
  this.setSize((adjustments.indexOf('small-tits') < 0) ? Random.tightlyBound(25,25) : 0);
  if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
}

applyBigTits(adjustments) {
  if (adjustments.indexOf('small-tits') >= 0) { throw `Contradicting tits adjustment, can't apply big-tits` }

  let sizeClass = this.sizeClass;
  let size = Math.round(this._size*(1.5+Math.random()));
  let minimum = 500 + Random.upTo(100);

  this.setSize((size > minimum) ? size : minimum);

  if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
}

applyMonsterTits(adjustments) {
  if (adjustments.indexOf('small-tits') >= 0) { throw `Contradicting tits adjustment, can't apply monster-tits` }

  let sizeClass = this.sizeClass;
  let size = Math.round(this._size*(3+Math.random()));
  let minimum = 1000 + Random.upTo(200);

  this.setSize((size > minimum) ? size : minimum);

  if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
}
