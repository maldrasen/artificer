Task.build('terrorize', {
  name: 'Terrorize',
  description: 'I can choose a minion to spend my day tormenting. That minion will become more fearful of me.',
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    console.log("=== Execute Terrorize Task ===")
    console.log(minions);
    return { title:`Terrorize ${minions[0].singleName}`, text:`I terrorized ${minions[0].singleName}` }
  }

});
