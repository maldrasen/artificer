global.GameStage = class GameStage extends Form {

  // Set the game state
  static async setStage(code) {
    const stage = GameStage.lookup(code);
    const game = await Game.instance();

    game.location = stage.location;
    game.dayNumber = stage.dayNumber;

    await stage.setup(game);
    await game.save();
  }

}
