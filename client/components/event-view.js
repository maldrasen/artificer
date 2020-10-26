Components.EventView = (function() {
  let eventData;
  let stageIndex;
  let choices;

  let skipActive = false;
  let skipContinue = false;
  let skipRate = 50;

  function init() {
    $(document).on('click', '#currentEvent .click-advance', clickAdvance);
    $(document).on('click', '#currentEvent .activate-skip', Elements.buttonAction(activateSkip));

    // Components.EventView.ChooserPage.init();
    // Components.EventView.SelectionPage.init();
  }

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

    buildStage();

    //     if (event.settingCard) {
    //       showSettingCard(event.settingCard.time, event.settingCard.place);
    //     }
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

    // Stage Building
    Elements.Effects.setBackground(stage.background);
    // if (stage.setChoice) { updateChoices(stage.setChoice); }

    // These views can be skipped through.
    if (stage.pages) { return Components.EventPagedView.build(stage); }

    // The following views cannot be skipped but skipping should continue
    // after the choice has been made or the form is submitted or whatever.
    if (skipActive) {
      skipActive = false;
      skipContinue = true;
    }

    // if (stage.chooserPage)   { return Components.EventView.ChooserPage.build(); }
    // if (stage.selectionPage) { return Components.EventView.SelectionPage.build(); }
    if (stage.formPage) { return Components.EventFormPage.load(stage.formPage); }

    throw "Unrecognized Stage Type"
  }

  // Once a stage is complete we continue on to the sext stage. If there are no
  // more stages then the event is ended.
  function nextStage() {
    if (skipContinue) {
      skipActive = true;
      skipContinue = false;
    }
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

  //   function setStage(id) {
  //     let index = eventData.stages.map(s => { return s.id }).indexOf(id);
  //     if (index < 0) {
  //       throw `There is no stage with ID:${id}`;
  //     }
  //     stageIndex = index;
  //     closeStage();
  //     buildStage();
  //   }

  // TODO: I need to verify that all these event elements are being used still.
  //       Also, why are they being emptied as well as hidden?
  function closeStage() {
    $('#currentEvent .chooser-content').addClass('hide');
    $('#currentEvent .event-text-frame').addClass('hide');
    $('#currentEvent .event-text-actions').addClass('hide');
    $('#currentEvent .click-advance').addClass('hide');
    $('#currentEvent .custom-content').addClass('hide');
  }

  function currentStage() {
    return eventData.stages[stageIndex];
  }

  function endEvent() {
    if (skipActive) {
      skipActive = false;
      skipContinue = true;
    }
    Elements.Effects.removeBackground();
    Renderer.sendCommand('game.end-event',choices);
  }

  // === Pageing Behavior ===

  function clickAdvance() {
    skipActive = false;
    Components.EventPagedView.nextPage();
  }

  function activateSkip() {
    skipActive = true;
    doSkip();
  }

  function continueSkip() {
    if (skipContinue) {
      skipActive = true;
      skipContinue = false;
    }
    if (skipActive) { doSkip(); }
  }

  function stopSkip() {
    skipActive = false;
  }

  function doSkip() {
    setTimeout(()=>{
      if (skipActive) {
        Components.EventPagedView.nextPage();
        doSkip();
      }
    },skipRate);
  }

  // === Choices ===
  function getChoices() { return choices; }
  function setChoice(key,value) { choices[key] = value; }
  function updateChoices(map) { choices = Object.assign(choices,map); }

  // function getEventData() { return eventData; }
  // function getActors() { return eventData.actors; }
  // function isOpen() { return $('#currentEvent').length > 0; }

  return {
    init,
    build,
    nextStage,
    continueSkip,
    getChoices,
    setChoice,
    updateChoices,
  };

})();


//
//
//
//   // Build the next stage from a stage object. There are a whole fuck ton of
//   // page types, each of which have their own options and have to be documented
//   // separately.
//   function buildStage() {
//     let stage = currentStage();
//
//     // Stage Building
//     if (stage.background != null) { setBackground(stage.background); }
//     if (stage.setChoice) { updateChoices(stage.setChoice); }
//
//     // These views can be skipped through.
//     if (stage.pages) { return buildPagedView(); }
//
//     // The following views cannot be skipped but skipping should continue
//     // after the choice has been made or the form is submitted or whatever.
//     if (skipActive) {
//       skipActive = false;
//       skipContinue = true;
//     }
//
//     if (stage.chooserPage)   { return Components.EventView.ChooserPage.build(); }
//     if (stage.selectionPage) { return Components.EventView.SelectionPage.build(); }
//     if (stage.formPage)      { return Components.EventView.FormPage.load(stage.formPage); }
//
//     throw "Unrecognized Stage Type"
//   }
//
//   function nextStage() {
//     if (skipContinue) {
//       skipActive = true;
//       skipContinue = false;
//     }
//     if (stageIndex < eventData.stages.length-1) {
//       closeStage();
//       stageIndex += 1;
//       validateStage() ? buildStage() : nextStage()
//     } else {
//       endEvent();
//     }
//   }
//
//   // Check to see if the current stage is valid. A stage can have a choice
//   // object that specifies that this stage should only be shown when a specific
//   // choice has been made.
//   function validateStage() {
//     let stage = currentStage();
//     let valid = true;
//
//     each(Object.keys(stage.choice||{}), key => {
//       if (stage.choice[key] != choices[key]) { valid = false; }
//     });
//
//     return valid;
//   }
//
//   function setStage(id) {
//     let index = eventData.stages.map(s => { return s.id }).indexOf(id);
//     if (index < 0) {
//       throw `There is no stage with ID:${id}`;
//     }
//     stageIndex = index;
//     closeStage();
//     buildStage();
//   }
//
//   function closeStage() {
//     $('#currentEvent .chooser-content').addClass('hide');
//     $('#currentEvent .event-text-frame').addClass('hide');
//     $('#currentEvent .event-text-actions').addClass('hide');
//     $('#currentEvent .click-advance').addClass('hide');
//     $('#currentEvent .custom-content').addClass('hide');
//   }
//
//   function nextPage() {
//     if (currentStage().pages && pageIndex < currentStage().pages.length-1) {
//       pageIndex += 1;
//       buildPage();
//     } else {
//       pageIndex = 0;
//       nextStage();
//     }
//   }
//
//   function currentStage() {
//     return eventData.stages[stageIndex];
//   }
//
//
//   function getPageText(stage,page) {
//     try {
//       return eventData.stages[stage].pages[page].text;
//     } catch(e) { return null;}
//   }
//
//   function setPageText(stage,page,text) {
//     try {
//       eventData.stages[stage].pages[page].text = text;
//     } catch(e) {}
//   }
//
//   function showSettingCard(time, place) {
//     skipActive = false;
//     skipContinue = false;
//
//     const card = $('<div>').append(`<h1>${place}, ${time}</h1>`);
//     const settingCard = $('#currentEvent .setting-card').removeClass('hide').append(card)
//
//     if (DEBUG) { card.append(`<pre>${eventData.code}</pre>`) }
//
//     setTimeout(() => { settingCard.addClass('fade-out'); },0);
//     setTimeout(() => { settingCard.addClass('hide'); },4000);
//   }
//
//
//   // === Effects ===
//
//   function showCenterImage(url) {
//     $('#currentEvent .center-image-frame').removeClass('hide');
//     $('#currentEvent .center-image').css({ "background-image":`url(${url})`, filter:'' });
//   }
//
//   function hideCenterImage() {
//     $('#currentEvent .center-image-frame').addClass('hide');
//   }
//
//   function setBackground(argument) {
//     Elements.ImageResource.loadBackground('#currentEvent .full-screen-background',argument);
//   }
//
//   function darkenBackground(value) {
//     $('#currentEvent .full-screen-background').css({filter:`brightness(${100-value}%)`});
//   }
//
//   // === Choices ===
//
//   function getEventData() { return eventData; }
//   function getActors() { return eventData.actors; }
//   function getChoices() { return choices; }
//   function setChoice(key,value) { choices[key] = value; }
//   function updateChoices(map) { choices = extend(choices,map); }
//   function isOpen() { return $('#currentEvent').length > 0; }
//
//   return {
//     init,
//     build,
//     stopSkip,
//
//     getEventData,
//     getActors,
//     getChoices,
//     setChoice,
//     updateChoices,
//
//     currentStage,
//     nextStage,
//     setStage,
//
//     getPageText,
//     setPageText,
//
//     setBackground,
//     isOpen,
//   };
//
// })();
