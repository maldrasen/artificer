global.HasInjuries = { isAppliedTo: function(model) {

  // === Warning Non-Attomic Operation ===
  // Multiple injuries to the same part and of the same damage type should not
  // be added in a Promise.all(). This puts us in that same situation where we
  // add something to the database, immeadietly query for it, and find it's not
  // there. That shouldn't occurr in real game play though, so long as injury
  // adders don't try to apply the same injury multiple times in a single
  // action.

  model.prototype.addInjury = async function(hazard) {
    return await Abuser.lookup(hazard.location).addInjury(this,hazard)
  }

  // Get the overall health level (somewhere between 0 and 100) for this
  // character.
  model.prototype.getHealth = async function() {
    const levels = await this.getHealthLevels();

    // Painful: 100% - 25% Effectiveness for 0 - 61 total painful injury levels.
    // Critical: 100% - 0% Effectiveness for 0 - 9 total critical injury levels.
    let painful = Math.min(75, Math.ceil(18 * Math.log(levels.painful+1)));
    let critical = Math.min(100, Math.ceil(43 * Math.log(levels.critical+1)));
        critical += Math.ceil(painful/10);

    return 100 - Math.min(100, Math.max(painful, critical));
  }

  // The health levels should be:
  //   0      Mostly Dead, but still somewhat alive
  //   1-25   Critically Injured
  //   26-50  Horribly Injured
  //   51-75  Badly injured
  //   76-99  Injured
  //   100    Healthy
  model.prototype.getHealthClass = async function() {
    const health = await this.getHealth();
    if (health == 0) { return "dead"; }
    if (health > 0  && health <= 25) { return "critical"; }
    if (health > 25 && health <= 50) { return "horrible"; }
    if (health > 50 && health <= 75) { return "bad"; }
    if (health > 75 && health < 100) { return "injured"; }
    if (health == 100) { return 'healthy'; }
  }

  model.prototype.getHealthWord = async function() {
    let classname = await this.getHealthClass();
    return {
      healthy: 'Healthy',
      injured: 'Injured',
      bad: 'Badly Injured',
      horrible: 'Horribly Injured',
      critical: 'Critically Injured',
      dead: 'Mostly Dead',
    }[classname];
  }

  model.prototype.getHealthLevels = async function() {
    const painful = await totalLevels(this.id, 'painful');
    const critical = await totalLevels(this.id, 'critical');
    return { painful, critical };
  }

  // === Private Functions ===

  // This will need redone.
  async function totalLevels(id, severity) {
    // const injuries = await Injury.findAll({ where:{ character_id:id, severity:severity }});
    // return injuries.reduce((total, injury) => {
    //   return total + injury.level;
    // },0);
    return 0;
  }

}};
