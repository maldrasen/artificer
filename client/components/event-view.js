Components.EventView = (function() {
  let skipActive = false;
  let skipRate = 50;

  let eventData;
  let stageIndex;
  let pageIndex;
  let choices;

  function init() {
    $(document).on('click', '#currentEvent .click-advance', clickAdvance);
    $(document).on('click', '#currentEvent .activate-skip', Elements.buttonAction(activateSkip));
    $(document).on('click', '#currentEvent .chooser-accept', Elements.buttonAction(acceptChoice));
    $(document).on('click', '#currentEvent .selection-button', Elements.buttonAction(acceptSelection));
    $(document).on('click', '#genderFormPage .accept', Elements.buttonAction(Components.EventView.GenderForm.accept));
    $(document).on('click', '#nameFormPage .accept', Elements.buttonAction(Components.EventView.NameForm.accept));
    $(document).on('click', '#sexualityFormPage .accept', Elements.buttonAction(Components.EventView.SexualityForm.accept));
    $(document).on('click', '#warningFrame .close',Elements.buttonAction(Components.EventView.Warning.accept));
  }

  // Build an event given all of the event options. Options:
  //
  //   actors             Map of actors used in the event. The object keys are the subjects for the Weaver. The object
  //                      values are used by the CharacterAgent to lookup the specified character.
  //
  //   background         (Obsolete, to be replace with something for the image resource loader. Also darkenBackground,
  //                      should only be done on a stage or page.)
  //
  //   location           Used to indicate that this is a location event. Location events are only started when the
  //                      player go to that location and starts the event manually.
  //
  //   onStart            Function run when the event starts.
  //
  //   onFinish           Function run when the event is finished. Called with the choices object.
  //
  //   requires           A requirement or list of requirement that must be met before the event can be enqueued.
  //                      Requirements are strings interpreted by the CentralScrutinizer.
  //
  //   stages             Stage Data. It's complicated, so documented below.
  //
  //   time               Specify the time that this events happen. Can be set to morning or afternoon. Only one
  //                      morning or afternoon event can be run each day.
  //
  function build(transport, event) {
    Components.EventView.Page = {};

    skipActive = false;
    choices = { event:event.code };
    eventData = event;
    stageIndex = 0;
    pageIndex = 0;

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    if (event.background != null) { setBackground(event.background); }
    if (event.darkenBackground != null) { darkenBackground(event.darkenBackground); }

    buildStage();
  }

  function clickAdvance() {
    skipActive = false;
    nextPage();
  }

  function activateSkip() {
    skipActive = true;
    doSkip();
  }

  function doSkip() {
    setTimeout(()=>{
      if (skipActive) {
        nextPage();
        doSkip();
      }
    },skipRate);
  }

  function endEvent() {
    skipActive = false;
    Renderer.sendCommand('game.end-event',choices);
  }

  // Build the next stage from a stage object. Global stage options include:
  //
  //    background (obsolete)
  //
  // Otherwise there are a whole fuck ton of other page types, each of which
  // have their own options and have to be documented separately.
  function buildStage() {
    let stage = currentStage();

    // Stage Building
    if (stage.background != null) { setBackground(stage.background); }

    // These views can be skipped through.
    if (stage.pages) { return buildPagedView(); }

    // These views cannot be skipped through.
    skipActive = false;
    if (stage.chooserPage)       { return buildChooserPage();   }
    if (stage.selectionPage)     { return buildSelectionPage(); }
    if (stage.customPage)        { return buildCustomPage();    }
    if (stage.genderFormPage)    { return Components.EventView.GenderForm.build();    }
    if (stage.nameFormPage)      { return Components.EventView.NameForm.build();      }
    if (stage.warningPage)       { return Components.EventView.Warning.build();       }
    if (stage.sexualityFormPage) { return Components.EventView.SexualityForm.build(); }
    throw "Unrecognized Stage Type"
  }

  function nextStage() {
    if (stageIndex < eventData.stages.length-1) {
      stageIndex += 1;
      closeStage();
      buildStage();
    } else {
      endEvent();
    }
  }

  function setStage(id) {
    let index = eventData.stages.map(s => { return s.id }).indexOf(id);
    if (index < 0) {
      throw `There is no stage with ID:${id}`;
    }
    stageIndex = index;
    closeStage();
    buildStage();
  }

  function closeStage() {
    $('#currentEvent .chooser-content').addClass('hide');
    $('#currentEvent .event-text-frame').addClass('hide');
    $('#currentEvent .event-text-actions').addClass('hide');
    $('#currentEvent .click-advance').addClass('hide');
    $('#currentEvent .custom-content').addClass('hide');
  }

  function nextPage() {
    if (currentStage().pages && pageIndex < currentStage().pages.length-1) {
      pageIndex += 1;
      buildPage();
    } else {
      pageIndex = 0;
      nextStage();
    }
  }

  function currentStage() {
    return eventData.stages[stageIndex];
  }

  function currentPage() {
    return (currentStage().pages||[])[pageIndex];
  }

  function getPageText(stage,page) {
    try {
      return eventData.stages[stage].pages[page].text;
    } catch(e) { return null;}
  }

  function setPageText(stage,page,text) {
    try {
      eventData.stages[stage].pages[page].text = text;
    } catch(e) {}
  }

  // === Paged View ===

  function buildPagedView() {
    $('#currentEvent .event-text-frame').removeClass('hide');
    $('#currentEvent .event-text-actions').removeClass('hide');
    $('#currentEvent .click-advance').removeClass('hide');
    buildPage();
  }

  function buildPage() {
    let page = currentPage();
    if (page.background != null) { setBackground(page.background); }
    if (page.darkenBackground != null) { darkenBackground(page.darkenBackground); }
    if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
    if (page.hideCenterImage) { hideCenterImage(); }

    showSpeaker(page.minionSpeaker, page.playerSpeaker)
    showNotification(page.notification);

    $('#currentEvent .event-text-frame').empty().append(page.text)
  }

  function showSpeaker(minionName, playerName) {
    let speaker = $('#currentEvent .event-text-speaker').empty().addClass('hide').removeClass('minion').removeClass('player');
    if (minionName) { speaker.removeClass('hide').addClass('minion').append(minionName); }
    if (playerName) { speaker.removeClass('hide').addClass('player').append(playerName); }
  }

  // === Chooser Pages ===

  // A chooser page has the following arguments on the stage:
  //     chooserTitle: (*) Title
  //     choices:      (*) List of choices with the following attributes:
  //       - value:    (*) value to set.
  //       - label:    (*) label name,
  //       - body:     (*) choice description,
  //       - image:    (*) image path,
  //       - locked:   Show the option, but make it non-selectable.
  //     text:         Text to display in the footer.
  //     name:         Name under which to save the chosen value.
  //
  //     onAccept:     A named function called with the chosen value when the choice is accepted. We can't just stick a
  //                   actual accept function onto the page because the page data is coming from the engine and run in
  //                   the client, and functions can't be safely serialized and deserialized (at least I don't think
  //                   they can.)
  //
  //                   Events that are called onAccet are therefor stored on the chooser component and called by name.
  //                   Mods that add onAccept functions will just need to add the functions onto the
  //                   Elements.Chooser.OnAcceptFunctions object when their mod is loaded in the client. When adding an
  //                   onAccept function the function name should be prefixed with the event code.
  //
  //                   An onAccept function needs to select the next stage. The entire reason for including it is so
  //                   choices made in the chooser can show a different stage depending on the choice made.
  //
  function buildChooserPage() {
    let stage = currentStage();
    let content = $('#currentEvent .chooser-content').empty().removeClass('hide').append($($("#chooserPageTemplate").html()));

    stage.chooser = new Elements.Chooser({
      title: stage.chooserTitle,
      element: $('#currentEvent .chooser-target'),
      height: (stage.chooserHeight || 500),
      width: (stage.chooserWidth || 800),
      imageWidth: (stage.imageWidth || 500),
    });

    each(stage.choices, choice => {
      stage.chooser.addChoice(choice);
    });

    content.find('.chooser-frame').css({ width:(stage.chooserWidth || 800) });
    content.find('.text').append(stage.text);
  }

  // === Selection Page ===
  // Selection Pages are for normal multiple choice options in an event.
  // Selection can have effect badges which can be displayed on the selection.
  // They are created like this:
  //
  //   selectionPage: true,
  //   selectionKey: 'question',
  //   selections:[
  //     { text:'Yes.', value:'no',   effects:{ 'fear':'+' }},
  //     { text:'No.',  value:'yes',  effects:{ 'loyal':'++' }},

  function buildSelectionPage() {
    $('#currentEvent .selection-content').removeClass('hide');
    each(currentStage().selections, selection => {
      $('#currentEvent .selection-list').append(buildSelection(selection));
    });
  }

  function buildSelection(selection) {
    let badges = $('<span>', { class:'badges' })
    let button = $('<a>',{ href:'#', class:'button selection-button' }).append(
      $('<span>',{ class:'text' }).append(selection.text)
    ).data('value',selection.value).append(badges);

    each(selection.effects, (value, key) => {
      badges.append($('<span>',{ class:'badge' }).append(key).append(value))
    });

    return $('<li>',{ class:'selection'}).append(button);
  }

  function acceptSelection() {
    choices[currentStage().selectionKey] = $(this).data('value')
    $('#currentEvent .selection-content').addClass('hide');
    $('#currentEvent .selection-list').empty();
    nextStage();
  }

  // === Custom Pages ===

  function buildCustomPage() {
    let stage = currentStage();

    $('#currentEvent .custom-content').removeClass('hide').empty().append($(stage.html));

    if (stage.clickAdvance) {
      $('#currentEvent .click-advance').removeClass('hide');
    }
  }

  // === Choices ===
  // The choices object is updated as the event progresses. When the event is
  // complete the choices the player has made are send to the engine.

  function acceptChoice() {
    let stage = currentStage();
    let value = stage.chooser.selectedValue;
    if (stage.name) { choices[stage.name] = value; }
    stage.onAccept == null ? nextStage() : Elements.Chooser.OnAcceptFunctions[stage.onAccept](value);
  }

  function updateChoices(map) { choices = extend(choices,map); }
  function getChoices() { return choices; }

  // === Effects ===

  function showCenterImage(url) {
    $('#currentEvent .center-image-frame').removeClass('hide');
    $('#currentEvent .center-image').css({ "background-image":`url(${url})`, filter:'' });
  }

  function hideCenterImage() {
    $('#currentEvent .center-image-frame').addClass('hide');
  }

  function showNotification(notification) {
    if (notification) {
      $('#currentEvent .notification-frame').removeClass('hide');
      $('#currentEvent .notification').empty().append(notification);
    } else {
      $('#currentEvent .notification-frame').addClass('hide');
    }
  }

  function setBackground(url) {
    $('#currentEvent .full-screen-background').css({ "background-image":`url(${url})`, filter:'' });
  }

  function darkenBackground(value) {
    $('#currentEvent .full-screen-background').css({filter:`brightness(${100-value}%)`});
  }

  return {
    init,
    build,
    nextStage,
    setStage,
    getPageText,
    setPageText,
    updateChoices,
    getChoices,
    setBackground,
  };

})();
