
// --- Skin Shade ---

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

// --- Hair Color ---

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

// --- Scale Color ---

  Adjustment.build('black-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'black';
    character.save().then(resolve)
  })}
});

Adjustment.build('blue-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'blue';
    character.save().then(resolve)
  })}
});

Adjustment.build('gold-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'gold';
    character.save().then(resolve)
  })}
});

Adjustment.build('gray-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'gray';
    character.save().then(resolve)
  })}
});

Adjustment.build('green-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'green';
    character.save().then(resolve)
  })}
});

Adjustment.build('purple-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'purple';
    character.save().then(resolve)
  })}
});

Adjustment.build('red-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'red';
    character.save().then(resolve)
  })}
});

Adjustment.build('white-scales', {
  apply: (character) => { return new Promise(resolve => {
    character.scaleColor = 'white';
    character.save().then(resolve)
  })}
});

/// --- Eye Color ---

Adjustment.build('amber-eyes', {
  apply: (character) => { return new Promise(resolve => {
    character.eyeColor = 'amber';
    character.save().then(resolve)
  })}
});

Adjustment.build('black-eyes', {
  apply: (character) => { return new Promise(resolve => {
    character.eyeColor = 'black';
    character.save().then(resolve)
  })}
});

Adjustment.build('gray-eyes', {
  apply: (character) => { return new Promise(resolve => {
    character.eyeColor = 'gray';
    character.save().then(resolve)
  })}
});

// --- Body Type ---
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

// TODO: These base values are copied out of the species class. I suppose they
//       should be made into functions or constants, but I don't think I use
//       them often.
Adjustment.build('short', {
  apply: (character) => { return new Promise(resolve => {
    character.getBody().then(body => {
      let height = character.species.bodyOptions.baseHeight || 1500;
      let adjust = character.species.bodyOptions.maleHeightAdjust || 100;

      if (character.gender.code == 'male') { height += adjust; }
      if (character.gender.code == 'futa') { height += adjust/2; }

      body.height = Math.round(height * 0.9);
      body.save().then(resolve);
    })
  })}
});

Adjustment.build('tall', {
  apply: (character) => { return new Promise(resolve => {
    character.getBody().then(body => {
      let height = character.species.bodyOptions.baseHeight || 1500;
      let range = character.species.bodyOptions.heightRange || 300;
      let adjust = character.species.bodyOptions.maleHeightAdjust || 100;

      if (character.gender.code == 'male') { height += adjust; }
      if (character.gender.code == 'futa') { height += adjust/2; }

      body.height = Math.round((height+range) * 1.1);
      body.save().then(resolve);
    })
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
