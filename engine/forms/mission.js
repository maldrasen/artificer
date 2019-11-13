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

  static async resolve(data) {
    if (data.mission.type == 'explore') { return await Mission.Explore.resolve(data); }
    if (data.mission.type == 'gather')  { return await Mission.Gather.resolve(data);  }
    throw `Unknown Mission Type ${data.mission.type}`;
  }

}
