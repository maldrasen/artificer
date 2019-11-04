global.Event = class Event extends Form {

  static async onFinish(choices) {
    let finishFunction = Event.lookup(choices.event).onFinish;
    if (finishFunction) {
      await finishFunction(choices);
    }
  }

  // Before an event can be rendered in the browser it needs to be prepared.
  // This function will to all of the token and path replacement in the event
  // stages.
  static async prepare(queuedEvent) {
    const event = Event.lookup(queuedEvent.code).properties;
    const context = new WeaverContext();
    await context.setEvent(event);

    await Event.transformEvent(event, context);

    return event;
  }

  // === Event Transformation  ===

  static async transformEvent(event, context) {
    event.stages = await Promise.all(event.stages.map(async stage => {
      const valid = await CentralScrutinizer.meetsRequirements(stage.requires, context);
      if (valid) { return await Event.transformStage(stage, context); }
    }));

    event.stages = event.stages.filter(stage => {
      return stage != null;
    });
  }

  static async transformStage(stage, context) {
    if (stage.pages) {
      stage.pages = await Promise.all(stage.pages.map(async page => {
        const valid = await CentralScrutinizer.meetsRequirements(page.requires, context);
        if (valid) { return Event.transformPage(page, context) }
      }));

      stage.pages = stage.pages.filter(page => {
        return page != null;
      });
    }

    return stage;
  }

  static transformPage(page, context) {
    page.text = Weaver.weave(page.text, context);

    // Set the caption on the page frame for the player or a minion if either is speaking.
    if (page.playerSpeaker) { page.playerSpeaker = context.get('P').character.firstName; }
    if (page.minionSpeaker) { page.minionSpeaker = Weaver.weave(page.minionSpeaker, context); }

    return page;
  }

}
