
Adjustment.build('strong', {
  apply: async character => {
    await character.update({
      physical: Math.max(30, Math.round(character.physical*(1.5+Math.random())))
    });
  }
});

Adjustment.build('weak', {
  apply: async character => {
    await character.update({
      physical: Math.round(character.physical/(1.5+Math.random()))
    });
  }
});

Adjustment.build('smart', {
  apply: async character => {
    await character.update({
      mental: Math.max(30, Math.round(character.mental*(1.5+Math.random())))
    });
  }
});

Adjustment.build('stupid', {
  apply: async character => {
    await character.update({
      mental: Math.round(character.mental/(1.5+Math.random()))
    });
  }
});

Adjustment.build('beautiful', {
  apply: async character => {
    await character.update({
      personal: Math.max(30, Math.round(character.personal*(1.5+Math.random())))
    });
  }
});

Adjustment.build('ugly', {
  apply: async character => {
    await character.update({
      personal: Math.round(character.personal/(1.5+Math.random()))
    });
  }
});

Adjustment.build('magical', {
  apply: async character => {
    await character.update({
      magical: Math.max(10, Math.round(character.magical*(1.5+Math.random())))
    });
  }
});
