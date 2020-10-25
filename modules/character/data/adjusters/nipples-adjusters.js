
Adjustment.build('big-nipples', {
  requires: ['minion(C).has-tits'],
  apply: async character => {
    const nipples = await character.getNipples();
    await nipples.update({
      width: Math.max(50, (nipples.width * (1.5+Math.random())))
    });
  }
});

Adjustment.build('long-nipples', {
  requires: ['minion(C).has-tits'],
  apply: async character => {
    const nipples = await character.getNipples();
    await nipples.update({
      length: Math.max(20, (nipples.length * (1.5+Math.random())))
    });
  }
});

// TODO: This needs to also build an actual cock with nipple placement, once
//       we're really ready to implement nipples cocks.
Adjustment.build('dick-nipples', {
  requires: ['minion(C).has-tits'],
  apply: async character => {
    const nipples = await character.getNipples();
    await nipples.update({ shape:'cock' });
  }
});

// TODO: Ditto with an actual pussy model for the nipple cunts.
Adjustment.build('nipple-cunts', {
  requires: ['minion(C).has-tits'],
  apply: async character => {
    const nipples = await character.getNipples();
    await nipples.update({ shape:'pussy' });
  }
});
