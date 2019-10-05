Location.build('courtyard', {
  name: 'Courtyard',

  buildName: async () => {
    // When nothing has been done
    return `Ruined Courtyard`;
  },

  buildDescription: async () => {
    // When nothing has been done
    return `The courtyard is large but strewn with rubble and choaked with tall weeds. This was no doubt an impressive
      keep at one point, but time and neglect have both taken their toll. For the moment I've set up a small camp. It's
      little more than a fire pit ringed with small stones, but at least it's sheltered from the wind.`;
  }
});
