// === Adjustment Flags ===

static adjustmentFlags() {
  return [
    'big-pussy',
    'big-labia',
    'big-clit',
    'monster-pussy',
    'monster-labia',
    'monster-clit',
    'dog-pussy',
    'horse-pussy',
  ];
}

static canApplyFlag(flag) {
  return Pussy.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag) {
  if (flag == 'big-pussy')     { this.setWidth(this._width*2); }
  if (flag == 'big-labia')     { this.applyBigLabia();         }
  if (flag == 'big-clit')      { this.applyBigClit();          }
  if (flag == 'monster-pussy') { this.setWidth(this._width*3); }
  if (flag == 'monster-labia') { this.applyMonsterLabia();     }
  if (flag == 'monster-clit')  { this.applyMonsterClit();      }
  if (flag == 'dog-pussy')     { this.applyDogPussy();         }
  if (flag == 'horse-pussy')   { this.applyHorsePussy();       }
}

applyBigLabia() {
  let minimum = 40 + Random.upTo(10);
  let length = Math.round(this._innerLabiaLength * (1.5+Math.random()));
  this.setOuterLabiaSize(5);
  this.setInnerLabiaLength((length > minimum) ? length : minimum);
}

applyMonsterLabia() {
  let minimum = 80 + Random.upTo(20);
  let length = Math.round(this._innerLabiaLength * (3+Math.random()));
  this.setOuterLabiaSize(5);
  this.setInnerLabiaLength((length > minimum) ? length : minimum);
}

applyBigClit() {
  let length = Math.round(this._clitLength * (1.5+Math.random()));
  let width = Math.round(this._clitWidth * (1.5+Math.random()));
  this.setClitLength((length > 20) ? length : 20); // Min length is 20mm
  this.setClitWidth((width > 10) ? width : 10);    // Min width is 10mm
}

applyMonsterClit() {
  let length = Math.round(this._clitLength * (3+Math.random()));
  let width = Math.round(this._clitWidth * (3+Math.random()));
  this.setClitLength((length > 40) ? length : 40); // Min length is 40mm
  this.setClitWidth((width > 20) ? width : 20);    // Min width is 20mm
}

applyDogPussy() {
  this.setWidth(this._width*2);
  this.setOuterLabiaSize(5);
  this.setShape('dog');
}

applyHorsePussy() {
  this.setWidth(this._width*3);
  this.setOuterLabiaSize(5);
  this.setClitLength(Math.round(this._clitLength * (2+Math.random())));
  this.setClitWidth(Math.round(this._clitWidth * (2+Math.random())));
  this.setShape('horse');
}
