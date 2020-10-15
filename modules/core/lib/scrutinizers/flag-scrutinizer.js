
CentralScrutinizer.registerScrutinizer(/^flag|^no-flag/, async (requirement, context, state) => {
  if (requirement.match(/^flag/))    { return checkFlag(requirement); }
  if (requirement.match(/^no-flag/)) { return checkFlagNotExists(requirement); }
});

// Requirements Like: flag.cock=horse, or flag.dicksSucked>=37
function checkFlag(requirement) {
  let match = requirement.match(/^flag\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
  if (match == null) {
    return checkFlagExists(requirement);
  }

  let value = Flag.lookup(match[1]);
  return (value == null) ? false : checkComparisonOperation(value, match[2], match[3]);
}

function checkFlagExists(requirement) {
  return Flag.lookup(requirement.match(/^flag\.(.+)/)[1]) != null;
}

function checkFlagNotExists(requirement) {
  return Flag.lookup(requirement.match(/^no-flag\.(.+)/)[1]) == null;
}
