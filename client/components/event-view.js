Components.EventView = (function() {
  const logger = new Logger('EventView', 'rgb(190,150,200)');

  let eventData;
  let stageIndex;
  let pageIndex;
  let choices;

  function init() {
    $(document).on('click', '#currentEvent .click-advance', nextPage);
    $(document).on('click', '#currentEvent .chooser-accept', Elements.buttonAction(acceptChoice));
    $(document).on('click', '#currentEvent .gender-accept', Elements.buttonAction(Components.EventView.GenderForm.accept));
    $(document).on('click', '#currentEvent .name-accept', Elements.buttonAction(Components.EventView.NameForm.accept));
    $(document).on('click', '#currentEvent .close-warning',Elements.buttonAction(Components.EventView.Warning.accept));
    $(document).on('click', '#gameTitleFrame',Elements.buttonAction(Components.EventView.Splash.complete));
  }

  function build(transport, event) {
    Components.EventView.Page = {};

    eventData = event;
    stageIndex = 0;
    pageIndex = 0;
    choices = {};

    if (event.background != null) { setBackground(event.background); }
    if (event.darkenBackground != null) { darkenBackground(event.darkenBackground); }
    if (event.pageScript != null) { require(event.pageScript); }

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    buildStage();
  }

  function buildStage() {
    let stage = currentStage();
    if (stage.pages)          { return buildPagedView();   }
    if (stage.chooserPage)    { return buildChooserPage(); }
    if (stage.genderFormPage) { return Components.EventView.GenderForm.build(); }
    if (stage.nameFormPage)   { return Components.EventView.NameForm.build();   }
    if (stage.splashPage)     { return Components.EventView.Splash.build();     }
    if (stage.warningPage)    { return Components.EventView.Warning.build();    }
    throw "Unrecognized Stage Type"
  }

  function nextStage() {
    if (stageIndex < eventData.stages.length-1) {
      stageIndex += 1;
      buildStage();
    } else {
      console.log("No more stages.")
    }
  }

  function setStage(id) {
    let index = eventData.stages.map(s => { return s.id }).indexOf(id);
    if (index < 0) {
      throw `There is no stage with ID:${id}`;
    }
    stageIndex = index;
    buildStage();
  }

  function nextPage() {
    if (pageIndex < currentStage().pages.length-1) {
      pageIndex += 1;
      buildPage();
    } else {
      pageIndex = 0;
      $('#currentEvent .event-text-frame').addClass('hide');
      $('#currentEvent .click-advance').addClass('hide');
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
    $('#currentEvent .click-advance').removeClass('hide');
    buildPage();
  }

  function buildPage() {
    let page = currentPage();
    if (page.background != null) { setBackground(page.background); }
    if (page.darkenBackground != null) { darkenBackground(page.darkenBackground); }
    $('#currentEvent .event-text-frame').empty().append(page.text)
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
  //     onAccept:     Calls a function in Components.EventView.Page with the
  //                   chosen value when the choice is accepted.
  function buildChooserPage() {
    let stage = currentStage();
    let content = $('#currentEvent .chooser-content').removeClass('hide').append($($("#chooserPageTemplate").html()));

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

  function acceptChoice() {
    let stage = currentStage();
    let value = stage.chooser.selectedValue;

    if (stage.name) { choices[stage.name] = value }
    if (stage.onAccept) { Components.EventView.Page[stage.onAccept](value); }
    $('#currentEvent .chooser-content').empty().addClass('hide');
    if (stage.onAccept == null) { nextStage(); }
  }

  function updateChoices(map) { choices = extend(choices,map); }
  function getChoices() { return choices; }

  // === Effects ===

  function setBackground(url) {
    $('.full-screen-background').css({ "background-image":`url(${url})`, filter:'' });
  }

  function darkenBackground(value) {
    $('.full-screen-background').css({filter:`brightness(${100-value}%)`});
  }

  return {
    init: init,
    build: build,
    nextStage: nextStage,
    setStage: setStage,
    getPageText: getPageText,
    setPageText: setPageText,
    updateChoices: updateChoices,
    getChoices: getChoices,
    setBackground: setBackground,
  };

})();
