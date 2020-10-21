CentralScrutinizer.registerScrutinizer(/^minion/, async (requirement, context, state) => {
  if (requirement.match(/^minion\(.+\)\./)) { return checkMinion(requirement, context); }

  // Injury Counts
  if (requirement.match(/^minions.injured-count/))            { return await checkInjuredCount(requirement,100); }
  if (requirement.match(/^minions.badly-injured-count/))      { return await checkInjuredCount(requirement,76);  }
  if (requirement.match(/^minions.horribly-injured-count/))   { return await checkInjuredCount(requirement,51);  }
  if (requirement.match(/^minions.critically-injured-count/)) { return await checkInjuredCount(requirement,26);  }

  throw `Unknown Minion Requirement - ${requirement}`;
});

// The minion scrutinizer also checks the requirements for the player or a
// single minion given requirements in the form "minion(X).xxx"
async function checkMinion(requirement, context) {
  let match = requirement.match(/^minion\((.+)\)\.(.+)/);
  let minion = context.get(match[1]);

  if (minion == null) {
    throw `The minion(${match[1]}) should have been in the context before the scrutinizer was invoked.`
  }

  return CharacterScrutinizer.check(match[2], minion);
}

async function checkInjuredCount(requirement, health) {
  const match = requirement.match(/count(<|<=|=|>=|>)([^<>=]+)/);
  const minions = await Character.getNormalMinions();

  const injured = ArrayUtility.compact((await Promise.all(minions.map(async minion => {
    return (await minion.getHealth()) < health ? minion : null;
  }))));

  return CentralScrutinizer.checkComparisonOperation(injured.length,match[1],match[2]);
}
