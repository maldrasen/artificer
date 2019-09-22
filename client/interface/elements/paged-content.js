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

    if (page.data('darken-background')) {
      darkenBackground(page.data('darken-background'))
    }
  }

  // === Effects ===

  function darkenBackground(value) {
    let brightness = 100 - value
    $('.paged-content-background').css({filter:`brightness(${brightness}%)`});
  }

  return {
    init: init,
    build: build,
    showPage: showPage,
    showNextPage: showNextPage,
    darkenBackground: darkenBackground,
  };

})()
