Components.ReportView = (function() {

  // The ReportView displays the results from the day's work or training phases.
  // They both display similar minion result rows. The reports should have the
  // following format:
  //    minionResults:[]   Array of minion results used to build ReportRows
  //
  //
  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView", class:`full-page-panel ${report.type}-report` }).append($('#reportTemplate').html()));

    const reportView = $('#reportView');
    const minionList = reportView.find('.minion-list');

    console.log("Build Report:")
    console.log(report)

    if (report.minionResults && report.minionResults.length) {
      minionList.removeClass('hide');
      each(report.minionResults, result => minionList.append(Components.ReportRow.build(result)));
    }

    if (report.type == 'work') {
      reportView.find('.continue-button').data('command','resolver.start-after-work')
    }


    // if (report.project) {
    //   $('#reportView').find('.projects').removeClass('hide');
    //   $('#reportView').find('.projects .text').append(report.project.text);
    // }
    //
    // if (report.tasks.length) {
    //   $('#reportView').find('.tasks').removeClass('hide');
    //   each(report.tasks, task => {
    //     $('#reportView').find('.tasks .task-stories').append(buildTaskItem(task));
    //   });
    // }

    // if (Object.keys(report.minions).length) {
    //   $('#reportView').find('.minions').removeClass('hide');
    //   each(report.minions, minion => {
    //     // addMinionFrame(minion);
    //   });
    // }

    // if (report.incidentals.length) {
    //   let incidentals = $('#reportView').find('.incidentals').removeClass('hide');
    //   each(report.incidentals, story => {
    //     incidentals.append($('<li>').append(story));
    //   });
    // }
    //
    // if (report.food) {
    //   $('#reportView').find('.food').removeClass('hide').append(report.food);
    // }

    Elements.reset();
    Elements.ScrollingPanel.build($('#reportView .scrolling-panel'));
  }

  // function buildTaskItem(task) {
  //   return $(`
  //     <dt>${task.title}</dt>
  //     <dd>${task.text}</dd>
  //   `);
  // }
  //

  function isOpen() {
    return $('#reportView').length > 0;
  }

  return { build, isOpen };

})();
