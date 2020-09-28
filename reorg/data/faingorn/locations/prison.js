Location.build('prison', {
  inTheName: 'down in the prison',
  toTheName: 'down to the prison',

  buildName: () => {
    return `Prison`;
  },

  buildDescription: () => {
    return `TODO: Prison Description`;
  },

  hasBed: () => true,
  hasChair: () => true,
  hasTable: () => true,
});
