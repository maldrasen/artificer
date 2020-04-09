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
    view.find('.description-area').append(player.description);

    Components.CharacterViews.buildAspects(view, player, 'player');
    Elements.ScrollingPanel.build($('#overlayContent .scrolling-panel'));
  }


  return { init, open, build };

})();
