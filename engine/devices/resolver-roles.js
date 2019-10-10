Resolver.Roles = (function() {

  async function assignRoles(assignments) {
    await Promise.all(assignments.map(async assignment => {
      const character = await Character.findByPk(assignment.id);
            character.roleCode = assignment.role;
            character.roleOptions = assignment.options || {};

      return await character.save();
    }));
  }

  async function workRoles() {
    // TODO: Work Roles
  }

  return {
    assignRoles: assignRoles,
    workRoles: workRoles,
  }

})();
