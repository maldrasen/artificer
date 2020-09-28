Location.build('storeroom', {
  inTheName: 'in the storeroom',
  toTheName: 'to the storeroom',

  buildName: () => {
    return `Storeroom`;
  },

  buildDescription: () => {
    if (Flag.lookup('completed.rat-thief-caught')) {
      return `TODO: Storeroom After the thief is caught.`;
    }
    return `TODO: Storeroom Before the thief is caught.`;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
