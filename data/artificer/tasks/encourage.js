Task.build('encourage', {
  name: 'Encourage',
  description: 'I can choose a minion to spend my day with. That minion will become more loyal to me.',
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    console.log("=== Execute Encourage Task ===")
    console.log(minions);
    return { title:`Encourage ${minions[0].singleName}`, text:`I encouraged ${minions[0].singleName}` }
  }

});
