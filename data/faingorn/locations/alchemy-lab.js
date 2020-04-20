Location.build('alchemy-lab', {
  inTheName: 'in my alchemy lab',
  toTheName: 'to my alchemy lab',

  buildName: () => {
    return `Alchemy Laboratory`;
  },

  buildDescription: () => {
    return `TODO: Alchemy Laboratory Description`;
  },

  hasBed: () => false,
  hasChair: () => true,
  hasTable: () => true,
});
