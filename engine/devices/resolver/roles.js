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
    const characters = await Character.findAll({ where:{ type:'minion', status:'normal', currentDuty:'role' }});

    await Promise.all(characters.map(async character => {
      const result = await Role.work(character);
      const report = await result.forReport();

      Resolver.Items.add(result.items);
      Resolver.Report.setMinionData(character,'work',report);
    }));
  }

  return { assignRoles, workRoles }

})();
