Project.build('clear-great-hall', {
  name: 'Clear the Great Hall',
  workingName: `clearing the Keep's Great Hall`,
  description: "I need to clear the keep's Great Hall of debris before I can move my camp inside.",
  effort: 40,
  help: { max:4, min:0 },

  onStart: async () => {
    const game = await Game.instance();

    await AvailableEvent.add({
      code: 'great-hall-talk-to-rat-chief',
      requires: `game.dayNumber=${game.dayNumber+2}`
    });
  },

  onFinish: async () => {
    console.log("Todo: Great Hall onFinish events")
    // enqueue move into great hall
    // add project make hide clothing
    // add project make hide bedding
  },

});
