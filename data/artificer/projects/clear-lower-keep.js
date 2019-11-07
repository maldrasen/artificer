Project.build('clear-lower-keep', {
  name: `Clear the Keep's Lower Floors`,
  workingName: `clearing the keep's lower floors.`,
  description: "I need to clear the keep's lower floors of debris.",
  effort: 120,
  help: { max:2, min:0 },

  onStart: async () => {
    await EventQueue.enqueueEvent('clear-lower-keep-start');
  },

});
