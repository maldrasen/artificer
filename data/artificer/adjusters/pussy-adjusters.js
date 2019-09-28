
Adjustment.build('big-pussy', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      pussy.sizeClass = 'huge';
      pussy.sizeScale = 50;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-pussy', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      pussy.sizeClass = 'monster';
      pussy.sizeScale = 50;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('big-clit', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      let length = Math.round(pussy.clitLength * (1.5+Math.random()));
      let width = Math.round(pussy.clitWidth * (1.5+Math.random()));
      pussy.clitLength = (length > 20) ? length : 20;
      pussy.clitWidth =  (width > 10)  ? width : 10;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-clit', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      let length = Math.round(pussy.clitLength * (3+Math.random()));
      let width = Math.round(pussy.clitWidth * (3+Math.random()));
      pussy.clitLength = (length > 40) ? length : 40;
      pussy.clitWidth =  (width > 20)  ? width : 20;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('big-labia', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      let minimum = 40 + Random.upTo(10);
      let length = Math.round(pussy.innerLabiaLength * (1.5+Math.random()));
      pussy.innerLabiaLength = (length > minimum) ? length : minimum
      pussy.outerLabiaSize = 5;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-labia', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      let minimum = 80 + Random.upTo(20);
      let length = Math.round(pussy.innerLabiaLength * (3+Math.random()));
      pussy.innerLabiaLength = (length > minimum) ? length : minimum
      pussy.outerLabiaSize = 5;
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('dog-pussy', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      pussy.shape = 'dog';
      pussy.save().then(resolve);
    });
  })}
});

Adjustment.build('horse-pussy', {
  apply: (character) => { return new Promise(resolve => {
    character.getPussy().then(pussy => {
      pussy.shape = 'horse';
      pussy.save().then(resolve);
    });
  })}
});
