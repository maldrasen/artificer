Location.build('alchemy-lab', {
  inTheName: 'in my alchemy lab',
  toTheName: 'to my alchemy lab',

  buildName: async () => {
    return `Alchemy Laboratory`;
  },

  buildDescription: async () => {
    return `TODO: Alchemy Laboratory Description`;
  },

  hasBed: async () => false,
  hasChair: async () => true,
  hasTable: async () => true,
});
