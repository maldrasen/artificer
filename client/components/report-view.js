Components.ReportView = (function() {

  function init() {}

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView" }).append($('#reportTemplate').html()));

    let view = $('#reportView');
    view.find('.projects .text').append(report.project.text);
  }

  return {
    init: init,
    build: build,
  };

})();
