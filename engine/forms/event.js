global.Event = class Event extends Form {

  static async onFinish(choices) {
    const code = choices.event.code;
    const completedCode = `completed.${code}`;
    const completedValue = Flag.lookup(completedCode) == null ? 1 : Flag.lookup(completedCode) + 1;

    Flag.set(completedCode, completedValue);

    let finishFunction = Event.lookup(code).onFinish;
    if (finishFunction) {
      await finishFunction(choices);
    }
  }

  // Before an event can be rendered in the browser it needs to be prepared.
  // This function will to all of the token and path replacement in the event
  // stages. It will also call the event's onStart() function if it exists.
  static async prepare(queuedEvent) {
    const event = Event.lookup(queuedEvent.code).properties;
    if (event.onStart) {
      await event.onStart(queuedEvent.state);
    }

    const context = new WeaverContext();
    await context.setEventState(queuedEvent.state);
    await context.setEvent(event);

    await Event.transformEvent(event, context, queuedEvent);

    return event;
  }

  // === Event Transformation  ===

  static async transformEvent(event, context, queuedEvent) {
    event.stages = await Promise.all(event.stages.map(async stage => {
      const valid = await CentralScrutinizer.meetsRequirements(stage.requires, context, { state:queuedEvent.state });
      if (valid) { return await Event.transformStage(stage, context); }
    }));

    event.stages = event.stages.filter(stage => {
      return stage != null;
    });

    event.actorIDs = {};
    each(event.actors, (value, key) => {
      event.actorIDs[key] = context.get(key).character.id;
    });
    each(queuedEvent.state.actors||{}, (id, key) => {
      event.actorIDs[key] = context.get(key).character.id;
    });
  }

  static async transformStage(stage, context) {
    if (stage.pages) { return await Event.transformPages(stage, context); }
    if (stage.selectionPage) { return Event.transformSelectionPage(stage, context); }

    // No transformation needed.
    return stage;
  }

  static async transformPages(stage, context) {
    stage.pages = await Promise.all(stage.pages.map(async page => {
      const valid = await CentralScrutinizer.meetsRequirements(page.requires, context);
      if (valid) { return Event.transformPage(page, context) }
    }));

    stage.pages = stage.pages.filter(page => {
      return page != null;
    });

    return stage;
  }

  // When a page is transformed we set the caption on the page frame for the player or a minion if either is speaking.
  // We do any automatic page styling such as applying styles around quotes, and we also transform the effects array if
  // it's present.
  //
  // TODO: Eventually I'd like to show the character portraits as well as their names. Need to get the portraits in a
  //       working state first though.
  static transformPage(page, context) {
    page.text = Weaver.weave(page.text, context);

    if (page.playerSpeaker) { page.playerSpeaker = context.get('P').character.firstName; }
    if (page.actorSpeaker)  { page.otherSpeaker  = context.get(page.actorSpeaker).character.firstName; }
    if (page.effects)       { page.effects = Event.transformEffects(page.effects, context); }

    page.text = QuoteTransformer.run(page.text, { speaker:(page => {
      if (page.otherSpeaker != null) { return 'other'; }
      if (page.playerSpeaker != null) { return 'player'; }
      return null;
    })(page) });

    if (page.narratorSpeaker) {
      page.text = `<span class='narrator-quote'>${page.text}</span>`;
    }

    return page;
  }



  static transformSelectionPage(stage, context) {
    for (let i=0; i<stage.selections.length; i++) {
      stage.selections[i].text = Weaver.weave(stage.selections[i].text, context);
      stage.selections[i].effects = Event.transformEffects(stage.selections[i].effects, context);
    }
    return stage;
  }

  // When a page or a selection has an array of effects they need to be transformed so that the actors that are defined
  // in the event can be found by the engine when the effects are applied. An effect written in the effect strang
  // format as ['actor(M) masochist 1'] needs to become ['6 masochist 1'], replacing the context style M in this case,
  // with the actual character ID. A strang like ['player sadist 1'] though can stay the same because the
  // CharacterAgent knows how to find the player.
  static transformEffects(effects, context) {
    return (effects||[]).map(strang => {
      let match = strang.match(/actor\((.+)\)/);
      return match ? strang.replace(/actor\(.+\)/,context.get(match[1]).character.id) : strang;
    });
  }

}
