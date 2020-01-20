Project.build('clear-great-hall', {
  name: 'Clear the Great Hall',
  workingName: `clearing the keep's great hall`,
  description: "I need to clear the keep's Great Hall of debris so that it doesn't smell like shit all night.",
  effort: 20,
  help: { max:1, min:0 },

  onStart: async () => {
    console.log("TODO: Redo clear-great-hall onStart")
    // const game = await Game.instance();
    // await AvailableEvent.addAll([
    //   { code:'clear-great-hall-start' },
    //   { code:'great-hall-talk-to-rat-chief', requires:`game.dayNumber=${game.dayNumber+3}` },
    // ]);
  },

  onFinish: async () => {
    console.log("TODO: Redo clear-great-hall onFinish")
    // await EventQueue.enqueueEvent('clear-great-hall-done');
    // await AvailableProject.addAll([
    //   { code:'make-hide-clothing' },
    //   { code:'make-hide-bedding' },
    // ]);
  },

});
