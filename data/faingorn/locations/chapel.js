Location.build('chapel', {
  inTheName: 'in the chapel',
  toTheName: 'to the chapel',

  buildName: () => {
    return `Chapel`;
  },

  buildDescription: () => {
    return `TODO: Describe Chapel.`;
  },

  hasBed: () => false,
  hasChair: () => true,
  hasTable: () => false,
});
