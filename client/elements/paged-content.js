Elements.PagedContent = (function() {

  function init() {
    $(document).on('click', '.page-action-continue', Elements.buttonAction(showNextPage));
    $(document).on('click', '.click-advance', showNextPage);
  }

  // There should only ever be one paged content element on a page at a time.
  function build() {
    if ($('.paged-content').length != 1) { return false; }

    $.each($('.page-footer-continue'), (i,footer)=>{
      $(footer).append(buildContinueFooter());
    });
  }

  function buildContinueFooter() {
    return $('<a>',{ href:'#', class:'page-action-continue' }).append('Continue');
  }

  // Show page by selector.
  function showPage(selector) {
    activatePage($(`${selector}.page`))
  }

  // Advance the page by determining the index of the currently active page.
  function showNextPage() {
    let pages = $('.paged-content .page');
    let index = pages.index($('.paged-content .page.active'));
    activatePage($(pages[index+1]));
  }

  // Every page turn we disable any click advance areas, then if we find
  // we're still within one we reshow it. Click advance areas take up the
  // entire page, so it will break things if we move out of it but keep it
  // enabled.
  function activatePage(page) {
    $('.click-advance').addClass('hide');
    $('.active.page').removeClass('active');

    page.addClass('active');
    page.closest('.click-advance').removeClass('hide');

    if (page.data('darken-background')) { darkenBackground(page.data('darken-background')); }
    if (page.data('set-background'))    { setBackground(page.data('set-background')); }

    adjustPage(page);
  }

  // === Effects ===

  function darkenBackground(value) {
    let brightness = 100 - value
    $('.paged-content-background').css({filter:`brightness(${brightness}%)`});
  }

  function setBackground(url) {
    if ($('.paged-content-background').length == 0) {
      $('#mainContent').append($('<div>',{ class:'paged-content-background' }));
    }
    $('.paged-content-background').css({ "background-image":`url(${url})`, filter:'' });
  }

  // === Paging Control ===

  // It's better to handle most of these content choices in the engine rather
  // than the view, but sometimes it's just easier to take care of this way.
  function adjustPage(page) {
    if (page.find('.select')) {
      $.each(page.find('.select'), (i,select) => { resolveSelect($(select)); })
    }
  }

  // This could be a lot simpler of course, I'm anticipating the need to add
  // more conditions that the select will need to keep off of though.
  function resolveSelect(element) {
    let key = element.data('show-if') || element.data('show-if-not')
    let shouldDisplay;

    if (key == 'config.metric') { shouldDisplay = Configuration.metric }

    if (key == null) { throw `A select needs a condition key.` }
    if (shouldDisplay == null) { throw `Unknown select condition key [${key}]` }

    if (element.data('show-if-not')) { shouldDisplay = !shouldDisplay }

    shouldDisplay ? element.removeClass('hide') : element.addClass('hide');
  }

  return {
    init: init,
    build: build,
    showPage: showPage,
    showNextPage: showNextPage,
    darkenBackground: darkenBackground,
    setBackground: setBackground,
  };

})()