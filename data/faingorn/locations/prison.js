Location.build('prison', {
  inTheName: 'down in the prison',
  toTheName: 'down to the prison',

  buildName: async () => {
    return `Prison`;
  },

  buildDescription: async () => {
    return `TODO: Prison Description`;
  },

  hasBed: async () => true,
  hasChair: async () => true,
  hasTable: async () => true,
});
