Location.build('chapel', {
  inTheName: 'in the chapel',
  toTheName: 'to the chapel',

  buildName: async () => {
    return `Chapel`;
  },

  buildDescription: async () => {
    return `TODO: Describe Chapel.`;
  },

  hasBed: async () => false,
  hasChair: async () => true,
  hasTable: async () => false,
});
