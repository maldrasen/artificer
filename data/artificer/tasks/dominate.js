Task.build('dominate', {
  name: 'Dominate',
  description: 'I can choose a minion to spend the day with, training them to become more obediant and loyal to me.',
  requires: ['flag.plan-view.tasks.dominate'],
  time: 4,
  minionsUsed: 1,

  execute: async work => {
    const minion = work.minions[0];
          minion.adjustLoyaly(3);
    await minion.save();

    const text = await TaskStory.select('dominate', work);

    return { title:`Dominating ${work.minions[0].singleName}`, text:text }
  }

});
