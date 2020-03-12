Location.build('foundry', {
  inTheName: 'down in the foundry',
  toTheName: 'down to the foundry',

  buildName: async () => {
    return `Goblin Foundry`;
  },

  buildDescription: async () => {
    return `TODO: Describe Goblin Foundry.`;
  },

  hasBed: async () => false,
  hasChair: async () => false,
  hasTable: async () => false,
});
