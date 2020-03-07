global.SummonAction = class SummonAction extends Form {

  // These actions should be available in all locations.
  static allStandardActions() {
    return [
      'cock-licking',
      'dick-slapping',
      'eat-pussy',
      'face-fuck',
      'face-sitting',
      'get-blowjob',
      'get-pussy-eaten',
      'give-blowjob',
    ];
  }

  static async forCharacter(character, context) {
    const game = await Game.instance();
    const location = Location.lookup(game.location);
    const actions = await location.summonActions();

    if (context == null) {
      context = new WeaverContext();
      await context.addCharacter('C',character);
      await context.addPlayer();
    }

    const available = await Promise.all(actions.map(async code => {
      let action = SummonAction.lookup(code);
      let passed = await CentralScrutinizer.meetsRequirements(action.requirements, context);
      if (passed) { return action; }
    }));

    return ArrayUtility.compact(available);
  }

  static async categorizedForCharacter(character) {
    const calculator = new ConsentCalculator(character);
    await calculator.init();

    const context = new WeaverContext();
    await context.addCharacter('C',character);
    await context.addPlayer();

    const available = await SummonAction.forCharacter(character, context);
    const categorized = {};

    await Promise.all(available.map(async action => {
      if (categorized[action.category] == null) { categorized[action.category] = []; }

      categorized[action.category].push({
        code: action.code,
        name: action.name,
        description: Weaver.weave(action.description, context),
        tags: action.tags,
        consent: (await calculator.getConsentDetails(action)),
      });
    }));

    each(Object.keys(categorized), category => {
      categorized[category] = categorized[category].sort((a1,a2) => {
        let n1 = a1.name.toUpperCase();
        let n2 = a2.name.toUpperCase();
        return n1 < n2 ? -1 : 1;
      });
    });

    return categorized;
  }

}
