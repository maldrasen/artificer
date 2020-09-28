global.GameStage = class GameStage extends Form {

  // Set the game state
  static async setStage(code) {
    const stage = GameStage.lookup(code);
    await stage.setup();

    Game.setDayNumber(stage.dayNumber);
    Game.setLocation(stage.location);
  }

}
