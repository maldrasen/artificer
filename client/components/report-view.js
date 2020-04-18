Components.ReportView = (function() {

  function init() {}

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView", class:'full-page-panel' }).append($('#reportTemplate').html()));

    if (report.project) {
      $('#reportView').find('.projects').removeClass('hide');
      $('#reportView').find('.projects .text').append(report.project.text);
    }

    if (report.tasks.length > 0) {
      $('#reportView').find('.tasks').removeClass('hide');
      each(report.tasks, task => {
        $('#reportView').find('.tasks .task-stories').append(buildTaskItem(task));
      });
    }

    if (Object.keys(report.minions).length > 0) {
      $('#reportView').find('.minions').removeClass('hide');
      each(report.minions, minion => {
        addMinionFrame(minion);
      });
    }

    if (report.food.story) {
      $('#reportView').find('.food').removeClass('hide').append(report.food.story);
    }

    Elements.ScrollingPanel.build($('#reportView .scrolling-panel'));
  }

  function buildTaskItem(task) {
    return $(`<li>
      <div class='title'>${task.title}</div>
      <div class='text'>${task.text}</div>
    </li>`);
  }

  function addMinionFrame(minion) {
    if (minion.work == null) { minion.work = {
      story:`TODO: Whatever this task was needs a work object and a story in the report.`
    }}

    let portrait = $(`<div class='portrait-frame'><img src='${minion.portrait}'/></div>`)
    let topRow = $(`<div class='top-row'><div class='minion-name'>${minion.name}</div></div>`);
    let storyRow = $(`<div class='story-row'><span class='story'>${minion.awayText || minion.work.story}</span></div>`);
    let lowerRow = $(`<div class='lower-row flex'></div>`);

    if (minion.work.flavors) { lowerRow.append(buildSpoilsRow(minion.work.flavors)); }
    if (minion.work.notifications) { lowerRow.append(buildNotificationsFrame(minion.work.notifications)); }
    if (minion.work.injury) { storyRow.append($('<span>',{ class:'injury-story' }).append(` ${minion.work.injury}`)); }
    if (minion.healed) { storyRow.append($('<span>',{ class:'healed-story' }).append(` ${minion.healed}`)); }

    let minionFrame = $('<li>',{class: 'report-minion-frame' }).
      append(portrait).
      append(topRow).
      append(storyRow).
      append(lowerRow);

    $('#reportView').find('.minion-list').append(minionFrame);
  }

  function buildSpoilsRow(flavors) {
    let frame = $('<div>',{ class:'spoils-frame icon-pit' });
    let row = $('<div>',{ class:'spoils-row' }).append(frame);

    each(flavors, flavor => {
      frame.append(Elements.ImageResource.iconElement('flavor', flavor.code, flavor.count));
    });

    return row;
  }

  function buildNotificationsFrame(notifications) {
    let frame = $('<div>',{ class:'notifications-frame' });

    each(notifications, notification => {
      frame.append(Elements.Badges.buildExperienceNotification(notification));
      if (notification.gainedLevel) { frame.append(Elements.Badges.buildLevelNotification(notification)); }
    });

    return frame;
  }


  function isOpen() {
    return $('#reportView').length > 0;
  }

  return { init, build, isOpen };

})();
