global.Hazard = class Hazard extends Form {

  static buildHazard(data) {
    data.severity = (['body','head'].indexOf(data.location) < 0) ? 'painful' : 'critical';
    super.build(null,data);
  }

  validate() {
    if (this.location == null) { throw "An injury location is required" }
    if (this.type == null)     { throw "An injury damage type is required" }
    if (this.level == null)    { throw "An injury level is required" }
    if (this.story == null)    { throw "An injury story is required" }

    if (Injury.LOCATIONS.indexOf(this.location) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (Injury.DAMAGE_TYPES.indexOf(this.type) < 0) { throw `Bad location for injury: ${data.location}`; }
    if (this.level < 1 || this.level > 5) { throw `level should be between 1 and 5.`; }
  }

  // === Hazard Groups ===

  static painfulHinterlandsHunting() {
    return Hazard.where(hazard => { return hazard.severity == 'painful' && hazard.activity == 'hunting-hinterlands'; });
  }

  static criticalHinterlandsHunting() {
    return Hazard.where(hazard => { return hazard.severity == 'critical' && hazard.activity == 'hunting-hinterlands'; });
  }

}
