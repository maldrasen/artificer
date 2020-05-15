Project.build('investigate-campsite', {
  name: 'Investigate Forest Campsite',
  workingName: `investigating the forrest camp`,
  description: "I should go investigate the campsite my minion found deep in the woods.",
  effort: 4,
  help: { max:0, min:0 },

  onStart: async () => {
    Game.addEvent('investigating-campsite');
  },

});
