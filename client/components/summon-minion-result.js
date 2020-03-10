Components.SummonMinionResult = (function() {

  function init() {}

  function open(e, data) {
    const view = $('<div>',{ id:"summonMinionResult", class:'full-page-panel' }).append($('#summonMinionResultTemplate').html());
          view.find('.story').append(data.story);

    if (data.experience.length > 0) {
      view.find('.experience').removeClass('hide');
      view.find('.character-name').append(data.possessive);
      buildExperienceBadges(view.find('.experience .badges'), data.experience)
    }

    $('#mainContent').empty().append(view);
  }

  function buildExperienceBadges(element, experience) {
    each(experience, aspect => {
      element.append(Elements.Badges.buildExperienceNotification(aspect));
      if (aspect.gainedLevel != null || aspect.lostLevel != null) {
        element.append(Elements.Badges.buildLevelNotification(aspect));
      }
    });
  }

  return { init, open };

})();
