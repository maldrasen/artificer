Components.PagedView = (function() {

  let _eventData;

  function init() {
    $(document).on('click', '#currentEvent .click-advance', clickAdvance);
    $(document).on('click', '#currentEvent .activate-skip', Elements.buttonAction(activateSkip));
  }

  function prepare() { console.log('...prepare') }

  function open() {
    $('#pagedView').removeClass('hide');
  }

  function close() {
    $('#pagedView').addClass('hide');
  }
  
  function setEvent(data) { _eventData = data; }

  function nextPage() { console.log('...next') }


  // === Pageing Behavior ===

  function clickAdvance() {
    skipActive = false;
    nextPage();
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
        nextPage();
        doSkip();
      }
    },skipRate);
  }

  // ===

  return {
    init,
    prepare,
    open,
    close,
    setEvent,
    nextPage,
  };

})();

// ... also replaces backlog
// <div id='backlog' class='hide'>
//   <a href='#' class='close-backlog-button'>X</a>
//   <div class='scrolling-panel track-parent'>
//     <div class='scrolling-panel-content backlog-content'>
//       <ul class='message-list'></ul>
//     </div>
//   </div>
// </div>



// showSettingCard(event.settingCard.time, event.settingCard.place);


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



// Components.EventPagedView = (function() {
//   let pageIndex;
//   let currentStage;
//
//   function build(stage) {
//     currentStage = stage;
//     pageIndex = 0;
//
//     $('#currentEvent .event-paged-view').removeClass('hide');
//     $('#currentEvent .click-advance').removeClass('hide');
//
//     buildPage();
//
//     Components.EventView.continueSkip();
//   }
//
//   function close() {
//     $('#currentEvent .event-paged-view').addClass('hide');
//   }
//
//   function currentPage() {
//     return (currentStage.pages||[])[pageIndex];
//   }
//
//   function nextPage() {
//     if (currentStage.pages && pageIndex < currentStage.pages.length-1) {
//       pageIndex += 1;
//       buildPage();
//     } else {
//       pageIndex = 0;
//       Components.EventView.nextStage();
//     }
//   }

  //
  // TODO: Page onShow attribute. There were times that pages had to execute
  //       some arbritraty code when displayed, usually to alter some text
  //       based on a choice that was made. The previous implementation sucked
  //       though. Better to either eval a javascript string, or load and
  //       execute a file. However it's done onShow needs to call a function
  //       with the page element and the choices object.
  //
  // function buildPage() {
  //   let frame = $('#currentEvent .text-frame').empty().removeClass('cold');
  //   let page = currentPage();
  //   let element = $('<div>',{ class:'page' }).append(page.text);
  //
  //   //     if (page.alert) { Alerts.showAlert(page.alert); }
  //   Elements.Effects.setBackground(page.background);
  //   Elements.Effects.applyPageEffects(page.effects);
  //   Components.Backlog.append(page);
  //
  //   //     if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
  //   //     if (page.hideCenterImage) { hideCenterImage(); }
  //
  //   //     showSpeaker(page.otherSpeaker, page.playerSpeaker)
  //
  //   frame.append(element);
  //
  //   setTimeout(() => {
  //     console.log("Add Cold")
  //     element.addClass('cold');
  //   },100);
  // }

//   function isOpen() {
//     let element = $('#currentEvent .event-paged-view');
//     return element.length && !element.hasClass('hide');
//   }
//
//   return { build, close, nextPage, isOpen };
//
// })();


    // $(document).on('wheel', open);
    // $(document).on('click','.open-backlog-button', Elements.buttonAction(open));
    // $(document).on('click','.close-backlog-button', Elements.buttonAction(close));


  // The message list should be emptied every time a game is started.
    // $('#backlog .message-list').empty();
    // Elements.ScrollingPanel.build($('#backlog .scrolling-panel'));
    // Elements.ScrollingPanel.resize($('#backlog .scrolling-panel'));

  // function append(message, options) {
  //   let item = $('<li>',{ class:'message-item' });
  //
  //   if (options.actor)  { item.append($('<div>',{ class:'speaker other-quote' }).append(options.actor)); }
  //   if (options.player) { item.append($('<div>',{ class:'speaker player-quote' }).append(options.player)); }
  //   if (item.find('.speaker').length == 0) { item.append($('<span>',{ class:'speaker empty' })); }
  //
  //   item.append($('<div>',{ class:'message' }).append(message));
  //
  //   // Limit the size of the backlog to 1000 entries.
  //   if ($('#backlog .message-item').length > 1000) {
  //     $('#backlog .message-item:first-child').remove();
  //   }
  //
  //   $('#backlog .message-list').append(item);
  // }
  //
  // function open() {
  //   if (canOpen()) {
  //     $('#backlog').removeClass('hide');
  //     Components.EventView.stopSkip();
  //     Elements.ScrollingPanel.resize($('#backlog .scrolling-panel'));
  //     Elements.ScrollingPanel.scrollToBottom($('#backlog .scrolling-panel'));
  //   }
  // }
  //
  // function canOpen() {
  //   if (isOpen()) { return false; }
  //   if (Components.LocationView.isOpen()) { return true; }
  //   if (Components.EventView.isOpen())    { return true; }
  //   if (Components.ReportView.isOpen())   { return true; }
  //   return false;
  // }
  //
  // function isOpen() { return ! $('#backlog').hasClass('hide'); }
  // function close() { $('#backlog').addClass('hide'); }



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
