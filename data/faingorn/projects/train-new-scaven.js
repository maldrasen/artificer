Project.build('train-new-scaven', {
  name: 'Train My New Scaven Minion',
  workingName: `training`,
  description: "I'll spend the day training my new scaven minion.",
  effort: 8,
  help: { max:1, min:1 },

  onStart: async () => {
    await EventQueue.enqueueEvent('train-new-scaven-start');
  },

  onFinish: async () => {
    await EventQueue.enqueueEvent('train-new-scaven-end');
  },

});
