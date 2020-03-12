Location.build('stables', {
  inTheName: 'out in the stables',
  toTheName: 'out to the stables',

  buildName: async () => {
    return `Stables`;
  },

  buildDescription: async () => {
    return `TODO: Stables Description`;
  },

  hasBed: async () => false,
  hasChair: async () => false,
  hasTable: async () => false,
});
