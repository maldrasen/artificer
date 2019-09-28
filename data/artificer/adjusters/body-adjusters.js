
Adjustment.build('dark-skin', {});
Adjustment.build('thicc', {});
Adjustment.build('thin', {});

// === Adjustment Flags ===

// applyFlag(flag, adjustments) {
//   if (flag == 'high-bmi')      { this.applyBig(adjustments);    }
//   if (flag == 'low-bmi')       { this.applySmall(adjustments);  }
//   if (flag == 'short')         { this.applyShort(adjustments);  }
//   if (flag == 'tall')          { this.applyTall(adjustments);   }
//   if (flag == 'light-skin')    { this.applySkinColor(5);        }
//   if (flag == 'dark-skin')     { this.applySkinColor(1);        }
//   if (flag == 'red-hair')      { this.applyHairColor('red');    }
//   if (flag == 'purple-hair')   { this.applyHairColor('purple'); }
//   if (flag == 'white-hair')    { this.applyHairColor('white');  }
//   if (flag == 'red-scales')    { this.setScaleColor('red');     }
//   if (flag == 'gold-scales')   { this.setScaleColor('gold');    }
//   if (flag == 'green-scales')  { this.setScaleColor('green');   }
//   if (flag == 'blue-scales')   { this.setScaleColor('blue');    }
//   if (flag == 'purple-scales') { this.setScaleColor('purple');  }
//   if (flag == 'black-scales')  { this.setScaleColor('black');   }
//   if (flag == 'gray-scales')   { this.setScaleColor('gray');    }
//   if (flag == 'white-scales')  { this.setScaleColor('white');   }
// }
//
// applyBig(adjustments) {
//   console.log("Applying Big")
//   if (adjustments.indexOf('low-bmi') >= 0) { throw `Contradicting body adjustment, can't apply high-bmi`; }
//   this.setBMI((adjustments.indexOf('high-bmi') < 0) ? 35 : 40);
// }
//
// applySmall(adjustments) {
//   console.log("Applying Small")
//   if (adjustments.indexOf('high-bmi') >= 0) { throw `Contradicting body adjustment, can't apply low-bmi`; }
//   this.setBMI((adjustments.indexOf('low-bmi') < 0) ? 15 : 12);
// }
//
// applyShort(adjustments) {
//   if (adjustments.indexOf('tall') >= 0) {
//     throw `Contradicting body adjustment, can't apply short`;
//   }
//
//   let height = BodyFactory.randomHeight(this.getCharacter(),'min');
//   let bmi = this.bmi;
//
//   if (adjustments.indexOf('short') >= 0) {
//     height = Math.round(height*0.75);
//   }
//
//   this.setHeight(height);
//   this.setBMI(bmi);
// }
//
// applyTall(adjustments) {
//   if (adjustments.indexOf('short') >= 0) {
//     throw `Contradicting body adjustment, can't apply tall`;
//   }
//
//   let height = BodyFactory.randomHeight(this.getCharacter(),'max');
//   let bmi = this.bmi;
//
//   if (adjustments.indexOf('tall') >= 0) {
//     height = Math.round(height*1.25);
//   }
//
//   this.setHeight(height);
//   this.setBMI(bmi);
// }
//
// applySkinColor(shade) {
//   if (this._skinColor) { this.setSkinShade(shade); }
//   if (this._furColor) { this.setFurShade(shade); }
// }
//
// applyHairColor(color) {
//   if (this._hairColor) { this.setHairColor(color); }
//   if (this._furColor) { this.setFurColor(color); }
// }
