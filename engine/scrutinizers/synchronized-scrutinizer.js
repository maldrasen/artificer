global.SynchronizedScrutinizer = class SynchronizedScrutinizer {

  // This might only be used by the Weaver, but it's possible that something
  // else in that chain may need to get it's requirements analyzed. This
  // scrutinizer requires a fully built context. The requires argument can be
  // either a string or an array of strings.
  static meetsRequirements(requires, context) {
    if (requires == null) { return true; }

    return ((typeof requires == "string") ? [requires] : requires).map(requirement => {
      return meetsRequirement(requirement, context);
    }).indexOf(false) < 0;
  }

  static meetsRequirement(requirement, context) {
    if (requirement == 'player.furry')            { return context.P.character.species.isFurry; }
    if (requirement == 'player.not-furry')        { return !context.P.character.species.isFurry; }
    if (requirement == 'player.has-cock')         { return context.P.cock != null; }
    if (requirement == 'player.no-cock')          { return context.P.cock == null; }
    if (requirement == 'player.has-pussy')        { return context.P.pussy != null; }
    if (requirement == 'player.no-pussy')         { return context.P.pussy == null; }
    if (requirement == 'player.has-tits')         { return context.P.tits != null; }
    if (requirement == 'player.no-tits')          { return context.P.tits == null; }
    if (requirement == 'player.has-average-tits') { return context.P.tits && context.P.tits.sizeClass == 'average'}

    if (requirement == 'player.has-smaller-than-average-tits') { return context.P.tits && ['zero','tiny','small'].indexOf(context.P.tits.sizeClass) >= 0 }
    if (requirement == 'player.has-bigger-than-average-tits')  { return context.P.tits && ['big','huge','monster'].indexOf(context.P.tits.sizeClass) >= 0 }

    throw `Unknown Requirement - ${requirement}`;
  }
}
