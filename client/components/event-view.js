Components.EventView = (function() {
  const logger = new Logger('EventView', 'rgb(190,150,200)');

  let eventData;
  let stageIndex;
  let pageIndex;

  function init() {
    $(document).on('click', '.click-advance', nextPage);

    $(document).on('click','.close-warning',Elements.buttonAction(() => {
      $('#warningFrame').remove();
      nextStage();
    }));
  }

  function build(transport, event) {
    eventData = event;
    stageIndex = 0;
    pageIndex = 0;

    if (event.background != null) { setBackground(event.background); }
    if (event.darkenBackground != null) { darkenBackground(event.darkenBackground); }

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    buildStage();

  }

  function buildStage() {
    let stage = currentStage();
    if (stage.pages) { return buildPagedView(); }
    if (stage.warningPage) { return buildWarningPage(); }
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

  // === Effects ===

  function setBackground(url) {
    $('.full-screen-background').css({ "background-image":`url(${url})`, filter:'' });
  }

  function darkenBackground(value) {
    $('.full-screen-background').css({filter:`brightness(${100-value}%)`});
  }

  // === Special Pages ===

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

  // The warning page is essentially a javascript alert. It shows a message that
  // must be dismissed by pressing the button. I don't think this is used
  // anywhere but the first page of the first event.
  function buildWarningPage() {
    let warningMessage = $('<div>',{ class:'warning-message' }).append(`
      <span class="fg-danger">Warning.</span> The main character of Artificer is an extremely perverse sexual sadist.
      While some of this game's most extreme content is avoidable the majority of it really isn't. If that's not your
      thing, it would probably be best to just to not play this at all. Seriously. Trust me. This shit's going to be
      fucked up.`);

    $('#currentEvent .event-content').
      append($('<div>',{ id:'warningFrame' }).
      append($('<div>',{ class:'flex' }).
      append($('<div>',{ class:'warning-image' })).
      append(warningMessage)).
      append($('<div>',{ class:'warning-footer' }).append(
        $('<a>',{ href:'#', class:'button-warning close-warning' }).append('Acknowledged'))
      ));
  }

  return {
    init: init,
    build: build,
  };

})();
