Resolver.Incidentals = (function() {

  // The incidentals shouldn't really be hardcoded like this. It breaks the separation of engine code vs scenario code.
  // They could be implemented as an Incidental form that has an execution function and a list of requirements. This
  // function could loop though all the incidentals, check to see which are valid, and execute them. As of this writing
  // there is only one incidental though, and I'm not sure what else there will be. Nothing on the horizon for the next
  // few months at least, so for now I'll just keep the one thing that might happen in this class and break it out when
  // it becomes necessary.

  async function dailyUpdate() {
    await executeRewardBloodBerries()
  }

  async function executeRewardBloodBerries() {
    if (Flag.lookup('order.reward-blood-berries') != 'Y') { return false; }

    const resource = await Resource.lookup('blood-berries');
    if (resource.count < 100) { return false; }

    const scaven = await Character.getNormalMinions({ speciesCode:'scaven' });
    if (scaven.length == 0) { return false; }

    each(scaven, character => {
      character.increaseLoyalty(10);
    });

    await resource.update({ count:Random.between(40,50) });

    Resolver.Report.addIncidental(`My blood berry stocks were full enough to distribute about half of what I had in
      storage among my scaven minions as a reward for their hard work, an act that's sure to make them more loyal.`);
  }

  return { dailyUpdate };

})();
