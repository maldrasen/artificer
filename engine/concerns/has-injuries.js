global.HasInjuries = { isAppliedTo: function(model) {

  // When adding an injury you should specify these options
  //   location:   body, head, anus, cock, mouth, nipples, pussy, tits
  //               (The location of the injury will set its severity)
  //   type:       burn, cut, pierce, or smash
  //   level:      1 through 5, or will be 1-5 randomly.
  //
  // Warning Non-Attomic Operation : Even though we do this in the spec,
  // multiple injuries to the same part and of the same damage time should not
  // be added in a Promise.all(). This puts us in that same situation where we
  // add something to the database, immeadietly query for it, and find it's not
  // there. That shouldn't occurr in real game play though, so long as injury
  // adders don't try to apply the same injury multiple times in a single
  // action.
  model.prototype.addInjury = async function(options) {

    if (options.location == null)   { throw 'Must specify location';    }
    if (['body','head','anus','cock','mouth','nipples','pussy','tits'].indexOf(options.location) < 0) {
      throw `Invalid Location.`
    }

    if (options.type == null) { throw 'Must specify damage type'; }
    if (['burn','cut','pierce','rip','smash'].indexOf(options.type) < 0) {
      throw `Invalid Damage Type.`
    }

    let severity = (['body','head'].indexOf(options.location) < 0) ? 'painful' : 'critical';
    let level = options.level || Random.between(1,5);
    let levelMax = (severity == 'critical') ? 9 : 20;

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
        severity: severity,
        level: 0,
      });
    }

    let abuser = Abuser.lookup(options.location);
    let details = abuser.updateDetails(injury);

    injury.healed = 0;
    injury.level = Math.min(levelMax,(injury.level + level));
    injury.description = abuser.buildDescription(details);
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
  model.prototype.getHealthWord = async function() {
    const health = await this.getHealth();
    if (health == 0) { return "Mostly Dead"; }
    if (health > 0  && health <= 25) { return "Critically Injured"; }
    if (health > 25 && health <= 50) { return "Horribly Injured"; }
    if (health > 50 && health <= 75) { return "Badly Injured"; }
    if (health > 75 && health < 100) { return "Injured"; }
    if (health == 100) { return 'Healthy'; }
    return "Not Healthy?"
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
