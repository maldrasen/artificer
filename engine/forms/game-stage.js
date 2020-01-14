global.GameStage = class GameStage extends Form {

  // Set the game state
  static async setStage(code) {
    let stage = GameStage.lookup(code);

    await Game.updateLocation(stage.location);
    await EventQueue.enqueueEvents(stage.eventQueue);
  }

}
