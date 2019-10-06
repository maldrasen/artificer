global.GameHelper = (function() {

  function setupTestGame() {
    let testPlayer = {
      title: "Master",
      firstName: "Testes",
      lastName: "Baggywrinkle",
      gender: "male",
      species: "caprien",
    };

    return new Promise(resolve => {
      Game.start().then(game => {
        Player.forge(testPlayer).then(resolve);
      });
    });
  }

  return {
    setupTestGame: setupTestGame
  }

})();
