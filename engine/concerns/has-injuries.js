global.HasInjuries = { isAppliedTo: function(model) {

  model.prototype.getAllInjuries = function() {
    return Injury.findAll({ where:{ character_id:this.id }});
  }

  // Add an injury from a hazard form.
  //
  // === Warning Non-Attomic Operation ===
  // Multiple injuries to the same part and of the same damage type should not
  // be added in a Promise.all(). This puts us in that same situation where we
  // add something to the database, immeadietly query for it, and find it's not
  // there. That shouldn't occurr in real game play though, so long as injury
  // adders don't try to apply the same injury multiple times in a single
  // action.
  //
  // TODO: In the future hazard should have a circumstances object that can
  //       Add more richness to the details generated by the abuser. The
  //       circumstances of the injury can indicate that an injury is one
  //       big cut or several small cuts for instance. Not going to need that
  //       until the abusers are implemented at all though.
  //
  model.prototype.addInjury = async function(hazard) {
    let levelMax = (hazard.severity == 'critical') ? 9 : 20;

    let injury = await Injury.findOne({ where:{
      character_id: this.id,
      location: hazard.location,
      damageType: hazard.type,
    }});

    if (injury == null) {
      injury = await Injury.create({
        character_id: this.id,
        location: hazard.location,
        damageType: hazard.type,
        severity: hazard.severity,
        level: 0,
      });
    }

    injury.healed = 0;
    injury.level = Math.min(levelMax,(injury.level + hazard.level));

    let abuser = Abuser.lookup(hazard.location);
    let details = abuser.updateDetails(injury, hazard);
    let raw = await abuser.buildDescription(injury, details)

    injury.description = await Weaver.weaveWithCharacter(raw, 'C', this);
    injury.details = details;

    await injury.save();

    return injury;
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

  async function totalLevels(id, severity) {
    const injuries = await Injury.findAll({ where:{ character_id:id, severity:severity }});
    return injuries.reduce((total, injury) => {
      return total + injury.level;
    },0);
  }

}};
