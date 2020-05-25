global.HasBody = { isAppliedTo: function(model) {

  model.prototype.getBody = function() {
    return Body.findByPk(this.body_id)
  }
  model.prototype.getAnus = function() {
    return Anus.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getCock = function() {
    return Cock.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getMouth = function() {
    return Mouth.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getNipples = function() {
    return Nipples.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getPussy = function() {
    return Pussy.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getTits = function() {
    return Tits.findOne({ where:{ character_id:this.id }});
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

  // Height for species compares this character's height to the average
  // height of the character of that species: short, average, or tall. The body
  // class has functions for overall height, but comparative heights need to be
  // on the character model because it needs access to both the species and body.
  model.prototype.heightForSpecies = async function() {
    const height = (await this.getBody()).height;
    const average = this.species.averageHeight();

    if (height < average * 0.8) { return 'short'; }
    if (height > average * 1.2) { return 'tall';  }

    return 'average';
  }

}};
