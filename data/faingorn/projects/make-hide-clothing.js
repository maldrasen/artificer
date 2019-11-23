Project.build('make-hide-clothing', {
  name: 'Make Hide Clothing',
  workingName: `making hide clothing`,
  description: "I need to make some clothing for myself.",
  effort: 10,
  help: { max:0, min:0 },
  materials: { hide:5 },

  onFinish: async () => {
    await EventQueue.enqueueEvent('make-hide-clothing-done');
  },

});
