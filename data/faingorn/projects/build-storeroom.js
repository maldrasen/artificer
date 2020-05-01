Project.build('build-storeroom', {
  name: 'Build Storeroom',
  workingName: `building a storeroom`,
  description: "I'll clean out an empty room to serve as a storeroom and move all of our food storage into it.",
  effort: 2,
  help: { max:0, min:0 },

  materials: {
    basket:4
  },

  onFinish: async () => {
    Flag.set('map.storeroom','Y');
    Game.addEvent('storeroom-built');
    AvailableEvent.add('rat-thief-caught');
    AvailableEvent.remove('rat-thief-strikes-again');
  },

});
