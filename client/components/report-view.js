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
    const story = minion.work.story;
    const injury = minion.work.injury;
    const flavors = minion.work.flavors;
    const notifications = minion.work.notifications;

    let topRow = $(`<div class='top-row'><div class='minion-name'>${minion.name}</div></div>`);
    let storyRow = $(`<div class='story-row'><span class='story'>${story}</span></div>`);

    if (injury) {
      storyRow.append($('<span>',{ class:'injury-story' }).append(` ${injury}`));
    }

    console.log("=== Build Minion Frame ===")
    console.log(notifications);

    let minionFrame = $('<li>',{class: 'minion-frame' }).
      append(topRow).
      append(storyRow);

    if (flavors) { minionFrame.append(buildSpoilsRow(flavors)); }
    if (notifications) { minionFrame.append(buildNotificationsRow(notifications)); }

    $('#reportView').find('.minion-list').append(minionFrame);
  }

  function buildSpoilsRow(flavors) {
    let frame = $('<div>',{ class:'spoils-frame' });
    let row = $('<div>',{ class:'spoils-row' }).append(frame);

    each(flavors, flavor => {
      frame.append($(`
        <div class='flavor-icon large-icon'>
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
      <div class='notification experience'>
        <span class='head ${notification.skill}'>${notification.skill}</span>
        <span class='tail ${notification.skill}'>
          <span class='value'>${notification.experience}</span>
          <span class='unit'>xp</span>
        </span>
      </div>
    `.replace(/\>\s+\</g,'').trim());
  }

  function buildLevelNotification(notification) {
    return $(`
      <div class='notification level'>
        <span class='head ${notification.skill}'>${notification.skill}</span>
        <span class='tail ${notification.skill}'>Now Level ${notification.gainedLevel}</span>
      </div>
    `.replace(/\>\s+\</g,'').trim());
  }

  return {
    init: init,
    build: build,
  };

})();
