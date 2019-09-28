
Adjustment.build('small-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.sizeClass = 'small';
      cock.sizeScale = 50;
      cock.save().then(resolve);
    });
  })}
});

Adjustment.build('big-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.sizeClass = 'huge';
      cock.sizeScale = 50;
      cock.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.sizeClass = 'monster';
      cock.sizeScale = 50;
      cock.save().then(resolve);
    });
  })}
});

Adjustment.build('big-balls', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.ballsSizeFactor = cock.ballsSizeFactor + 0.5;
      cock.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-balls', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.ballsSizeFactor = cock.ballsSizeFactor + 1;
      cock.save().then(resolve);
    });
  })}
});

// If you grow a dog cock, a the knot width ratio needs to be set. If they
// already have a dog cock increase both the size and knot size.
Adjustment.build('dog-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      if (cock.shape == 'dog') {
        cock.knotWidthRatio = cock.knotWidthRatio + (Math.random()/5);
        cock.sizeScale = (cock.sizeScale < 90) ? (cock.sizeScale + 10) : 100;
      }
      if (cock.shape != 'dog') {
        cock.shape = 'dog'
        cock.knotWidthRatio = 1.3 + (Random.upTo(70)/100);
      }
      cock.save().then(resolve);
    });
  })}
});

// If the character already has a huge cock they get a bigger horse cock, and
// if the dick isn't a monster already it at least becomes huge.
Adjustment.build('horse-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      if (cock.sizeClass == 'huge') {
        cock.sizeScale = (cock.sizeScale < 75) ? (cock.sizeScale + 25) : 100;
      }
      if (cock.sizeClass != 'monster') {
        cock.sizeClass = 'huge';
      }
      cock.shape = 'horse'
      cock.save().then(resolve);
    });
  })}
});

Adjustment.build('multi-cock', {
  apply: (character) => { return new Promise(resolve => {
    character.getCock().then(cock => {
      cock.count = cock.count + 1;
      cock.save().then(resolve);
    });
  })}
});
