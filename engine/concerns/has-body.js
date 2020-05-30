global.HasBody = { isAppliedTo: function(model) {

  model.prototype.getAnus = function() {
    return Anus.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }
  model.prototype.getBody = function() {
    return Body.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }})
  }
  model.prototype.getCock = function() {
    return Cock.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }
  model.prototype.getMouth = function() {
    return Mouth.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }
  model.prototype.getNipples = function() {
    return Nipples.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }
  model.prototype.getPussy = function() {
    return Pussy.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }
  model.prototype.getTits = function() {
    return Tits.findOne({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }

  model.prototype.getCompleteBody = function() {
    return new Promise(resolve => {
      Promise.all([
        this.getBody(),
        this.getAnus(),
        this.getCock(),
        this.getMouth(),
        this.getNipples(),
        this.getPussy(),
        this.getTits()
      ]).then(parts => {
        resolve({
          body:    parts[0],
          anus:    parts[1],
          cock:    parts[2],
          mouth:   parts[3],
          nipples: parts[4],
          pussy:   parts[5],
          tits:    parts[6],
        });
      });
    });
  }

  model.prototype.completelyRemoveBody = async function() {
    await Anus.destroy({    where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Body.destroy({    where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Cock.destroy({    where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Mouth.destroy({   where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Nipples.destroy({ where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Pussy.destroy({   where:{ parent_id:this.id, parent_class:this.constructor.name }});
    await Tits.destroy({    where:{ parent_id:this.id, parent_class:this.constructor.name }});
  }

  // Height for species compares this character's height to the average
  // height of the character of that species: short, average, or tall. The body
  // class has functions for overall height, but comparative heights need to be
  // on the character model because it needs access to both the species and
  // body.
  //
  // This logic is recreated in the BodyDescriber.describeHeightWeight()
  // function because this needs to be async here, but not there. If this
  // changes we need to change it there as well.
  model.prototype.heightForSpecies = async function() {
    const height = (await this.getBody()).height;
    const average = this.species.averageHeight();

    if (height < average * 0.8) { return 'short'; }
    if (height > average * 1.2) { return 'tall';  }

    return 'average';
  }

}};
