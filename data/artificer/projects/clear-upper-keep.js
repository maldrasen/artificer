Project.build('clear-upper-keep', {
  name: `Clear the Keep's Upper Floors`,
  workingName: `clearing the keep's upper floors.`,
  description: "I need to clear the upper floors of the keep of debris.",
  effort: 120,
  help: { max:2, min:0 },

  onStart: async () => {
    const game = await Game.instance();
    await AvailableEvent.addAll([
      { code:'clear-upper-keep-find-journal' },
      { code:'minion-spider-bite', requires:[
          `game.dayNumber=${game.dayNumber+1}`,
          `flag.enqueued.great-hall-talk-to-rat-chief`
      ]},
    ]);
  },

  onFinish: async () => {
    await EventQueue.enqueueEvent('clear-upper-keep-done');
  },

});
