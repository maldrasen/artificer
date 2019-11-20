Task.build('terrorize', {
  name: 'Terrorize',
  description: 'I can choose a minion to spend my day tormenting. That minion will become more fearful of me.',
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    const minion = minions[0];
          minion.adjustFear(3);
    await minion.save();

    const story = await TaskStory.select('terrorize', minions);
    const text = await story.execute();

    return { title:`Terrorizing ${minions[0].singleName}`, text:text };
  }

});
