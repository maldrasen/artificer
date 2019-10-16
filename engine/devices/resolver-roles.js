Resolver.Roles = (function() {

  async function assignRoles(assignments) {
    await Promise.all(assignments.map(async assignment => {
      const character = await Character.findByPk(assignment.id);
            character.roleCode = assignment.role;
            character.roleOptions = assignment.options || {};

      await character.save();
    }));
  }

  async function workRoles() {
    const characters = await Character.findAll({ where:{ currentTask:'free' }});

    await Promise.all(characters.map(async character => {
      let result = await Role.lookup(character.roleCode).work(character);
      Resolver.Items.add(result.items);
      Resolver.Report.setMinionData(character,'name',character.name);
      Resolver.Report.setMinionData(character,'work',result);
    }));
  }

  return { assignRoles, workRoles }

})();
