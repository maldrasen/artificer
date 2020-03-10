Components.SummonMinionResult = (function() {

  function init() {}

  function open(e, data) {
    let view = $('<div>',{ id:"summonMinionResult", class:'full-page-panel' }).append($('#summonMinionResultTemplate').html());

    buildExperienceBadges(view.find('.experience'), data.experience)

    $('#mainContent').empty().append(view);
  }

  function buildExperienceBadges(element, experience) {
    each(experience, aspect => {
      let direction = aspect.experience > 0 ? 'up' : 'down'
      console.log(" - ",aspect)
      let badge = $('<div>',{ class:`split-badge direction-${direction}` });
      badge.append($('<div>',{ class:`head ${aspect.code}` }).append(aspect.name));
      badge.append($('<div>',{ class:'tail' }).append(aspect.experience));

      element.append(badge);
    });


  }

  return { init, open };

})();
