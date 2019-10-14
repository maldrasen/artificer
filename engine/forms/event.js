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

    Event._transformEvent(event, context);

    return event;
  }

  // === Event Transformation  ===

  static _transformEvent(event, context) {
    let transformedStages = [];

    each(event.stages, stage => {
      if (SynchronizedScrutinizer.meetsRequirements(stage.requires, context.properties)) {
        Event._transformStage(stage, context)
        transformedStages.push(stage);
      }
    });

    event.stages = transformedStages;
  }

  static _transformStage(stage, context) {
    if (stage.pages) {
      let transformedPages = [];

      each(stage.pages, page => {
        if (page.text && SynchronizedScrutinizer.meetsRequirements(page.requires, context.properties)) {
          page.text = Weaver.weave(page.text, context);

          // Set the caption on the page frame for the player or a minion if either is speaking.
          if (page.playerSpeaker) { page.playerSpeaker = context.get('P').character.firstName; }
          if (page.minionSpeaker) { page.minionSpeaker = Weaver.weave(page.minionSpeaker, context); }

          transformedPages.push(page);
        }
      });

      stage.pages = transformedPages;
    }
  }

}
