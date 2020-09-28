
Adjustment.build('big-pussy', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    await (await character.getPussy()).update({
      sizeClass: 'huge',
      sizeScale: Random.between(25,75),
    });
  }
});

Adjustment.build('monster-pussy', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    await (await character.getPussy()).update({
      sizeClass: 'monster',
      sizeScale: Random.between(25,75),
    });
  }
});

Adjustment.build('big-clit', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    const pussy = await character.getPussy();
    await pussy.update({
      clitLength: Math.max(20,Math.round(pussy.clitLength * (1.5+Math.random()))),
      clitWidth: Math.max(10,Math.round(pussy.clitWidth * (1.5+Math.random()))),
    });
  }
});

Adjustment.build('monster-clit', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    const pussy = await character.getPussy();
    await pussy.update({
      clitLength: Math.max(40,Math.round(pussy.clitLength * (3+Math.random()))),
      clitWidth: Math.max(20,Math.round(pussy.clitWidth * (3+Math.random()))),
    });
  }
});

Adjustment.build('big-labia', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    const pussy = await character.getPussy();

    const length = Math.max(
      Random.between(40,50),
      Math.round(pussy.innerLabiaLength * (1.5+Math.random())));

    await pussy.update({
      innerLabiaLength: length,
      outerLabiaSize: 5,
    });
  }
});

Adjustment.build('monster-labia', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    const pussy = await character.getPussy();

    const length = Math.max(
      Random.between(80,100),
      Math.round(pussy.innerLabiaLength * (3+Math.random())));

    await pussy.update({
      innerLabiaLength: length,
      outerLabiaSize: 5,
    });
  }
});

Adjustment.build('dog-pussy', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    await (await character.getPussy()).update({ shape:'dog' });
  }
});

Adjustment.build('horse-pussy', {
  requires: ['minion(C).has-pussy'],
  apply: async character => {
    await (await character.getPussy()).update({ shape:'horse' });
  }
});
