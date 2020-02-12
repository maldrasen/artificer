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

    view.find('.attributes dd.physical .value').append(player.physical);
    view.find('.attributes dd.physical .word').append(player.physicalWord);
    view.find('.attributes dd.personal .value').append(player.personal);
    view.find('.attributes dd.personal .word').append(player.personalWord);
    view.find('.attributes dd.mental .value').append(player.mental);
    view.find('.attributes dd.mental .word').append(player.mentalWord);
    view.find('.attributes dd.magical .value').append(player.magical);
    view.find('.attributes dd.magical .word').append(player.magicalWord);

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
