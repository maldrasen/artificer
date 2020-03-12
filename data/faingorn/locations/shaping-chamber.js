Location.build('shaping-chamber', {
  inTheName: 'in the shaping chamber',
  toTheName: 'to the shaping chamber',

  buildName: async () => {
    return `Shaping Chamber`;
  },

  buildDescription: async () => {
    return `TODO: Describe Shaping Chamber`;
  },

  hasBed: async () => false,
  hasChair: async () => true,
  hasTable: async () => true,
});
