Project.build('clear-great-hall', {
  name: 'Clear the Great Hall',
  workingName: `clearing the keep's great hall`,
  description: "I need to clear the keep's Great Hall of debris before I can move my camp inside.",
  effort: 40,
  help: { max:2, min:0 },

  onStart: async () => {
    const game = await Game.instance();
    await AvailableEvent.addAll([
      { code:'clear-great-hall-start' },
      { code:'great-hall-talk-to-rat-chief', requires:`game.dayNumber=${game.dayNumber+1}` },
    ]);
  },

  onFinish: async () => {
    await EventQueue.enqueueEvent('clear-great-hall-done');

    await AvailableProject.addAll([
      { code:'make-hide-clothing' },
      { code:'make-hide-bedding' },
    ]);
  },

});
