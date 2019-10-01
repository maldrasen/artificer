Components.EventView = (function() {
  const logger = new Logger('EventView', 'rgb(190,150,200)');

  let eventData;
  let stageIndex;
  let pageIndex;

  function init() {
    $(document).on('click','.close-warning',Elements.buttonAction(() => {
      $('#warningFrame').remove();
      nextPage();
    }));
  }

  function build(transport, event) {
    eventData = event;
    stageIndex = 0;
    pageIndex = 0;

    buildStage();

    $('#mainContent').empty().append($($('#eventTemplate').html()));
  }

  function buildStage() {
    let stage = eventData.stages[stageIndex];
    logger.info("Building Stage",stage)

    if (stage.warningPage) { buildWarningPage(); }
  }

  function nextPage() {
    console.log("Next Page")
  }

  // === Special Pages ===

  // The warning page is essentially a javascript alert. It shows a message that
  // must be dismissed by pressing the button. I don't think this is used
  // anywhere but the first page of the first event.
  function buildWarningPage() {
    let warningMessage = $('<div>',{ class:'warning-message' }).append(`
      <span class="fg-danger">Warning.</span> The main character of Artificer is an extremely perverse sexual sadist.
      While some of this game's most extreme content is avoidable the majority of it really isn't. If that's not your
      thing, it would probably be best to just to not play this at all. Seriously. Trust me. This shit's going to be
      fucked up.`);

    $('.event-content').
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
