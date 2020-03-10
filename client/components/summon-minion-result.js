Components.SummonMinionResult = (function() {

  function init() {}

  function open(e, data) {
    const view = $('<div>',{ id:"summonMinionResult", class:'full-page-panel' }).append($('#summonMinionResultTemplate').html());

    if (data.experience.length > 0) {
      view.find('.experience').removeClass('hide');
      view.find('.character-name').append(data.possessive);
      buildExperienceBadges(view.find('.experience .badges'), data.experience)
    }

    $('#mainContent').empty().append(view);
  }

  function buildExperienceBadges(element, experience) {
    each(experience, aspect => {
      let badge = $('<div>',{ class:`split-badge direction-${aspect.experience > 0 ? 'up' : 'down'}` }).
        append($('<div>',{ class:`head ${aspect.code}` }).append(aspect.name)).
        append($('<div>',{ class:'tail' }).append(aspect.experience));

      element.append(badge);
    });
  }

  return { init, open };

})();
