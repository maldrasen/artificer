Elements.PagedContent = (function() {

  function init() {
    $(document).on('click', '.page-action-continue', Elements.buttonAction(showNextPage));
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
    let currentPage = $(this).closest('.page').removeClass('active');
    currentPage.next('.page').addClass('active');
  }

  return {
    init: init,
    build: build,
  };

})()
