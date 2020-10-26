Components.EventPagedView = (function() {
  let pageIndex;
  let currentStage;

  function build(stage) {
    currentStage = stage;
    pageIndex = 0;

    $('#currentEvent .event-paged-view').removeClass('hide');
    $('#currentEvent .click-advance').removeClass('hide');

    buildPage();

    Components.EventView.continueSkip();
  }

  function currentPage() {
    return (currentStage.pages||[])[pageIndex];
  }

  function nextPage() {
    if (currentStage.pages && pageIndex < currentStage.pages.length-1) {
      pageIndex += 1;
      buildPage();
    } else {
      pageIndex = 0;
      Components.EventView.nextStage();
    }
  }

  //
  // TODO: Page onShow attribute. There were times that pages had to execute
  //       some arbritraty code when displayed, usually to alter some text
  //       based on a choice that was made. The previous implementation sucked
  //       though. Better to either eval a javascript string, or load and
  //       execute a file. However it's done onShow needs to call a function
  //       with the page element and the choices object.
  //
  function buildPage() {
    console.log("Build Page:")

    let page = currentPage();

    console.log(page)

    //     if (page.alert) { Alerts.showAlert(page.alert); }
    Elements.Effects.setBackground(page.background);
    Elements.Effects.applyPageEffects(page.effects);

    //     if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
    //     if (page.hideCenterImage) { hideCenterImage(); }
    //
    //     showSpeaker(page.otherSpeaker, page.playerSpeaker)
    //     appendToBacklog(page);

    $('#currentEvent .event-text-frame').empty().append(page.text)


  }

  return { build, nextPage };

})();








//
//   function appendToBacklog(page) {
//     if (page.text && page.text.length > 0) {
//       let options = {}
//       if (page.playerSpeaker) { options.player = page.playerSpeaker; }
//       if (page.otherSpeaker)  { options.actor = page.otherSpeaker;   }
//       Components.Backlog.append(page.text, options);
//     }
//   }
//
//   function showSpeaker(otherName, playerName) {
//     let speaker = $('#currentEvent .event-text-speaker').empty().addClass('hide').removeClass('other').removeClass('player');
//     if (otherName) { speaker.removeClass('hide').addClass('other').append(otherName); }
//     if (playerName) { speaker.removeClass('hide').addClass('player').append(playerName); }
//   }
//
