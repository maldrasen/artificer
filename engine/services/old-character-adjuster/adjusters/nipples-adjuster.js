// === Adjustment Flags ===

static adjustmentFlags() {
  return [
    'big-nipples',
    'long-nipples',
    'dick-nipples',
    'nipple-cunts'
  ];
}

static canApplyFlag(flag) {
  return Nipples.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag) {
  if (flag == 'big-nipples')  { this.applyBigNipples();  }
  if (flag == 'long-nipples') { this.applyLongNipples(); }
  if (flag == 'dick-nipples') { this.applyDickNipples(); }
  if (flag == 'nipple-cunts') { this.applyNippleCunts(); }
}

applyBigNipples()  {
  let width = this._width * (1.5+Math.random());
  this.setWidth((width > 5) ? width : 5); // Min width is 5cm
}

applyLongNipples() {
  let length = this._length * (1.5+Math.random());
  this.setLength((length > 2) ? length : 2); // Min length is 2cm
}

applyDickNipples() {
  this.setShape('cock');
  this.getCharacter().addCock({ placement:'nipple' });
}

applyNippleCunts() {
  this.setShape('pussy');
  this.getCharacter().addPussy({ placement:'nipple' });
}
