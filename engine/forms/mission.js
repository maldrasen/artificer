global.Mission = class Mission extends Form {

  static async available() {
    if (false == (await Flag.equals('minion.missions','unlocked'))) { return []; }

    return Mission.where(mission => {
      return CentralScrutinizer.meetsRequirements(mission.requires)
    });
  }

  static async availableForClient() {
    return (await Mission.available()).map(mission => { return mission.properties });
  }

}
