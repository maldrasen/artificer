global.HasBody = { isAppliedTo: function(model) {

  model.prototype.getBody = function() {
    return Body.findByPk(this.body_id)
  }
  model.prototype.getAnus = function() {
    return Anus.findOne({ where:{ character_id:this.id }});
  }
  model.prototype.getBalls = function() {
    return Balls.findOne({ where:{ character_id:this.id }});
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
        model.getBody(),
        model.getAnus(),
        model.getBalls(),
        model.getCock(),
        model.getMouth(),
        model.getNipples(),
        model.getPussy(),
        model.getTits()
      ]).then(parts => {
        resolve({
          body:    parts[0],
          anus:    parts[1],
          balls:   parts[2],
          cock:    parts[3],
          mouth:   parts[4],
          nipples: parts[5],
          pussy:   parts[6],
          tits:    parts[7],
        });
      });
    });
  }


}};
