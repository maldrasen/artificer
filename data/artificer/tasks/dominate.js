Task.build('dominate', {
  name: 'Dominate',
  description: 'I can choose a minion to spend the day with, training them to become more obediant and loyal to me.',
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    const minion = minions[0];
          minion.adjustLoyaly(3);
    await minion.save();

    const story = await TaskStory.select('dominate', minions);
    const text = await story.execute();

    return { title:`Dominating ${minions[0].singleName}`, text:text }
  }

});
