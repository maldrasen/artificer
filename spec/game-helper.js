global.GameHelper = (function() {

  async function setupTestGame() {
    let game = await Game.start();

    let testCharacters = [
      { type:'minion', species:'rat', gender:'male',   fear:Random.between(40,60), loyalty:Random.between(10,20) },
      { type:'minion', species:'rat', gender:'female', fear:Random.between(40,60), loyalty:Random.between(10,20) },
    ];

    await Promise.all(testCharacters.map((options) => {
      return CharacterBuilder.build(options);
    }));

    await game.createPlayer({
      title: "Master",
      firstName: "Testes",
      lastName: "Baggywrinkle",
      gender: "male",
      species: "caprien",
    });
  }

  return { setupTestGame };

})();
