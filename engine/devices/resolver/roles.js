Resolver.Roles = (function() {

  async function assignRoles(assignments) {
    await Promise.all(assignments.map(async assignment => {
      const character = await Character.lookup(assignment.id);
            character.currentDuty = 'role';
            character.dutyCode = assignment.role;
            character.dutyOptions = assignment.options || {};

      await character.save();
    }));
  }

  async function workRoles() {
    const characters = await Character.findAll({ where:{ currentDuty:'role' }});

    await Promise.all(characters.map(async character => {
      let result = await Role.lookup(character.dutyCode).work(character);
      let flavors = result.flavors;

      result.flavors = ItemFlavor.forReport(flavors);
      result.items = ItemFlavor.itemize(flavors);

      Resolver.Items.add(result.items);
      Resolver.Report.setMinionData(character,'work',result);
    }));
  }

  return { assignRoles, workRoles }

})();
