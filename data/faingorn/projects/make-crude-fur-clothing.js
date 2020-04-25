Project.build('make-crude-fur-clothing', {
  name: 'Make Crude Fur Clothing',
  workingName: `making some crude fur clothing`,
  description: "I need to make some clothing for myself out of these furs I found.",
  effort: 2,
  help: { max:0, min:0 },

  onStart: async () => {
    Game.addEvent('morning-1-end');
  },

  onFinish: async () => {
    AvailableEvent.add('morning-2');
    Resource.add('leather-scraps',6);
  },

});
