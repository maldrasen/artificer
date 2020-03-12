Location.build('master-suite', {
  inTheName: 'in my bedroom',
  toTheName: 'to my bedroom',

  buildName: async () => {
    return `Master Suite`;
  },

  buildDescription: async () => {
    return `TODO: Master Suite Description`;
  },

  hasBed: async () => true,
  hasChair: async () => true,
  hasTable: async () => true,
});
