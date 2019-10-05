global.Weaver = (function() {

  async function updateEvent(queuedEvent) {
    let event = Event.lookup(queuedEvent.code).properties;
    let context = await lookupContext(event);

    transformEvent(event, context);

    return event;
  }

  // We want to lookup the context in one big promise, but until the event is
  // inspected we don't know which characters need to be put into the context.
  // We therefor need to build this operations array that includes the index
  // values of the operations that the promise is going to run, because
  // Promise.all() returns the results in an array, and we need a map.
  async function lookupContext(event) {
    let index = 0;
    let operations = [
      { key:'P', index:index++, prom:lookupPlayer() },
    ];

    each((event.actors||[]), (descriptive, key) => {
      operations.push({
        key:   key,
        index: index++,
        prom:  findActor(descriptive)
      })
    });

    let context = {};
    let results = await Promise.all(operations.map(operation => { return operation.prom }));

    each(operations, operation => {
      if (results[operation.index]) {
        context[operation.key] = results[operation.index];
      }
    });

    return context;
  }

  // The lookupPlayer() function get's the player and every player bodypart.
  function lookupPlayer() {
    return new Promise(resolve => {
      Player.instance().then(player => {
        if (player == null) { resolve(null) } else {
          player.getCompleteBody().then(everything => {
            resolve(extend(everything, { character:player }));
          });
        }
      })
    });
  }

  async function findActor(descriptive) {
    let character = await CharacterAgent.findActor(descriptive);
    let everything = await character.getCompleteBody();
    return extend(everything, { character:character });
  }

  // === Event Transformation  ===

  // Part of what the weaver needs to do is transform the immutable event
  // object into an actual event based on the current game context. To do that
  // it itterates through the stages and pages here, replacing text and only
  // including the branches that have their requirements met.

  function transformEvent(event, context) {
    let transformedStages = [];

    each(event.stages, stage => {
      if (SynchronizedScrutinizer.meetsRequirements(stage.requires, context)) {
        transformStage(stage, context)
        transformedStages.push(stage);
      }
    });

    event.stages = transformedStages;
  }

  function transformStage(stage, context) {
    if (stage.pages) {
      let transformedPages = [];

      each(stage.pages, page => {
        if (page.text && SynchronizedScrutinizer.meetsRequirements(page.requires, context)) {
          page.text = weave(page.text, context)
          transformedPages.push(page);
        }
      });

      stage.pages = transformedPages;
    }
  }

  // The weave function takes a string and recursivly itterates over it,
  // looking for {{ templates }} to replace with actual values. The context
  // defines things like which actors are in which position and so forth. If
  // for instance you're having a conversation between three prople the player
  // may be {{P}}, while the other two actors might be {{1}} and {{2}}.
  //
  // I should try to put everything that will need to be looked up into the
  // context beforehand, that way this function can remain synchronous.
  function weave(text, context) {
    var working = true;

    while(working) {
      var match = text.match(/{{([^}]+)::([^}]+)}}/)
      if (match) {
        text = text.replace(match[0], findValue(match[1].trim(), match[2].trim(), context));
      }
      else {
        working = false;
      }
    }

    return text;
  }

  // Find the correct loom and delegate replacement.
  function findValue(subject, token, context) {
    // if (token.startsWith('body')) { return BodyLoom.findValue(subject, token, context); }
    if (token.startsWith('character')) { return CharacterLoom.findValue(subject, token, context); }
    // if (token.startsWith('equipment')) { return EquipmentLoom.findValue(subject, token, context); }
    if (token.startsWith('gender')) { return GenderLoom.findValue(subject, token, context); }
    // if (token.startsWith('race')) { return RaceLoom.findValue(subject, token, context); }
    return error(`BadToken(${subject}::${token})`);
  }

  function error(message) {
    return `<span class='weaver-error error'>Error(${message})</span>`;
  }

  return {
    updateEvent: updateEvent,
    weave: weave,
    error: error,
  };

})();
