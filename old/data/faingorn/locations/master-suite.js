Location.build('master-suite', {
  inTheName: 'in my bedroom',
  toTheName: 'to my bedroom',

  buildName: () => {
    return `Master Suite`;
  },

  buildDescription: () => {
    return `TODO: Master Suite Description`;
  },

  hasBed: () => true,
  hasChair: () => true,
  hasTable: () => true,
});
