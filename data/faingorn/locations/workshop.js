Location.build('workshop', {
  inTheName: 'in my workshop',
  inTheName: 'to my workshop',

  buildName: () => {
    return `Workshop`;
  },

  buildDescription: () => {
    return `TODO: Workshop Description`;
  },

  hasBed: () => false,
  hasChair: () => true,
  hasTable: () => true,
});
