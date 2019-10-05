Project.build('clear-great-hall', {
  name: 'Clear the Great Hall',
  description: "I need to clear the keep's Great Hall of debris before I can move my camp inside.",
  effort: 40,
  help: { max:4, min:0 },

  onStart: async () => {
    console.log("Todo: Great Hall onStart events")
    // enqueue talk with rat chief
  },

  onFinish: async () => {
    console.log("Todo: Great Hall onFinish events")
    // enqueue move into great hall
    // add project make hide clothing
    // add project make hide bedding
  },

});
