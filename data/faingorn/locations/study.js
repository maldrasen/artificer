Location.build('study', {
  inTheName: 'in my study',
  toTheName: 'to my study',

  buildName: () => {
    return `Study`;
  },

  buildDescription: () => {
    return `TODO: Study Description`;
  },

  hasBed: () => false,
  hasChair: () => true,
  hasTable: () => true,
});
