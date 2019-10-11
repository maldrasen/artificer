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
    let characters = await Character.findAll({ where:{ currentTask:'free' }});
    await Promise.all(characters.map(async character => {
      await Role.lookup(character.roleCode).work(character);
    }));
  }

  return {
    assignRoles: assignRoles,
    workRoles: workRoles,
  }

})();
