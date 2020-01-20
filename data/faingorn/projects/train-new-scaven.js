Project.build('train-new-scaven', {
  name: 'Train My New Scaven Minion',
  workingName: `training my new minion.`,
  description: "I'll spend the day training my new scaven minion.",
  effort: 8,
  help: { max:1, min:1 },

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
