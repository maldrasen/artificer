global.Mission = class Mission extends Form {

  static async available() {
    if (Flag.lookup('plan-view.missions') != 'Y') { return []; }

    return ArrayUtility.compact(await Promise.all(Mission.all().map(async mission => {
      if ((Flag.lookup(`mission.${mission.code}`) == 'Y') && (await CentralScrutinizer.meetsRequirements(mission.requires))) {
        return mission;
      };
    })));
  }

  static async availableForClient() {
    return (await Mission.available()).map(mission => { return mission.properties });
  }

  static async resolve(data) {
    if (data.mission.type == 'event') { return await Mission.Event.resolve(data); }
    if (data.mission.type == 'explore') { return await Mission.Explore.resolve(data); }
    if (data.mission.type == 'gather')  { return await Mission.Gather.resolve(data);  }
    if (data.mission.type == 'steal')  { return await Mission.Steal.resolve(data);  }
    throw `Unknown Mission Type ${data.mission.type}`;
  }

}
