Components.EventView = (function() {
  let eventData;
  let stageIndex;
  let choices;

  function init() {}

  // Build an event given all of the event options. All of the event options
  // should be described in detail on the Wiki now.
  function build(transport, data) {
    Elements.reset();

    eventData = data;
    stageIndex = 0;

    choices = { event:{
      code: data.code,
      actorIDs: data.actorIDs
    }};

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    Elements.Effects.setBackground(eventData.background);
    Components.PagedView.setEvent(eventData);

    buildStage();
  }

  // We determine the stage type from the stage's data signature, then pass the
  // stage construction off to the proper handler. A few options are universal
  // for all stages:
  //
  //    background  -  Set the stage background image.
  //    setChoice   -  A stage can add a choice value to the choices object.
  //
  function buildStage() {
    let stage = currentStage();

    Elements.Effects.setBackground(stage.background);

    if (stage.setChoice) { updateChoices(stage.setChoice); }
    if (stage.pages) { return Components.PagedView.open(stage); }

    // If this stage isn't a paged view, we stop the page skipping. The
    // skipping should continue though after the next page though, which will
    // usually be some kind of form, selection, or other input.
    Components.PagedView.holdSkip();

    if (stage.formPage) { return Components.EventFormPage.load(stage.formPage); }

    throw "Unrecognized Stage Type"
  }

  // Once a stage is complete we continue on to the sext stage. If there are no
  // more stages then the event is ended.
  function nextStage() {
    Components.PagedView.continueSkip();
    if (stageIndex < eventData.stages.length-1) {
      closeStage();
      stageIndex += 1;
      validateStage() ? buildStage() : nextStage()
    } else {
      endEvent();
    }
  }

  // Check to see if the current stage is valid. A stage can have a choice
  // object that specifies that this stage should only be shown when a specific
  // choice has been made.
  function validateStage() {
    let stage = currentStage();
    let valid = true;

    each(Object.keys(stage.choice||{}), key => {
      if (stage.choice[key] != choices[key]) { valid = false; }
    });

    return valid;
  }

  // TODO: When is setStage called?
  //   function setStage(id) {
  //     let index = eventData.stages.map(s => { return s.id }).indexOf(id);
  //     if (index < 0) {
  //       throw `There is no stage with ID:${id}`;
  //     }
  //     stageIndex = index;
  //     closeStage();
  //     buildStage();
  //   }

  function closeStage() {
    Components.PagedView.close();
    $('#currentEvent .click-advance').addClass('hide');
    $('#currentEvent .custom-content').addClass('hide');
  }

  function currentStage() {
    return eventData.stages[stageIndex];
  }

  function endEvent() {
    Components.PagedView.holdSkip();
    Elements.Effects.removeBackground();
    Renderer.sendCommand('game.end-event',choices);
  }

  // === Choices ===
  function getChoices() { return choices; }
  function setChoice(key,value) { choices[key] = value; }
  function updateChoices(map) { choices = Object.assign(choices,map); }

  return {
    init,
    build,
    nextStage,
    getChoices,
    setChoice,
    updateChoices,
  };

})();
