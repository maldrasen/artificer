global.Role = (function() {

  function lookup(code) {
    return {
      forager: Role.Forager,
      hunter:  Role.Hunter,
      rest:    Role.Rest,
    }[code];
  }

  async function getAvailableRoles(character) {
    const roles = [{ code:'rest', name:'Rest' }];
    const hunt = await Role.Hunter.canWork(character);
    const forage = await Role.Forager.canWork(character);

    if (hunt) { roles.push({ code:'hunter', name:'Hunter' }); }
    if (forage) { roles.push({ code:'forager', name:'Forager' }); }

    return roles;
  }

  return {
    lookup,
    getAvailableRoles,
  }

})();
