
CentralScrutinizer.registerScrutinizer(/^state/, async (requirement, context, state) => {
  let match = requirement.match(/^state\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
  return CentralScrutinizer.checkComparisonOperation(state[match[1]], match[2], match[3]);
});
