Components.ReportRow = (function() {

  function build(result) {
    const rowElement = $('<div>',{ class:'report-row' }).append($('#reportRowTemplate').html());
    const storyRow = rowElement.find('.story-row');
    const lowerRow = rowElement.find('.lower-row');

    rowElement.find('.portrait-frame').append($('<img>',{ src:result.portrait }));
    rowElement.find('.minion-name').append(result.name);
    storyRow.find('.story').append(result.awayText || result.story);

    if (result.flavors) { lowerRow.append(buildSpoilsRow(result.flavors)); }
    if (result.notifications) { lowerRow.append(buildNotificationsFrame(result.notifications)); }
    if (result.injury) { storyRow.append($('<span>',{ class:'injury-story' }).append(` ${result.injury}`)); }
    if (result.healed) { storyRow.append($('<span>',{ class:'healed-story' }).append(` ${result.healed}`)); }

    return rowElement;
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

  return { build };

})();
