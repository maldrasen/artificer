global.HasInjuries = { isAppliedTo: function(model) {

  // When adding an injury you should specify these options
  //   location:   body, head, anus, cock, mouth, nipples, pussy, tits
  //               (The location of the injury will set its severity)
  //   type:       burn, cut, pierce, or smash
  //   level:      1 through 5, or will be 1-5 randomly.
  model.prototype.addInjury = async function(options) {

    if (options.location == null)   { throw 'Must specify location';    }
    if (['body','head','anus','cock','mouth','nipples','pussy','tits'].indexOf(options.location) < 0) {
      throw `Critical Damage is limited to the body and head.`
    }

    if (options.type == null) { throw 'Must specify damage type'; }
    if (['burn', 'cut', 'pierce', 'smash'].indexOf(options.type) < 0) {
      throw `Critical Damage is limited to burn, cut, pierce, or smash.`
    }

    let severity = (['body','head'].indexOf(options.location) < 0) ? 'painful' : 'critical';
    let level = options.level || Random.upTo(5);

    let injury = await Injury.findOne({ where:{
      character_id: this.id,
      location: options.location,
      damageType: options.type,
    }});

    if (injury == null) {
      injury = await Injury.create({
        character_id: this.id,
        location: options.location,
        damageType: options.type,
        severity: 'critical',
        level: 0,
      });
    }

    injury.healed = 0;
    injury.level += level ;

    let abuser = Abuser.lookup(options.location);
    let details = abuser.updateDetails(injury);

    injury.description = abuser.buildDescription(details);
    injury.details = details;

    await injury.save();

    return injury;
  }

  // Get the overall health level (somewhere between 0 and 100) for this
  // character.
  model.prototype.getHealth = async function() {
    let painfulLevels = totalPainfulLevels(this);
    let criticalLevels = totalCriticalLevels(this);

    // Painful: 100% - 25% Effectiveness for 0 - 61 total painful injury levels.
    // Critical: 100% - 0% Effectiveness for 0 - 9 total critical injury levels.
    let painful = Math.min(75, Math.ceil(18 * Math.log(painfulLevels+1)));
    let critical = Math.min(100, Math.ceil(43 * Math.log(criticalLevels+1)));
        critical += Math.ceil(painful/10);

    return Math.min(100, Math.max(painful, critical));
  }

  // TODO: Need to figure out what the different health levels will be.
  model.prototype.getHealthWord = async function() {
    const health = await this.getHealth();
    if (health == 100) { return 'Healthy'; }
    return "Not Healthy?"
  }

  // === Private Functions ===

  async function totalPainfulLevels(character)  { return await totalLevels(character.id, 'painful');  }
  async function totalCriticalLevels(character) { return await totalLevels(character.id, 'critical'); }

  async function totalLevels(id, severity) {
    const injuries = await Injury.findAll({ where:{ character_id:id, severity:severity }});
    return injuries.reduce((total, injury) => {
      return total + injury.level;
    });
  }

}};
