
Adjustment.build('big-balls', { });
Adjustment.build('big-clit', { });
Adjustment.build('big-cock', { });
Adjustment.build('big-labia', { });
Adjustment.build('big-nipples', { });
Adjustment.build('big-pussy', { });
Adjustment.build('big-tits', { });
Adjustment.build('monster-balls', { });
Adjustment.build('monster-clit', { });
Adjustment.build('monster-cock', { });
Adjustment.build('monster-labia', { });
Adjustment.build('monster-pussy', { });
Adjustment.build('monster-tits', { });
Adjustment.build('small-tits', { });

// applyBigBalls() { this.setWidth(Math.round(this._width*(1.5+Math.random()))); }
// applyMonsterBalls() { this.setWidth(Math.round(this._width*(3+Math.random()))); }

// applySmallCock() { this.setLength(Math.round(this.length/(1.5+Math.random()))); }
//
// applyBigCock() {
//   this.setLength(Math.round(this.length*(1.5+Math.random())));
//   this.getCharacter().getBalls().applyBigBalls();
// }
//
// applyMonsterCock() {
//   this.setLength(Math.round(this.length*(2.5+Math.random())));
//   this.getCharacter().getBalls().applyMonsterBalls();
// }
//
// applyBigNipples()  {
//   let width = this._width * (1.5+Math.random());
//   this.setWidth((width > 5) ? width : 5); // Min width is 5cm
// }
//
// applyLongNipples() {
//   let length = this._length * (1.5+Math.random());
//   this.setLength((length > 2) ? length : 2); // Min length is 2cm
// }
//
// applyBigLabia() {
//   let minimum = 40 + Random.upTo(10);
//   let length = Math.round(this._innerLabiaLength * (1.5+Math.random()));
//   this.setOuterLabiaSize(5);
//   this.setInnerLabiaLength((length > minimum) ? length : minimum);
// }
//
// applyMonsterLabia() {
//   let minimum = 80 + Random.upTo(20);
//   let length = Math.round(this._innerLabiaLength * (3+Math.random()));
//   this.setOuterLabiaSize(5);
//   this.setInnerLabiaLength((length > minimum) ? length : minimum);
// }
//
// applyBigClit() {
//   let length = Math.round(this._clitLength * (1.5+Math.random()));
//   let width = Math.round(this._clitWidth * (1.5+Math.random()));
//   this.setClitLength((length > 20) ? length : 20); // Min length is 20mm
//   this.setClitWidth((width > 10) ? width : 10);    // Min width is 10mm
// }
//
// applyMonsterClit() {
//   let length = Math.round(this._clitLength * (3+Math.random()));
//   let width = Math.round(this._clitWidth * (3+Math.random()));
//   this.setClitLength((length > 40) ? length : 40); // Min length is 40mm
//   this.setClitWidth((width > 20) ? width : 20);    // Min width is 20mm
// }



// applySmallTits(adjustments) {
//   if (adjustments.indexOf('big-tits') >= 0) { throw `Contradicting tits adjustment, can't apply small-tits` }
//   if (adjustments.indexOf('monster-tits') >= 0) { throw `Contradicting tits adjustment, can't apply small-tits` }
//
//   let sizeClass = this.sizeClass;
//   this.setSize((adjustments.indexOf('small-tits') < 0) ? Random.tightlyBound(25,25) : 0);
//   if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
// }
//
// applyBigTits(adjustments) {
//   if (adjustments.indexOf('small-tits') >= 0) { throw `Contradicting tits adjustment, can't apply big-tits` }
//
//   let sizeClass = this.sizeClass;
//   let size = Math.round(this._size*(1.5+Math.random()));
//   let minimum = 500 + Random.upTo(100);
//
//   this.setSize((size > minimum) ? size : minimum);
//
//   if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
// }
//
// applyMonsterTits(adjustments) {
//   if (adjustments.indexOf('small-tits') >= 0) { throw `Contradicting tits adjustment, can't apply monster-tits` }
//
//   let sizeClass = this.sizeClass;
//   let size = Math.round(this._size*(3+Math.random()));
//   let minimum = 1000 + Random.upTo(200);
//
//   this.setSize((size > minimum) ? size : minimum);
//
//   if (sizeClass != this.sizeClass) { TitsFactory.randomizeShape(this); }
// }
