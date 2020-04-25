Elements.SelectionBadge = class SelectionBadge {

  // The selection badge is used to display a badge on a selection button on an
  // event selection page indicating what kind of effect a given selection may
  // have when chosen. These can be content warnings, adjustments, or a just
  // a random label. These options look like:
  //    -scat-              A Content Warning
  //    (Label)             A Label
  //    player breeder 3    An Adjustment

  constructor(strang, actors) {
    const labelMatch = strang.match(/^\((.+)\)$/);
    const warningMatch = strang.match(/^-(.+)-$/);

    if      (labelMatch)   { this.label = labelMatch[1]; }
    else if (warningMatch) { this.warning = warningMatch[1]; }
    else                   { this.adjustment = new Adjustment(strang, actors); }
  }

  get badgeLabel() { return this.label || this.warning || this.adjustment.label; }
  get arrow() { return this.adjustment ? this.adjustment.arrow : ''; }

  get classname() {
    if (this.label) { return 'label-badge'; }
    if (this.warning) { return `warning-badge ${this.warning}-warning`; }

    const level = (this.adjustment.level > 0) ?
      `up-${this.adjustment.level}`:
      `down${this.adjustment.level}`;

    return `adjustment-badge ${level}`;
  }

  build() {
    return $(`
      <span class='badge selection-badge ${this.classname}'>
        <span class='badge-label'>${this.badgeLabel}</span> ${this.arrow}
      </span>`
    ).data('badge',this);
  }

  execute() {
    if (this.adjustment) { return this.adjustment.execute(); }
    if (this.label) { Alerts.showAlert({ adjustment:`${this.label}`, classname:'other' }); }
  }

}
