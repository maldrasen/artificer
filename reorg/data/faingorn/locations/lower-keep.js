Location.build('lower-keep', {
  inTheName: 'in the lower keep',
  toTheName: 'to the lower keep',

  buildName: () => {
    return `Lower Keep`;
  },

  buildDescription: () => {
    return `I've started referring to the keep's expansive first floor as the lower keep. The lower keep is perhaps as
      large as all the rooms that make up the keep's central tower put together. The lower keep consists of the great
      hall, the servent's quarters, an old smithy, and the barracks; all of which are arranged around the hexagonal
      central courtyard. For the time being though, I really have no use for all this extra space.`;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});