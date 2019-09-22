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

  function showNextPage() {
    $('.click-advance').addClass('hide');

    // Advance the page by determining the index of the currently active page.
    let pages = $('.paged-content .page');
    let index = pages.index($('.paged-content .page.active').removeClass('active'));
    let current = $(pages[index+1]).addClass('active');

    // Every page turn we disable any click advance areas, then if we find
    // we're still within one we reshow it. Click advance areas take up the
    // entire page, so it will break things if we move out of it but keep it
    // enabled.
    current.closest('.click-advance').removeClass('hide');
  }

  return {
    init: init,
    build: build,
    showNextPage: showNextPage,
  };

})()
