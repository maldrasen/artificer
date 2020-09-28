global.HasSexHistory = { isAppliedTo: function(model) {

  // Check to see if the character has had any kind of sexual activity with the
  // player, oral, anal, handjob, whatever.
  model.prototype.hasHadSexWithPlayer = async function() {
    return (await SexEvent.findOne({ where:{ character_id:this.id, with:{[Sequelize.Op.like]:'P%'}}})) != null
  }

  // Check to see if the character has had the sexual training indicated by
  // course. We can only check sexual training because they get sex events
  // added when they happen. I don't think we ever will need to key off of
  // other events though.
  model.prototype.hasBeenTrained = async function(course) {
    return (await this.countTimesTrained(course)) > 0
  }

  model.prototype.countTimesTrained = async function(course) {
    const where = { character_id:this.id, eventType:'training' };
    if (course) { where.course = course; }
    return (await SexEvent.findAll({ where })).length;
  }

}};
