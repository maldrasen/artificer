global.Event = class Event extends Form {

  static async onFinish(choices) {
    const code = choices.event.code;
    const flag = await Flag.lookup(`completed.${code}`);

    (flag == null) ?
      (await Flag.create({ code:`completed.${code}`, value:1 })):
      (await Flag.set(flag.code, 1 + parseInt(flag.value)));

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
      await event.onStart();
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
      const valid = await CentralScrutinizer.meetsRequirements(stage.requires, context);
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

  static transformPage(page, context) {
    page.text = Weaver.weave(page.text, context);

    // Set the caption on the page frame for the player or a minion if either is speaking.
    if (page.playerSpeaker) { page.playerSpeaker = context.get('P').character.firstName; }
    if (page.minionSpeaker) { page.minionSpeaker = Weaver.weave(page.minionSpeaker, context); }

    return page;
  }

  // The selection page undergoes two significant transformations. First the selection text has to go through the
  // weaver for the standard text interpolation. Second the selection effect strangs need to have the actor indicators
  // replaced with their character ID, such that this:
  //    { text:`Kick {{S::gender.him}} in the balls.`, value:'kick', effects:['actor(M) masochist 1']},
  //
  // Becomes:
  //    { text:`Kick him in the balls.`, value:'kick', effects:['6 masochist 1']},
  //
  // Sorry, this is all just nasty.
  static transformSelectionPage(stage, context) {
    for (let i=0; i<stage.selections.length; i++) {
      stage.selections[i].text = Weaver.weave(stage.selections[i].text, context);
      for (let j=0; j<(stage.selections[i].effects||[]).length; j++) {
        let strang = stage.selections[i].effects[j];
        let match = strang.match(/actor\((.+)\)/);
        if (match) {
          stage.selections[i].effects[j] = strang.replace(/actor\(.+\)/,context.get(match[1]).character.id);
        }
      }
    }

    return stage;
  }

}
