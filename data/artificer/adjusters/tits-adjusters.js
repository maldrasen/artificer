
Adjustment.build('small-tits', {
  apply: (character) => { return new Promise(resolve => {
    character.getTits().then(tits => {
      tits.sizeClass = 'tiny';
      tits.sizeScale = 0;
      tits.shape = 'flat'
      tits.save().then(resolve);
    });
  })}
});

Adjustment.build('big-tits', {
  apply: (character) => { return new Promise(resolve => {
    character.getTits().then(tits => {
      growTits(tits,'huge')
      tits.save().then(resolve);
    });
  })}
});

Adjustment.build('monster-tits', {
  apply: (character) => { return new Promise(resolve => {
    character.getTits().then(tits => {
      growTits(tits,'monster')
      tits.save().then(resolve);
    });
  })}
});

function growTits(tits, size) {
  tits.sizeClass = size;
  tits.sizeScale = 50;
  if (['round','dangling','bell'].indexOf(tits.shape) < 0) {
    this.shape = Random.fromFrequencyMap({ round:50, dangling:100, bell:80 });
  }
}
