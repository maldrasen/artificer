
CentralScrutinizer.registerScrutinizer(/^game/, async (requirement, context, state) => {
  if (requirement == 'game.metric')          { return Settings.metric(); }
  if (requirement == 'game.not-metric')      { return ! Settings.metric(); }
  if (requirement.match(/^game.dayNumber/))  { return await checkDayNumber(requirement); }
  if (requirement.match(/^game.food/))       { return await checkFood(requirement); }
});

// Day number requirement (game.dayNumber=3) (game.dayNumber>20)
async function checkDayNumber(requirement) {
  let match = requirement.match(/dayNumber(<|<=|=|>=|>)([^<>=]+)/);
  return checkComparisonOperation(Game.getDayNumber(),match[1],match[2]);
}

// Food number requirement (game.food=0) (game.food>100)
async function checkFood(requirement) {
  let match = requirement.match(/food(<|<=|=|>=|>)([^<>=]+)/);
  return checkComparisonOperation(Game.getFood(),match[1],match[2]);
}
