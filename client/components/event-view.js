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
  }

  // Build an event given all of the event options. All of the event options
  // are described in detail on the Wiki now.
  function build(transport, event) {
    Components.EventView.Page = {};

    skipActive = false;
    eventData = event;
    stageIndex = 0;
    pageIndex = 0;

    choices = { event:{
      code: event.code,
      actorIDs: event.actorIDs
    }};

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    if (event.background != null) { setBackground(event.background); }
    if (event.darkenBackground != null) { darkenBackground(event.darkenBackground); }

    buildStage();

    if (event.settingCard) {
      showSettingCard(event.settingCard.time, event.settingCard.place);
    }
  }

  function clickAdvance() {
    skipActive = false;
    nextPage();
  }

  function activateSkip() {
    skipActive = true;
    doSkip();
  }

  function stopSkip() {
    skipActive = false;
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

  // Build the next stage from a stage object. There are a whole fuck ton of
  // page types, each of which have their own options and have to be documented
  // separately.
  function buildStage() {
    let stage = currentStage();

    // Stage Building
    if (stage.background != null) { setBackground(stage.background); }
    if (stage.setChoice) { updateChoices(stage.setChoice); }

    // These views can be skipped through.
    if (stage.pages) { return buildPagedView(); }

    // These views cannot be skipped through.
    skipActive = false;
    if (stage.chooserPage)   { return buildChooserPage(); }
    if (stage.selectionPage) { return buildSelectionPage(); }

    // So far, all of the custom views fall under form pages.
    if (stage.formPage) { return Components.EventView.FormPage.load(stage.formPage); }

    throw "Unrecognized Stage Type"
  }

  function nextStage() {
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

  function showSettingCard(time, place) {
    const card = $('<div>').append(`<h1>${place}, ${time}</h1>`);
    const settingCard = $('#currentEvent .setting-card').removeClass('hide').append(card)

    if (DEBUG) { card.append(`<pre>${eventData.code}</pre>`) }

    setTimeout(() => { settingCard.addClass('fade-out'); },0);
    setTimeout(() => { settingCard.addClass('hide'); },4000);
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
    if (page.alert) { Alerts.showAlert(page.alert); }
    if (page.background != null) { setBackground(page.background); }
    if (page.darkenBackground != null) { darkenBackground(page.darkenBackground); }
    if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
    if (page.hideCenterImage) { hideCenterImage(); }
    if (page.effects) { applyPageEffects(page.effects); }

    showSpeaker(page.otherSpeaker, page.playerSpeaker)
    appendToBacklog(page);

    $('#currentEvent .event-text-frame').empty().append(page.text)

    // After the page has been displayed it's possible for the event to make some adjustments to the text, usually in
    // response to some choice made within this same event, but not consequential to make it an entire branch. These
    // functions have to be referenced by code and kept in the Components.EventView.PageFunctions object because the
    // events are defined in the engine, but these functions are called by the client.
    if (page.onShow) { Components.EventView.PageFunctions[page.onShow](choices); }
  }

  function appendToBacklog(page) {
    if (page.text && page.text.length > 0) {
      let options = {}
      if (page.playerSpeaker) { options.player = page.playerSpeaker; }
      if (page.otherSpeaker)  { options.actor = page.otherSpeaker;   }
      Components.Backlog.append(page.text, options);
    }
  }

  function showSpeaker(otherName, playerName) {
    let speaker = $('#currentEvent .event-text-speaker').empty().addClass('hide').removeClass('other').removeClass('player');
    if (otherName) { speaker.removeClass('hide').addClass('other').append(otherName); }
    if (playerName) { speaker.removeClass('hide').addClass('player').append(playerName); }
  }

  function applyPageEffects(effects) {
    each(effects, strang => {
      new Adjustment(strang, eventData.actorIDs).execute();
    });
  }

  // === Chooser Pages ===

  // A chooser page has the following arguments on the stage:
  //     chooserTitle:       (*) Title
  //     options:            (*) List of choice options with the following attributes:
  //       - value:          (*) value to set.
  //       - label:          (*) label name,
  //       - body:           (*) choice description,
  //       - imageResource:  (*) image resource loader arguments,
  //       - locked:         Show the option, but make it non-selectable.
  //
  //       (choices can also be a string like "gender-choices" or "species-choices", in which case a function will be
  //        called to fetch the list from some canned function defined by a mod.)
  //
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
    let options = (typeof stage.options === 'string') ? Elements.Chooser.OptionsFunctions[stage.options](choices) : stage.options;

    stage.chooser = new Elements.Chooser({
      title: stage.chooserTitle,
      element: $('#currentEvent .chooser-target'),
      height: (stage.chooserHeight || 500),
      width: (stage.chooserWidth || 800),
      imageWidth: (stage.imageWidth || 500),
    });

    each(options, option => {
      stage.chooser.addChoice(option);
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
  //     { text:'Yes.', value:'yes', effects:['player fucks-horses 2']},
  //     { text:'No.',  value:'no',  effects:['player fucks-horses -1'], tooltip:"Tooltip Yo" },

  function buildSelectionPage() {
    $('#currentEvent .selection-content').removeClass('hide');
    each(currentStage().selections, selection => {
      $('#currentEvent .selection-list').append(buildSelection(selection));
    });
  }

  function buildSelection(selection) {
    let badges = $('<span>', { class:'badge-area' })
    let button = $('<a>',{ href:'#', class:'button selection-button' }).append(
      $('<span>',{ class:'text' }).append(selection.text)
    ).data('value',selection.value).append(badges);

    if (selection.tooltip) {
      Elements.Tooltip.add(button, { content:selection.tooltip, delay:50 });
      button.on('click',Elements.Tooltip.close);
    }

    each(selection.effects, strang => {
      button.addClass('with-badges');
      badges.append(new Elements.SelectionBadge(strang, eventData.actors).build());
    });

    return $('<li>',{ class:'selection'}).append(button);
  }

  function acceptSelection() {
    choices[currentStage().selectionKey] = $(this).data('value');

    $.each($(this).find('.adjustment-badge'), (i, badgeElement) => {
      $(badgeElement).data('badge').execute();
    });

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

  function setBackground(argument) {
    Elements.ImageResource.loadBackground('#currentEvent .full-screen-background',argument);
  }

  function darkenBackground(value) {
    $('#currentEvent .full-screen-background').css({filter:`brightness(${100-value}%)`});
  }

  function isOpen() {
    return $('#currentEvent').length > 0;
  }

  return {
    init,
    build,
    stopSkip,
    nextStage,
    setStage,
    getPageText,
    setPageText,
    updateChoices,
    getChoices,
    setBackground,
    isOpen,
  };

})();

Components.EventView.PageFunctions = {};
