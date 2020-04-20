Location.build('shaping-chamber', {
  inTheName: 'in the shaping chamber',
  toTheName: 'to the shaping chamber',

  buildName: () => {
    return `Shaping Chamber`;
  },

  buildDescription: () => {
    return `TODO: Describe Shaping Chamber`;
  },

  hasBed: () => false,
  hasChair: () => true,
  hasTable: () => true,
});
