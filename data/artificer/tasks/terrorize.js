Task.build('terrorize', {
  name: 'Terrorize',
  description: 'I can choose a minion to spend my day tormenting. That minion will become more fearful of me.',
  requires: ['flag.plan-view.tasks.terrorize'],
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    const minion = minions[0];
          minion.adjustFear(3);
    await minion.save();

    const text = await TaskStory.select('terrorize', minions);

    return { title:`Terrorizing ${minions[0].singleName}`, text:text };
  }

});
