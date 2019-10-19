Components.ReportView = (function() {

  function init() {}

  function build(event, report) {
    $('#mainContent').empty().append($('<div>',{ id:"reportView" }).append($('#reportTemplate').html()));
    $('#reportView').find('.projects .text').append(report.project.text);

    each(report.minions, (minion, id) => {
      addMinionFrame(minion);
    });

    Elements.ScrollingPanel.build($('#reportView .scrolling-panel'));
  }

  function addMinionFrame(minion) {
    let portrait = $(`<div class='portrait-frame'><img src='${minion.portrait}'/></div>`)
    let topRow = $(`<div class='top-row'><div class='minion-name'>${minion.name}</div></div>`);
    let storyRow = $(`<div class='story-row'><span class='story'>${minion.work.story}</span></div>`);

    if (minion.work.injury) {
      storyRow.append($('<span>',{ class:'injury-story' }).append(` ${minion.work.injury}`));
    }

    let minionFrame = $('<li>',{class: 'minion-frame' }).
      append(portrait).
      append(topRow).
      append(storyRow);

    if (minion.work.flavors) { minionFrame.append(buildSpoilsRow(minion.work.flavors)); }
    if (minion.work.notifications) { minionFrame.append(buildNotificationsRow(minion.work.notifications)); }

    $('#reportView').find('.minion-list').append(minionFrame);
  }

  function buildSpoilsRow(flavors) {
    let frame = $('<div>',{ class:'spoils-frame icon-pit' });
    let row = $('<div>',{ class:'spoils-row' }).append(frame);

    each(flavors, flavor => {
      frame.append($(`
        <div class='item-icon large-icon'>
          <span class='count'>${flavor.count}</span>
          <span class='name'>${flavor.name}</span>
          <img src='${flavor.icon}' height=40 width=40/>
        </div>
      `));
    });

    return row;
  }

  function buildNotificationsRow(notifications) {
    let frame = $('<div>',{ class:'notifications-frame' });
    let row = $('<div>',{ class:'notifications-row' }).append(frame);

    each(notifications, notification => {
      if (notification.skill)       { frame.append(buildExperienceNotification(notification)); }
      if (notification.gainedLevel) { frame.append(buildLevelNotification(notification)); }
    });

    return row;
  }

  function buildExperienceNotification(notification) {
    return $(`
      <div class='split-badge experience'>
        <span class='head ${notification.skill.toLowerCase()}'>${notification.skill}</span><span
              class='tail ${notification.skill.toLowerCase()}'>
          <span class='value'>${notification.experience}</span>
          <span class='unit'>xp</span>
        </span>
      </div>
    `);
  }

  function buildLevelNotification(notification) {
    return $(`
      <div class='split-badge level'>
        <span class='head ${notification.skill.toLowerCase()}'>${notification.skill}</span><span
              class='tail ${notification.skill.toLowerCase()}'>Now Level ${notification.gainedLevel}</span>
      </div>
    `);
  }

  return { init, build };

})();
