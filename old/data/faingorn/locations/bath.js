Location.build('bath', {
  inTheName: 'in the bath',
  toTheName: 'to the bath',

  buildName: () => {
    return `Bath`;
  },

  buildDescription: () => {
    return `TODO: Bath Description`;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
