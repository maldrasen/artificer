Elements.AdjustmentBadge = class AdjustmentBadge {

  // The adjustment badges are built from a space seperated string. They're
  // built from a string because these are mostly used on selection pages, and
  // when building the selection I want to have each choice on a single line.
  // An array of these strings should be more compact and readable, but it does
  // mean that they have to be parsed and interpreted.
  //
  // The adjustment strang (just a word I made up to indicate that it's a
  // parsed, interpreted, DSL like string, rather than something that's ever
  // displayed) is made up of three elements; the subject, the aspect, and the
  // level.
  //
  // Subject: This is the actor, or group of actors getting adjusted. Normally
  //          a character being adjusted will be in the weaver context so we
  //          look there first. If the subject isn't in the actors list, we
  //          send it as is, and the CharacterAgent figures out who we're
  //          talking about.
  //
  // Aspect:  The Aspect being adjusted. This should either map to an attribute
  //          like fear or loyalty, to an aspect like golden, or to something
  //          player specific, like rat-fucker.
  //
  // Level:   The level of the adjustment, -3 to 3, but not 0.

  constructor(strang, actors) {
    let parts = strang.split(' ');
    this.subject = parts[0];
    this.aspect = parts[1];
    this.level = parts[2];
    this.actors = actors;
  }

  get aspectLabel() {
    return this.aspect.replace(/-/,' ');
  }

  // I'm sure there's a better way to do this, but whatever.
  get symbols() {
    if (this.level == 1) { return '+' }
    if (this.level == 2) { return '++' }
    if (this.level == 3) { return '+++' }
    if (this.level == -1) { return '-' }
    if (this.level == -2) { return '--' }
    if (this.level == -3) { return '---' }
    return '';
  }

  build() {
    return $(`
      <span class='adjustment-badge badge'>
        <span class='badge-label'>${this.aspectLabel}</span><span class='badge-symbol'>${this.symbols}</span>
      </span>`
    ).data('badge',this);
  }

  execute() {
    Alerts.showAlert({ adjustment:`${this.aspectLabel} ${this.symbols}`, classname:this.aspect });
    // TODO: Send message to make adjustment.
  }

}
