// === Adjustment Flags ===

static adjustmentFlags() {
  return [
    'no-balls',
    'big-balls',
    'monster-balls',
    'extra-cum',
    'super-cum',
  ];
}

static canApplyFlag(flag) {
  return Balls.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag) {
  if (flag == 'no-balls') { this.applyNoBalls(); }
  if (flag == 'big-balls') { this.applyBigBalls(); }
  if (flag == 'monster-balls') { this.applyMonsterBalls(); }
  if (flag == 'extra-cum') { this.applyExtraCum(); }
  if (flag == 'super-cum') { this.applySuperCum(); }
}

applyNoBalls() { this.setInternal(true); }
applyBigBalls() { this.setWidth(Math.round(this._width*(1.5+Math.random()))); }
applyMonsterBalls() { this.setWidth(Math.round(this._width*(3+Math.random()))); }
applyExtraCum() { this.setProductionMultiplier(this._productionMultiplier*(2+Math.random())); }
applySuperCum() { this.setProductionMultiplier(this._productionMultiplier*(4+Math.random())); }
}
