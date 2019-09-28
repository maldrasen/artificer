
Adjustment.build('strong', {
  apply: (character) => { return new Promise(resolve => {
    let attribute = Math.round(character.physical*(1.5+Math.random()));
    character.physical = (attribute < 30) ? 30 : attribute;
    character.save().then(resolve);
  })}
});

Adjustment.build('weak', {
  apply: (character) => { return new Promise(resolve => {
    character.physical = Math.round(character.physical/(1.5+Math.random()));
    character.save().then(resolve);
  })}
});

Adjustment.build('smart', {
  apply: (character) => { return new Promise(resolve => {
    let attribute = Math.round(character.mental*(1.5+Math.random()));
    character.mental = (attribute < 30) ? 30 : attribute;
    character.save().then(resolve);
  })}
});

Adjustment.build('stupid', {
  apply: (character) => { return new Promise(resolve => {
    character.mental = Math.round(character.mental/(1.5+Math.random()));
    character.save().then(resolve);
  })}
});

Adjustment.build('beautiful', {
  apply: (character) => { return new Promise(resolve => {
    let attribute = Math.round(character.personal*(1.5+Math.random()));
    character.personal = (attribute < 30) ? 30 : attribute;
    character.save().then(resolve);
  })}
});

Adjustment.build('ugly', {
  apply: (character) => { return new Promise(resolve => {
    character.personal = Math.round(character.personal/(1.5+Math.random()));
    character.save().then(resolve);
  })}
});

Adjustment.build('magical', {
  apply: (character) => { return new Promise(resolve => {
    let attribute = Math.round(character.magical*(1.5+Math.random()));
    character.magical = (attribute < 30) ? 30 : attribute;
    character.save().then(resolve);
  })}
});
