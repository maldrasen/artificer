Location.build('stables', {
  inTheName: 'out in the stables',
  toTheName: 'out to the stables',

  buildName: () => {
    return `Stables`;
  },

  buildDescription: () => {
    return `TODO: Stables Description`;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
