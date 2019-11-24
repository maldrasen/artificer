Components.PlayerView = (function() {
  let player;

  function init() {}

  function open(event, data) {
    player = data;
    Renderer.showPlayer();
  }

  function build() {
    let view = $('#overlayContent .player-view');
    view.find('.portrait-frame').append($('<img>',{ src:player.portrait }));
    view.find('.name-section .name').append(player.name);
    view.find('.name-section .gender').append(player.gender);
    view.find('.name-section .species').append(player.species);

    view.find('.description-row').append(player.description);

    addAspects(player.skillAspects,       view.find('.skill-aspects'));
    addAspects(player.personalityAspects, view.find('.personality-aspects'));
    addAspects(player.sexualAspects,      view.find('.sexual-aspects'));

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
