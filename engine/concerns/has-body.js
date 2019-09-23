global.HasBody = { isAppliedTo: function(model) {

  model.prototype.getBody = function(callback) {
    Body.findByPk(this.body_id).then(body => { callback(body); });
  }
  model.prototype.getAnus = function(callback) {
    Anus.findOne({ where:{ character_id:this.id }}).then(anus => { callback(anus); });
  }
  model.prototype.getBalls = function(callback) {
    Balls.findOne({ where:{ character_id:this.id }}).then(balls => { callback(balls); });
  }
  model.prototype.getCock = function(callback) {
    Cock.findOne({ where:{ character_id:this.id }}).then(cock => { callback(cock); });
  }
  model.prototype.getMouth = function(callback) {
    Mouth.findOne({ where:{ character_id:this.id }}).then(mouth => { callback(mouth); });
  }
  model.prototype.getNipples = function(callback) {
    Nipples.findOne({ where:{ character_id:this.id }}).then(nipples => { callback(nipples); });
  }
  model.prototype.getPussy = function(callback) {
    Pussy.findOne({ where:{ character_id:this.id }}).then(pussy => { callback(pussy); });
  }
  model.prototype.getTits = function(callback) {
    Tits.findOne({ where:{ character_id:this.id }}).then(tits => { callback(tits); });
  }

}};
