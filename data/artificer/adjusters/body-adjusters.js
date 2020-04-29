
// --- Skin Shade ---

Adjustment.build('dark-skin', {
  apply: async character => { await applySkinShade(character,1); }
});

Adjustment.build('light-skin', {
  apply: async character => { await applySkinShade(character,5); }
});

// --- Hair Color ---

Adjustment.build('red-hair', {
  apply: async character => { await applyHairColor(character,'red'); }
});

Adjustment.build('purple-hair', {
  apply: async character => { await applyHairColor(character,'purple'); }
});

Adjustment.build('white-hair', {
  apply: async character => { await applyHairColor(character,'white'); }
});

// --- Scale Color ---

Adjustment.build('black-scales', {
  apply: async character => { await applyScaleColor(character,'black'); }
});

Adjustment.build('blue-scales', {
  apply: async character => { await applyScaleColor(character,'blue'); }
});

Adjustment.build('gold-scales', {
  apply: async character => { await applyScaleColor(character,'gold'); }
});

Adjustment.build('gray-scales', {
  apply: async character => { await applyScaleColor(character,'gray'); }
});

Adjustment.build('green-scales', {
  apply: async character => { await applyScaleColor(character,'green'); }
});

Adjustment.build('purple-scales', {
  apply: async character => { await applyScaleColor(character,'purple'); }
});

Adjustment.build('red-scales', {
  apply: async character => { await applyScaleColor(character,'red'); }
});

Adjustment.build('white-scales', {
  apply: async character => { await applyScaleColor(character,'white'); }
});

/// --- Eye Color ---

Adjustment.build('amber-eyes', {
  apply: async character => { await applyEyeColor(character,'amber'); }
});

Adjustment.build('black-eyes', {
  apply: async character => { await applyEyeColor(character,'black'); }
});

Adjustment.build('gray-eyes', {
  apply: async character => { await applyEyeColor(character,'gray'); }
});

// --- Body Type ---
// TODO: These Adjustments will change the bodytype once we implement that.
Adjustment.build('thicc', { apply: async character => {} });
Adjustment.build('thin', { apply: async character => {} });

Adjustment.build('short', {
  apply: async character => {
    const body = await character.getBody()
    let height = character.species.bodyOptions.baseHeight || 1500;
    let adjust = character.species.bodyOptions.maleHeightAdjust || 100;

    if (character.gender.code == 'male') { height += adjust; }
    if (character.gender.code == 'futa') { height += adjust/2; }

    await body.update({ height: Math.round(height * 0.9) });
  }
});

Adjustment.build('tall', {
  apply: async character => {
    const body = await character.getBody();
    let height = character.species.bodyOptions.baseHeight || 1500;
    let range = character.species.bodyOptions.heightRange || 300;
    let adjust = character.species.bodyOptions.maleHeightAdjust || 100;

    if (character.gender.code == 'male') { height += adjust; }
    if (character.gender.code == 'futa') { height += adjust/2; }

    await body.update({ height: Math.round((height+range) * 1.1) });
  }
});

// --- Adjuster Functions ---

async function applySkinShade(character, shade) {
  const body = await character.getBody()
  if (body.skinShade) { body.skinShade = shade; }
  if (body.furShade)  { body.furShade = shade;  }
  await body.save();
}

async function applyHairColor(character, color) {
  const body = await character.getBody()
  if (body.hairColor) { body.hairColor = color; }
  if (body.furColor)  { body.furColor = color;  }
  await body.save();
}

async function applyScaleColor(character, color) {
  const body = await character.getBody()
  await body.update({ scaleColor:color });
}

async function applyEyeColor(character, color) {
  const body = await character.getBody()
  await body.update({ eyeColor:color });
}
