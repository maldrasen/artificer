Components.ReportView = (function() {

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView", class:`full-page-panel ${report.type}-report` }).append($('#reportTemplate').html()));

    const reportView = $('#reportView');
    const minionList = reportView.find('.minion-list');

    if (report.project) {
      reportView.find('.projects-panel').removeClass('hide');
      reportView.find('.projects-panel .text').append(report.project.text);
    }

    if ((report.tasks||[]).length) {
      reportView.find('.tasks-panel').removeClass('hide');
      each(report.tasks, task => {
        reportView.find('.tasks-panel .task-stories').append($(`
          <dt>${task.title}</dt>
          <dd>${task.text}</dd>
        `));
      });
    }

    if (report.minionResults && report.minionResults.length) {
      minionList.removeClass('hide');
      each(report.minionResults, result => minionList.append(Components.ReportRow.build(result)));
    }

    if (report.type == 'training') {
      reportView.find('.continue-button').data('command','game.cancel');
    }

    if (report.type == 'work') {
      reportView.find('.continue-button').data('command','resolver.start-after-work');
    }

    if ((report.incidentals||[]).length) {
      const incidentals = reportView.find('.incidentals-panel').removeClass('hide');
      each(report.incidentals, story => {
        incidentals.append($('<li>').append(story));
      });
    }

    if (report.food) {
      reportView.find('.food').removeClass('hide').append(report.food);
    }

    Elements.reset();
    Elements.ScrollingPanel.build($('#reportView .scrolling-panel'));
  }

  function isOpen() {
    return $('#reportView').length > 0;
  }

  return { build, isOpen };

})();
