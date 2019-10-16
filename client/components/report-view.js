Components.ReportView = (function() {

  function init() {}

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView" }).append($('#reportTemplate').html()));

    let view = $('#reportView');
    view.find('.projects .text').append(report.project.text);

// TEMP
console.log("=== Build Report From ===")
console.log(report.project);
each(report.minions, (minion, id) => { console.log(id, minion) })

  }

  return {
    init: init,
    build: build,
  };

})();
