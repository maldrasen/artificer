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
  //          a character being adjusted will be in the context so we look
  //          there first. If the subject isn't in the actors list, we send it
  //          as is, and the CharacterAgent figures out who we're talking about.
  //
  // Aspect:  The Aspect being adjusted. This should either map to an attribute
  //          like fear or loyalty, to an aspect like golden, or to something
  //          player specific, like rat-fucker.
  //
  // Level:   The level of the adjustment, -3 to 3, but not 0.
  //
  // You can also build a badge that isn't used to set ajust an aspect.
  // Anything inside of parentheses will be displayed without doing anything.
  // Useful for one time actions like setting flags.

  constructor(strang, actors) {
    const parts = strang.split(' ');
    const match = strang.match(/^\((.+)\)$/);

    if (match) {
      this.label = match[1];
    } else {
      this.subject = this.lookupSubject(parts[0], actors);
      this.aspect = parts[1];
      this.level = parts[2];
    }
  }

  get aspectLabel() {
    console.log("Wat?",this.label,this.aspect)
    return this.label || this.aspect.replace(/-/,' ');
  }

  get arrow() {
    if (this.level) {
      return $('<span>',{ class:'arrow' }).append({
        '1':'↑', '2':'↑↑', '3':'↑↑↑', '-1':'↓', '-2':'↓↓', '-3':'↓↓↓',
      }[`${this.level}`]).prop('outerHTML');
    }

    return '';
  }

  // TODO: The event's actors map should have something that's recognizable by
  //       the character agent. This works for actors like the rat chief at
  //       least, but won't work with randomish actors. Need to find a place to
  //       store minion IDs in the event data for shit like this.
  //
  // TODO: Addendum. We do have the actors in the state now, but as a design
  //       choice we've only been adjusting the player in these decisions, and
  //       adjusting the minions in the event itself. Maybe the adjustment
  //       badge should only show be defined with an adjustment and an Level
  //       now? Or should just be a random label.
  lookupSubject(subject, actors) {
    return (actors && actors[subject]) ? actors[subject] : subject;
  }

  build() {
    let strength = this.level > 0 ? `up-${this.level}` : `down${this.level}`;

    return $(`
      <span class='badge adjustment-badge ${strength}'>
        <span class='badge-label'>${this.aspectLabel}</span> ${this.arrow}
      </span>`
    ).data('badge',this);
  }

  execute() {
    Alerts.showAlert({ adjustment:`${this.aspectLabel} ${this.arrow}`, classname:this.aspect });

    if (this.aspect) {
      Renderer.sendCommand('character.make-aspect-adjustment',{
        subject: this.subject,
        aspect: this.aspect,
        level: this.level
      });
    }
  }

}
