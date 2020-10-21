global.HasAttributes = { isAppliedTo: function(model) {

  model.prototype.getPhysicalWord = function() {
    if (this.physical < 7)  { return 'feeble'; }
    if (this.physical < 15) { return 'weak'; }
    if (this.physical < 25) { return 'average'; }
    if (this.physical < 50) { return 'strong'; }
    if (this.physical < 75) { return 'mighty'; }
    if (this.physical < 100) { return 'incredible'; }
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

  // Personal has a different value range than the other attributes, weighted
  // towards more people being more attractive.
  model.prototype.getPersonalWord = function() {
    if (this.personal == 0)  { return 'hideous'; }
    if (this.personal < 5)   { return 'ugly'; }
    if (this.personal < 20)  { return 'average'; }
    if (this.personal < 35)  { return this.genderCode == 'male' ? 'handsome' : 'pretty'; }
    if (this.personal < 60)  { return this.genderCode == 'male' ? 'magnificent' : 'beautiful'; }
    if (this.personal < 90)  { return 'breathtaking'; }
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

  // This module is applied to the Player model as well as the Character. The
  // following attributes only apply to the Characters though and will return
  // null when called on the Player.

  model.prototype.getEnergyWord = function () {
    if (this.energy == null) { return null;        }
    if (this.energy == 2)    { return 'energetic'; }
    if (this.energy == 1)    { return 'tired';     }
    return 'exhausted';
  }

  model.prototype.getLoyaltyWord = function() {
    if (this.loyalty == null) { return null;            }
    if (this.loyalty < 7)     { return 'traitorous';    }
    if (this.loyalty < 15)    { return 'untrustworthy'; }
    if (this.loyalty < 25)    { return 'wavering';      }
    if (this.loyalty < 50)    { return 'loyal';         }
    if (this.loyalty < 75)    { return 'faithful';      }
    if (this.loyalty < 100)   { return 'dedicated';     }
    return 'absolute';
  }

  model.prototype.getFearWord = function() {
    if (this.loyalty == null) { return null;        }
    if (this.fear < 7)        { return 'fearless';  }
    if (this.fear < 15)       { return 'cautious';  }
    if (this.fear < 25)       { return 'watchful';  }
    if (this.fear < 50)       { return 'fearful';   }
    if (this.fear < 75)       { return 'afraid';    }
    if (this.fear < 100)      { return 'terrified'; }
    return 'panicked';
  }

  model.prototype.getLustWord = function() {
    if (this.lust == null) { return null;           }
    if (this.lust < 20)    { return 'uninterested'; }
    if (this.lust < 40)    { return 'satisfied';    }
    if (this.lust < 60)    { return 'affectionate'; }
    if (this.lust < 80)    { return 'lusty';        }
    if (this.lust < 90)    { return 'horny';        }
    if (this.lust < 100)   { return 'lewd';         }
    return 'uncontrollable';
  }

  model.prototype.adjustLoyaly = function(amount) {
    if (this.loyalty >= 0) {
      this.loyalty = scaleLoyaltyOrFearAmount(this.loyalty,amount);
    }
  }

  model.prototype.adjustFear = function(amount) {
    if (this.loyalty >= 0) {
      this.fear = scaleLoyaltyOrFearAmount(this.fear,amount);
    }
  }

  // A value between -3 and 3 is specified when loyalty or fear is added to a
  // character. The actual amount gained or lost though depends on their
  // current attribute value, with lower values being easier to increase and
  // higher values being easier to decrease. As a table this works something
  // like this:
  //              ---  --   -    +    ++   +++
  //  0 - 19      -3   -2   -1   +3   +6   +9
  // 20 - 80      -5   -3   -1   +1   +3   +5
  // 81 - 100     -9   -6   -3   +1   +2   +3
  //
  // I want to avoid weird situations like 19(+++) = 28 and 20(+++) = 25 so
  // I have to adjust a few numbers by hand.
  function scaleLoyaltyOrFearAmount(value, amount) {
    if (amount == -3) {
      if (value <= 3) { return 0; }
      if (value <= 19) { return value-3; }
      if (value == 20) { return 16; }
      if (value == 21) { return 17; }
      if (value <= 79) { return value-5; }
      if (value <= 81) { return 75; }
      if (value <= 84) { return 76; }
      return value-9;
    }
    if (amount == 3) {
      if (value >= 97) { return 100; }
      if (value >= 81) { return value+3; }
      if (value == 80) { return 84; }
      if (value == 79) { return 83; }
      if (value >= 21) { return value+5; }
      if (value >= 19) { return 25; }
      if (value >= 16) { return 24; }
      return value+9;
    }
    if (amount == -2) {
      if (value <= 2) { return 0; }
      if (value <= 19) { return value-2; }
      if (value <= 79) { return value-3; }
      if (value == 80) { return 76; }
      if (value <= 82) { return 77; }
      return value-6;
    }
    if (amount == 2) {
      if (value >= 98) { return 100; }
      if (value >= 81) { return value+2; }
      if (value >= 21) { return value+3; }
      if (value == 20) { return 24; }
      if (value >= 18) { return 23; }
      return value+6;
    }
    if (amount == -1) {
      if (value == 0)  { return 0; }
      if (value <= 81) { return value-1 }
      if (value == 82) { return 80; }
      return value-3;
    }
    if (amount == 1) {
      if (value == 100) { return 100; }
      if (value >= 19) { return value+1; }
      if (value == 18) { return 20; }
      return value+3;
    }
  }

}};
