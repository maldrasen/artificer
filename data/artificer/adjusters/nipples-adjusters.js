
Adjustment.build('big-nipples', {
  apply: (character) => { return new Promise(resolve => {
    character.getNipples().then(nipples => {
      let width = nipples.width * (1.5+Math.random());
      nipples.width = (width > 50) ? width : 50; // Min width is 50mm
      nipples.save().then(resolve);
    });
  })}
});

Adjustment.build('long-nipples', {
  apply: (character) => { return new Promise(resolve => {
    character.getNipples().then(nipples => {
      let length = this.length * (1.5+Math.random());
      nipples.length = (length > 20) ? length : 20; // Min length is 20mm
      nipples.save().then(resolve);
    });
  })}
});

// TODO: This needs to also build an actual cock with nipple placement, once
//       we're really ready to implement nipples cocks.
Adjustment.build('dick-nipples', {
  apply: (character) => { return new Promise(resolve => {
    character.getNipples().then(nipples => {
      nipples.shape = 'cock';
      nipples.save().then(resolve);
    });
  })}
});

// TODO: Ditto with an actual pussy model for the nipple cunts.
Adjustment.build('nipple-cunts', {
  apply: (character) => { return new Promise(resolve => {
    character.getNipples().then(nipples => {
      nipples.shape = 'pussy';
      nipples.save().then(resolve);
    });
  })}
});
