Components.MinionDetailView = (function() {
  let minion;

  function init() {}

  function open(event, data) {
    minion = data;
    Renderer.showMinion();
    Renderer.unlock();
  }

  function build() {
    let view = $('#overlayContent .minion-detail-view');

    view.find('.portrait-frame').append($('<img>',{ src:minion.portrait }));
    view.find('.name-section .name').append(minion.name);
    view.find('.name-section .gender').append(minion.gender);
    view.find('.name-section .species').append(minion.species);
    view.find('.top-row .health-value').append(minion.health);
    view.find('.top-row .health-word').append(minion.healthWord);
    view.find('.top-row .health-section').addClass(`fg-health-${minion.healthClass}`);
    view.find('.attributes dd.physical').append(minion.physical);
    view.find('.attributes dd.personal').append(minion.personal);
    view.find('.attributes dd.mental').append(minion.mental);
    view.find('.attributes dd.magical').append(minion.magical);
    view.find('.description-row').append(minion.description);

    addAspects(minion.skillAspects,       view.find('.skill-aspects'));
    addAspects(minion.personalityAspects, view.find('.personality-aspects'));
    addAspects(minion.sexualAspects,      view.find('.sexual-aspects'));

    Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
  }

  function addAspects(aspects, element) {
    each(aspects, aspect => { element.
      append($('<dt>').append(aspect.name)).
      append($('<dd>').append(`<span class='level'>Level ${aspect.level}</span><span class='strength'>${aspect.strength} xp</span>`));
    });
  }

  return { init, open, build };

})();
