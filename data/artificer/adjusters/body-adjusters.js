
Adjustment.build('dark-skin', {
  apply: (character) => { return new Promise(resolve => {
    applySkinShade(character,1).then(resolve);
  })}
});

Adjustment.build('light-skin', {
  apply: (character) => { return new Promise(resolve => {
    applySkinShade(character,5).then(resolve);
  })}
});

Adjustment.build('red-hair', {
  apply: (character) => { return new Promise(resolve => {
    applyHairColor(character,'red').then(resolve);
  })}
});

Adjustment.build('purple-hair', {
  apply: (character) => { return new Promise(resolve => {
    applyHairColor(character,'purple').then(resolve);
  })}
});

Adjustment.build('white-hair', {
  apply: (character) => { return new Promise(resolve => {
    applyHairColor(character,'white').then(resolve);
  })}
});

// TODO: These Adjustments will change the bodytype once we implement that.

Adjustment.build('thicc', {
  apply: (character) => { return new Promise(resolve => {
    resolve();
  })}
});

Adjustment.build('thin', {
  apply: (character) => { return new Promise(resolve => {
    resolve();
  })}
});

// --- Adjuster Functions ---

function applySkinShade(character, shade) {
  return new Promise(resolve => {
    character.getBody().then(body => {
      if (body.skinShade) { body.skinShade = shade; }
      if (body.furShade)  { body.furShade = shade;  }
      body.save().then(resolve);
    })
  });
}

function applyHairColor(character, color) {
  return new Promise(resolve => {
    character.getBody().then(body => {
      if (body.hairColor) { body.hairColor = color; }
      if (body.furColor)  { body.furColor = color;  }
      body.save().then(resolve);
    })
  });
}

// TODO
//   if (flag == 'short')         { this.applyShort(adjustments);  }
//   if (flag == 'tall')          { this.applyTall(adjustments);   }

//   if (flag == 'red-scales')    { this.setScaleColor('red');     }
//   if (flag == 'gold-scales')   { this.setScaleColor('gold');    }
//   if (flag == 'green-scales')  { this.setScaleColor('green');   }
//   if (flag == 'blue-scales')   { this.setScaleColor('blue');    }
//   if (flag == 'purple-scales') { this.setScaleColor('purple');  }
//   if (flag == 'black-scales')  { this.setScaleColor('black');   }
//   if (flag == 'gray-scales')   { this.setScaleColor('gray');    }
//   if (flag == 'white-scales')  { this.setScaleColor('white');   }
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
