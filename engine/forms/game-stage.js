global.GameStage = class GameStage extends Form {

  // Set the game state
  static async setStage(code) {
    let stage = GameStage.lookup(code);

    if (stage.location)          { await Game.updateLocation(stage.location);              }
    if (stage.eventQueue)        { await EventQueue.enqueueEvents(stage.eventQueue);       }
    if (stage.availableProjects) { await AvailableProject.addAll(stage.availableProjects); }
    if (stage.flags)             { await Flag.setAll(stage.flags);                         }

    // Creating minions in the game stage may require more than just the builder options, but for now they do not.
    await Promise.all((stage.minions||[]).map(async minionData => {
      await CharacterBuilder.build(minionData.builder);
    }));
  }

}
