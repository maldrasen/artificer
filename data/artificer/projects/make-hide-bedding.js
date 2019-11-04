Project.build('make-hide-bedding', {
  name: 'Make Hide Bedding',
  workingName: `making hide bedding.`,
  description: "I imagine a big pile of hide and furs would more comfortable than sleeping on the floor.",
  effort: 10,
  help: { max:0, min:0 },
  materials: { hide:7 },

  onFinish: async () => {
    const game = await Game.instance();
    await game.enqueueGameEvent('make-hide-bedding-done');
  },
  
});
