Components.TrainingReport = (function() {

  function build(event, data) {
    $('#mainContent').empty().append($('<div>',{ id:"trainingReport" }).append($('#trainingReportTemplate').html()));
    each(data.reports, report => $('#trainingReport .reports').append(buildReport(report)));
  }

  function buildReport(report) {
    const reportElement = $('<div>',{ class:'minion-report' }).append($('#trainingReportMinionTemplate').html());
    reportElement.find('.header .name').append(report.minion.name);
    reportElement.find('.story').append(report.story);
    return reportElement;
  }

  return { build };

})();
