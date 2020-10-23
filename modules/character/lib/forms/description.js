global.Description = class Description extends Form {

  static async select(context) {
    if (typeof this.instances == 'undefined') {
      throw `No ${this.name} found. (You called select() on the superclass didn't you?)`
    }

    const valid = ArrayUtility.compact(await Promise.all(
      ObjectUtility.values(this.instances).map(async description => {
        let gate1 = await description.conditionsMet(context);
        let gate2 = await CentralScrutinizer.meetsRequirements(description.requires, context);
        return (gate1 && gate2) ? description : null;
      })
    ));

    // If we cannot find a matching description it's not nessessary a problem
    // with the engine, but just the absense of a description that matches
    // whatever character is in the context here. It can be difficult to figure
    // out what's missing in these situations so I print out the entire context
    // to pick through.
    if (valid.length == 0) {
      console.error(`\nERROR: Could not find a matching ${this.name}`);
      console.error(context.get('C'),'\n');
      return { d:` [ERROR: Could not find a matching ${this.name}] ` }
    }

    return Random.from(valid);
  }

  // Description subclasses can overwrite the conditionsMet() function to
  // apply their own unique conditions.
  async conditionsMet(context) { return true; }

  // Condition checking is slightly different from requirement checking. If a
  // body part has an interesting condition that would make it odd for a more
  // general description not to mention it. i.e. something like cock-count-2 or
  // tits-size-zero than matching descriptions *must* have that condition set.
  // Normal requirement checking only requires that the check not fail, but
  // doesn't require the check to be done.
  //
  // For the condition to be met, if the condition exists we ensure that the
  // expression is true, if the condition does not exist ensure that the
  // operation is false. We want to know if the check fails though, so negate
  // that result. This is essentially an XOR.
  conditionFailed(code, expression) {
    return ArrayUtility.contains(this.conditions,code) ? !expression : expression
  }
}
