Location.build('great-hall', {
  inTheName: 'in the great hall',
  toTheName: 'to the great hall',

  buildName: async () => {
    return `Great Hall`;
  },

  buildDescription: async () => {
    return `The keep's great hall is the largest room in the keep and at one point probably served as the central
      gathering area, feast hall, and the court of whoever it was that ruled here. The hall has somehow survived the
      worst of the ravages of time and much of the hall's furniture, a few large tables and a dozen or so chairs, are
      still usable.`;
  },

  summonActions: async () => {
    return SummonAction.allStandardActions();
  },

  // This is only true until the player moves their bedroom up into the master
  // suite. At that point I'll need to read a flag to determine if a bed is
  // still here or not.
  hasBed: async () => true,
  hasChair: async () => true,
  hasTable: async () => true,
});
