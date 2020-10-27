Components.PagedView = (function() {
  let _currentEvent;
  let _currentStage;
  let _currentPage;

  let _skipActive = false;
  let _skipContinue = false;
  let _skipRate = 50;

  function init() {
    $(document).on('click', '#pagedView .click-advance', clickAdvance);
    $(document).on('click', '#pagedView .activate-skip', Elements.buttonAction(activateSkip));
  }

  function prepare() { console.log('...prepare') }

  function open(stage) {
    $('#pagedView').removeClass('hide');
    console.log("Opened.",stage)

    _currentStage = stage;
    _currentPage = 0;

    buildPage();
    continueSkip();
  }

  function close() {
    $('#pagedView').addClass('hide');
  }

  function setEvent(event) { _currentEvent = event; }

  // === Page Building ===

  function nextPage() {
    if (_currentStage.pages && _currentPage < _currentStage.pages.length-1) {
      _currentPage += 1;
      buildPage();
    } else {
      _currentPage = 0;
      Components.EventView.nextStage();
    }
  }

  function currentPage() {
    return (_currentStage.pages||[])[_currentPage];
  }

  // TODO: Page onShow attribute. There were times that pages had to execute
  //       some arbritraty code when displayed, usually to alter some text
  //       based on a choice that was made. The previous implementation sucked
  //       though. It would be better load and execute a file, calling a
  //       function defined therein with the page element.
  function buildPage() {
    let page = currentPage();
    let element = $('<li>',{ class:'page' }).append(page.text);

    $('#pagedView .text-frame').append(element);

    //     if (page.alert) { Alerts.showAlert(page.alert); }
    Elements.Effects.setBackground(page.background);
    Elements.Effects.applyPageEffects(page.effects);
    //
    //   //     if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
    //   //     if (page.hideCenterImage) { hideCenterImage(); }
    //
    //   //     showSpeaker(page.otherSpeaker, page.playerSpeaker)
    //
    setTimeout(() => {
      console.log("Add Cold")
      element.addClass('cold');
    },100);


  }

  // === Pageing And Skipping Behavior ===

  function clickAdvance() {
    _skipActive = false;
    nextPage();
  }

  function activateSkip() {
    _skipActive = true;
    doSkip();
  }

  function holdSkip() {
    if (_skipActive) {
      _skipActive = false;
      _skipContinue = true;
    }
  }

  // This is tricky. When this function was called from the EventView in
  // nextStage() it was called without ever calling doSkip(). When it was
  // called from the old build() function though it was. I'm not sure which is
  // correct now. Makes sense that there should only be one version of this
  // function and we might need to add another argument. The last thing I want
  // is to have two skip loops going at once.
  function continueSkip() {
    if (_skipContinue) {
      _skipActive = true;
      _skipContinue = false;
    }
    if (_skipActive) { doSkip(); }
  }

  function stopSkip() {
    _skipActive = false;
  }

  function doSkip() {
    setTimeout(()=>{
      if (_skipActive) {
        nextPage();
        doSkip();
      }
    },_skipRate);
  }

  // ===

  return {
    init,
    prepare,
    open,
    close,
    setEvent,
    nextPage,

    holdSkip,
    continueSkip,
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




  //

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
