global.Hazard = class Hazard extends Form {

  // Because the requirements for the injury locations are added automatically
  // all hazard stories must use {{C::}} to denote the minion. All injuries are
  // also assumed to be painful injuries, unless they're head injuries which
  // are criticl by default.
  static buildHazard(code,data) {
    if (data.severity == null) { data.severity = (data.location == 'head') ? 'critical' : 'painful'; }
    if (data.details == null)  { data.details = {}; }
    if (data.requires == null) { data.requires = []; }

    if (data.location == 'cock')  { data.requires.push('minion(C).has-cock') }
    if (data.location == 'pussy') { data.requires.push('minion(C).has-pussy') }
    if (data.location == 'tits')  { data.requires.push('minion(C).has-tits') }

    return super.build(code,data);
  }

  validate() {
    if (this.location == null) { throw "An injury location is required" }
    if (this.type == null)     { throw "An injury damage type is required" }
    if (this.level == null)    { throw "An injury level is required" }
    if (this.story == null)    { throw "An injury story is required" }

    if (this.level < 1 || this.level > 5) { throw `level should be between 1 and 5.`; }
  }

  // === Hazard Groups ===

  static hinterlandsHunting() {
    return Hazard.where(hazard => { return hazard.activity == 'hunting-hinterlands'; });
  }

  static hinterlandsForaging() {
    return Hazard.where(hazard => { return hazard.activity == 'foraging-hinterlands'; });
  }

}
