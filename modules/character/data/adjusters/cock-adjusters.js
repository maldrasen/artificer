
Adjustment.build('small-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    await (await character.getCock()).update({
      sizeClass: 'small',
      sizeScale: Random.between(25,75),
    });
  }
});

Adjustment.build('big-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    await (await character.getCock()).update({
      sizeClass: 'huge',
      sizeScale: Random.between(25,75),
    });
  }
});

Adjustment.build('monster-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    await (await character.getCock()).update({
      sizeClass: 'monster',
      sizeScale: Random.between(25,75),
    });
  }
});

Adjustment.build('big-balls', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    const cock = await character.getCock();
    await cock.update({
      ballsSizeFactor: (cock.ballsSizeFactor + 0.5)
    });
  }
});

Adjustment.build('monster-balls', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    const cock = await character.getCock();
    await cock.update({
      ballsSizeFactor: (cock.ballsSizeFactor + 1)
    });
  }
});

// If you grow a dog cock, a the knot width ratio needs to be set. If they
// already have a dog cock increase both the size and knot size.
Adjustment.build('dog-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    const cock = await character.getCock();

    if (cock.shape == 'dog') {
      await cock.update({
        knotWidthRatio: cock.knotWidthRatio + (Math.random()/5),
        sizeScale: (cock.sizeScale < 90) ? (cock.sizeScale + 10) : 100,
      });
    }

    if (cock.shape != 'dog') {
      await cock.update({
        shape: 'dog',
        knotWidthRatio: 1.3 + (Random.upTo(70)/100)
      });
    }
  }
});

// If the character already has a huge cock they get a bigger horse cock, and
// if the dick isn't a monster already it at least becomes huge.
Adjustment.build('horse-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    const cock = await character.getCock();

    if (cock.sizeClass == 'huge') {
      cock.sizeScale = (cock.sizeScale < 75) ? (cock.sizeScale + 25) : 100;
    }
    if (cock.sizeClass != 'monster') {
      cock.sizeClass = 'huge';
    }

    cock.shape = 'horse'
    await cock.save();
  }
});

Adjustment.build('multi-cock', {
  requires: ['minion(C).has-cock'],
  apply: async character => {
    const cock = await character.getCock();
    await cock.update({ count:cock.count+1 });
  }
});

// TODO: I need to also make an actual cock model to go along with the tongue
//       and set it's placement to tongue. Will implement cock tongue, nipple
//       cunts and all that shit together at once.
Adjustment.build('cock-tongue', {
  apply: async character => {
    const mouth = await character.getMouth();
    await mouth.update({ tongueShape:'cock' });
  }
});
