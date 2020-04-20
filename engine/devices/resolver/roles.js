Resolver.Roles = (function() {

  async function assignRoles(assignments) {
    await Promise.all(assignments.map(async assignment => {
      await (await Character.lookup(assignment.id)).update({
        currentDuty: 'role',
        dutyCode: assignment.role,
        dutyOptions: (assignment.options || {}),
      });
    }));
  }

  async function workRoles() {
    const characters = await Character.findAll({ where:{ currentDuty:'role' }});

    await Promise.all(characters.map(async character => {
      const result = await Role.lookup(character.dutyCode).work(character);
      const flavors = result.flavors;

      result.flavors = ItemFlavor.forReport(flavors);
      result.items = ItemFlavor.itemize(flavors);

      Resolver.Items.add(result.items);
      Resolver.Report.setMinionData(character,'work',result);
    }));
  }

  return { assignRoles, workRoles }

})();
