global.Role = (function() {

  function lookup(code) {
    return {
      forager: Role.Forager,
      hunter:  Role.Hunter,
      rest:    Role.Rest,
    }[code];
  }

  async function getAvailableRoles(character) {
    const roles = [];
    const rest = await Role.Rest.canWork(character);
    const hunt = await Role.Hunter.canWork(character);
    const forage = await Role.Forager.canWork(character);

    if (rest) { roles.push({ code:'rest', name:'Rest' }); }
    if (hunt) { roles.push({ code:'hunter', name:'Hunter' }); }
    if (forage) { roles.push({ code:'forager', name:'Forager' }); }

    return roles;
  }

  return {
    lookup,
    getAvailableRoles,
  }

})();

// New minions are created with the forager role, until resting is unlocked,
// then they are created with the rest role. This is true for missions as well.
Role.defaultRole = function() {
  return Flag.lookup('plan-view.roles.rest') == 'Y' ? 'rest' : 'forager'
}
