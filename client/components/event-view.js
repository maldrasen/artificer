Components.EventView = (function() {
  let eventData;
  let stageIndex;
  let pageIndex;
  let choices;

  function init() {

  }

  // Build an event given all of the event options. All of the event options
  // should be described in detail on the Wiki now.
  function build(transport, data) {
    console.log("Build:",data)

    Elements.reset();

    // Page? For form views maybe?
    // Components.EventView.Page = {};

    eventData = data;
    stageIndex = 0;
    pageIndex = 0;

    choices = { event:{
      code: data.code,
      actorIDs: data.actorIDs
    }};

    $('#mainContent').empty().append($('<div>',{ id:'currentEvent' }).append($($('#eventTemplate').html())));

    //     if (event.background != null) { setBackground(event.background); }
    //     if (event.darkenBackground != null) { darkenBackground(event.darkenBackground); }
    //
    //     buildStage();
    //
    //     if (event.settingCard) {
    //       showSettingCard(event.settingCard.time, event.settingCard.place);
    //     }

  }

  return {
    init,
    build
  };

})();


// The Event view is getting out of hand. This needs to be broken into multiple
// page vies.


// Components.EventView = (function() {
//   let skipActive = false;
//   let skipContinue = false;
//   let skipRate = 50;
//
//
//   function init() {
//     Components.EventView.ChooserPage.init();
//     Components.EventView.SelectionPage.init();
//     $(document).on('click', '#currentEvent .click-advance', clickAdvance);
//     $(document).on('click', '#currentEvent .activate-skip', Elements.buttonAction(activateSkip));
//   }
//
//   function build(transport, event) {
//   }
//
//   function clickAdvance() {
//     skipActive = false;
//     nextPage();
//   }
//
//   function activateSkip() {
//     skipActive = true;
//     doSkip();
//   }
//
//   function stopSkip() {
//     skipActive = false;
//   }
//
//   function doSkip() {
//     setTimeout(()=>{
//       if (skipActive) {
//         nextPage();
//         doSkip();
//       }
//     },skipRate);
//   }
//
//   function endEvent() {
//     if (skipActive) {
//       skipActive = false;
//       skipContinue = true;
//     }
//     Renderer.sendCommand('game.end-event',choices);
//   }
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
//   function currentPage() {
//     return (currentStage().pages||[])[pageIndex];
//   }
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
//   // === Paged View ===
//
//   function buildPagedView() {
//     $('#currentEvent .event-text-frame').removeClass('hide');
//     $('#currentEvent .event-text-actions').removeClass('hide');
//     $('#currentEvent .click-advance').removeClass('hide');
//     buildPage();
//
//     if (skipContinue) {
//       skipActive = true;
//       skipContinue = false;
//     }
//
//     if (skipActive) { doSkip(); }
//   }
//
//   function buildPage() {
//     let page = currentPage();
//     if (page.alert) { Alerts.showAlert(page.alert); }
//     if (page.background != null) { setBackground(page.background); }
//     if (page.darkenBackground != null) { darkenBackground(page.darkenBackground); }
//     if (page.showCenterImage) { showCenterImage(page.showCenterImage); }
//     if (page.hideCenterImage) { hideCenterImage(); }
//     if (page.effects) { applyPageEffects(page.effects); }
//
//     showSpeaker(page.otherSpeaker, page.playerSpeaker)
//     appendToBacklog(page);
//
//     $('#currentEvent .event-text-frame').empty().append(page.text)
//
//     // After the page has been displayed it's possible for the event to make some adjustments to the text, usually in
//     // response to some choice made within this same event, but not consequential to make it an entire branch. These
//     // functions have to be referenced by code and kept in the Components.EventView.PageFunctions object because the
//     // events are defined in the engine, but these functions are called by the client.
//     if (page.onShow) { Components.EventView.PageFunctions[page.onShow](choices); }
//   }
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
//   function applyPageEffects(effects) {
//     each(effects, strang => {
//       new Adjustment(strang, eventData.actorIDs).execute();
//     });
//   }
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
//
// Components.EventView.PageFunctions = {};
