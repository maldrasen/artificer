
Adjustment.build('anal-prolapse', {
  apply: (character) => { return new Promise(resolve => {
    character.getAnus().then(anus => {
      anus.prolapseLength = Random.roll(51,25); // 1-3 inches
      anus.save().then(resolve);
    });
  })}
});
