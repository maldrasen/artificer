Location.build('great-hall', {

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
    return [];
  },

});
