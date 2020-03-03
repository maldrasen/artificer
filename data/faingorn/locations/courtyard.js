Location.build('courtyard', {
  summonEvent: async () => {
    return 'summon-courtyard-default-start';
  },

  buildName: async () => {
    return `Ruined Courtyard`;
  },

  buildDescription: async () => {
    return `Though open to the sky, the keep's central courtyard is almost always in shadow, being surrounded by walls
      almost as high as the courtyard is wide. The courtyard grounds were manicured at one point, but time and neglect
      have taken their toll. What might have been a garden at one time is now completely covered with thick vines and
      brambles, and a big pile of rotting timber was probably the stables before it collapsed in on itself.`;
  },

});
