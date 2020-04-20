Location.build('cellars', {
  inTheName: 'down in the cellars',
  toTheName: 'down to the cellars',

  buildName: () => {
    return `Cellars`;
  },

  buildDescription: () => {
    return `The keep's cellars are composed of a dozen or so small chambers, arranged haphazardly and cut directly from
      the bedrock on which the keep sits. Supposedly there's an entrance somewhere in these twisted passages that lead
      even further down, into the warrens where the Deep Hole tribe dwells. I haven't investigated these cellars overly
      much yet, just enough to confirm that any supplies down here have either already been scavenged or have rotted
      away.`;
  },

  summonActions: async () => {
    return SummonAction.allStandardActions();
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
