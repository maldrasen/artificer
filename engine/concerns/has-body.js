global.HasBody = { isAppliedTo: function(model) {

  model.prototype.getAnus = function(callback) {
    Anus.findOne({ where:{ character_id:this.id }}).then(anus => { callback(anus); });
  }

  model.prototype.getBalls = function(callback) {
    Balls.findOne({ where:{ character_id:this.id }}).then(balls => { callback(balls); });
  }

  model.prototype.getBody = function(callback) {
    Body.findByPk(this.body_id).then(body => { callback(body); });
  }

  model.prototype.getCock = function(callback) {
    Cock.findOne({ where:{ character_id:this.id }}).then(cock => { callback(cock); });
  }

  model.prototype.getMouth = function(callback) {
    Mouth.findOne({ where:{ character_id:this.id }}).then(mouth => { callback(mouth); });
  }

  model.prototype.getPussy = function(callback) {
    Pussy.findOne({ where:{ character_id:this.id }}).then(pussy => { callback(pussy); });
  }

}};
