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
