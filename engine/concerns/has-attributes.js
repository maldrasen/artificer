global.HasAttributes = { isAppliedTo: function(model) {

  model.prototype.getPhysicalWord = function() {
    if (this.physical < 7)  { return 'feeble'; }
    if (this.physical < 15) { return 'weak'; }
    if (this.physical < 25) { return 'average'; }
    if (this.physical < 50) { return 'strong'; }
    if (this.physical < 75) { return 'mighty'; }
    if (this.physical < 100) { return 'tremendous'; }
    return 'legendary';
  }

  model.prototype.getMentalWord = function() {
    if (this.mental < 7)  { return 'idiot'; }
    if (this.mental < 15) { return 'stupid'; }
    if (this.mental < 25) { return 'astute'; }
    if (this.mental < 50) { return 'erudite'; }
    if (this.mental < 75) { return 'brilliant'; }
    if (this.mental < 100) { return 'genius'; }
    return 'savant';
  }

  model.prototype.getPersonalWord = function() {
    if (this.personal < 7)  { return 'hideous'; }
    if (this.personal < 15) { return 'ugly'; }
    if (this.personal < 25) { return 'attractive'; }
    if (this.personal < 50) { return 'beautiful'; }
    if (this.personal < 75) { return 'breathtaking'; }
    if (this.personal < 100) { return 'gorgeous'; }
    return 'mythic';
  }

  model.prototype.getMagicalWord = function() {
    if (this.magical < 7)  { return 'impotent'; }
    if (this.magical < 15) { return 'powerless'; }
    if (this.magical < 25) { return 'talented'; }
    if (this.magical < 50) { return 'powerful'; }
    if (this.magical < 75) { return 'formidable'; }
    if (this.magical < 100) { return 'epic'; }
    return 'omnipotent';
  }

  model.prototype.getLoyaltyWord = function() {
    if (this.loyalty < 7)  { return 'traitorous'; }
    if (this.loyalty < 15) { return 'fickle'; }
    if (this.loyalty < 25) { return 'faithful'; }
    if (this.loyalty < 50) { return 'loyal'; }
    if (this.loyalty < 75) { return 'reliable'; }
    if (this.loyalty < 100) { return 'unwavering'; }
    return 'absolute';
  }

  model.prototype.getFearWord = function() {
    if (this.fear < 7)  { return 'fearless'; }
    if (this.fear < 15) { return 'cautious'; }
    if (this.fear < 25) { return 'wary'; }
    if (this.fear < 50) { return 'fearful'; }
    if (this.fear < 75) { return 'afraid'; }
    if (this.fear < 100) { return 'terrified'; }
    return 'aghast';
  }

}};
