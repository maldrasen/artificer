global.Mission = class Mission extends Form {

  static async available() {
    if (false == (await Flag.equals('minion.missions','unlocked'))) { return []; }

    return ArrayUtility.compact(
      (await Promise.all(Mission.all().map(async mission => {
        if ((await CentralScrutinizer.meetsRequirements(mission.requires))) { return mission; }
      })))
    );
  }

  static async availableForClient() {
    return (await Mission.available()).map(mission => { return mission.properties });
  }

}
