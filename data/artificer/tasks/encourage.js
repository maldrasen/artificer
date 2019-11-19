Task.build('encourage', {
  name: 'Encourage',
  description: 'I can choose a minion to spend my day with. That minion will become more loyal to me.',
  time: 4,
  minionsUsed: 1,

  execute: async minions => {
    const minion = minions[0];
    let loyalStart = minion.loyalty
    minion.adjustLoyaly(3);
    let loyalEnd = minion.loyalty
    await minion.save();

    console.log("=== Execute Encourage Task ===")
    console.log(minions);
    return { title:`Encourage ${minions[0].singleName}`, text:`I encouraged ${minions[0].singleName}. Loyalty increased from ${loyalStart} to ${loyalEnd}` }
  }

});
