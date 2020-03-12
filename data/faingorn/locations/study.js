Location.build('study', {
  inTheName: 'in my study',
  toTheName: 'to my study',

  buildName: async () => {
    return `Study`;
  },

  buildDescription: async () => {
    return `TODO: Study Description`;
  },

  hasBed: async () => false,
  hasChair: async () => true,
  hasTable: async () => true,
});
