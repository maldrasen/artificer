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
    if (health == 0)  { return "dead";     }
    if (health <= 25) { return "critical"; }
    if (health <= 50) { return "horrible"; }
    if (health <= 75) { return "bad";      }
    if (health < 100) { return "injured";  }
    return 'healthy';
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

  // === Health Levels ===

  model.prototype.getHealthLevels = async function() {
    const painful = await this.totalPainLevels(this);
    const critical = await this.totalCriticalLevels(this);
    return { painful, critical };
  }

  model.prototype.totalPainLevels = async function() {
    let total = 0;
    total += await this.getAnusPainLevel();
    total += await this.getCockPainLevel();
    total += await this.getPussyPainLevel();
    total += await this.getTitsPainLevel();
    return total;
  }

  // The body and mouth should never be null in practice, but this can happen
  // in a spec where a character is created without a body.
  model.prototype.totalCriticalLevels = async function() {
    const body = await this.getBody();
    const mouth = await this.getMouth();
    let levels = 0

    if (body != null) { levels += body.smashLevel; }
    if (mouth != null) { levels += mouth.smashLevel; }

    return levels;
  }

  model.prototype.getAnusPainLevel = async function() {
    const anus = await this.getAnus();
    return (anus == null) ? 0 : anus.smashLevel;
  }

  model.prototype.getCockPainLevel = async function() {
    const cock = await this.getCock();
    return (cock == null) ? 0 : cock.blightLevel + cock.burnLevel + cock.smashLevel;
  }

  model.prototype.getPussyPainLevel = async function() {
    const pussy = await this.getPussy();
    return (pussy == null) ? 0 : pussy.blightLevel + pussy.burnLevel + pussy.smashLevel;
  }

  model.prototype.getTitsPainLevel = async function() {
    const tits = await this.getTits();
    return (tits == null) ? 0 : tits.blightLevel + tits.burnLevel + tits.smashLevel;
  }

}};
