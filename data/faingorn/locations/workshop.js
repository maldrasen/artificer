Location.build('workshop', {
  inTheName: 'in my workshop',
  inTheName: 'to my workshop',

  buildName: async () => {
    return `Workshop`;
  },

  buildDescription: async () => {
    return `TODO: Workshop Description`;
  },

  hasBed: async () => false,
  hasChair: async () => true,
  hasTable: async () => true,
});
