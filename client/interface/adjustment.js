global.Adjustment = class Adjustment {

  // The adjustments are built from a space seperated string. They're built
  // from a string because these are mostly used on selection pages, and
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
  // Actors:  The second argument should be a map of context keys to actor IDs
  //          for example { C:1 }. If the key isn't present in the actor map
  //          then the subject will be sent as is when the adjustment is
  //          executed.
  constructor(strang, actors) {
    const parts = strang.split(' ');

    this.subject = this.lookupSubject(parts[0], actors);
    this.aspect = parts[1];
    this.level = parts[2];
  }

  // Aspect might be an actual aspect like sadist, or it could be an attribute
  // like fear or physical.
  get label() {
    let asp = Aspects.lookup(this.aspect);
    return asp ? asp.name.toLowerCase() : this.aspect.replace(/-/,' ')
  }

  get arrow() {
    return $('<span>',{ class:'arrow' }).append({
      '1':'↑', '2':'↑↑', '3':'↑↑↑', '-1':'↓', '-2':'↓↓', '-3':'↓↓↓',
    }[`${this.level}`]).prop('outerHTML');
  }

  lookupSubject(subject, actors) {
    return (actors && actors[subject]) ? actors[subject] : subject;
  }

  execute() {
    Alerts.showAlert({ adjustment:`${this.label} ${this.arrow}`, classname:this.aspect });
    Renderer.sendCommand('character.make-aspect-adjustment',{
      subject: this.subject,
      aspect: this.aspect,
      level: this.level
    });
  }

}
