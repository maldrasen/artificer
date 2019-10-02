Components.EventView.Splash = {

  build() {
    Components.EventView.setBackground('../../resources/game-start/bg-splash.jpg');
    $('#currentEvent .event-content').append(`<div id='gameTitleFrame'><div id='gameTitle'>Artificer</div></div>`);
  },

  complete() {
    Renderer.sendCommand('game.create-player',Components.EventView.getChoices());
  }

};
