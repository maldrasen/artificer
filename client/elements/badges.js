Elements.Badges = (function() {

  function buildExperienceNotification(aspect) {
    let content = $('<span>').
      append($('<span>',{ class:'value' }).append(aspect.experience)).
      append($('<span>',{ class:'unit' }).append('xp'));

    return buildSplitBadge({
      direction: aspect.experience > 0 ? 'up' : 'down',
      code: aspect.code,
      name: aspect.name,
      content: content,
    });
  }

  function buildLevelNotification(aspect) {
    return buildSplitBadge({
      direction: aspect.experience > 0 ? 'up' : 'down',
      code: aspect.code,
      name: aspect.name,
      content: `Now Level ${notification.gainedLevel || notification.lostLevel}`
    });
  }

  function buildSplitBadge(options) {
    return $('<div>',{ class:`split-badge direction-${options.direction}` }).
      append($('<div>',{ class:`head ${options.code}` }).append(options.name)).
      append($('<div>',{ class:'tail' }).append(options.content));
  }

  return {
    buildExperienceNotification,
    buildLevelNotification,
  }

})();
