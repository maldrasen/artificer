Resolver.Missions = (function() {

  async function startMissions(missionWork) {
    if (missionWork && missionWork.length > 0) {
      await Promise.all(missionWork.map(async orders => {
        return await startMission(orders);
      }));
    }
  }

  async function startMission(orders) {
    let mission = Mission.lookup(orders.code);

    // Missions that only take a day are immeadietly resolved.
    if (mission.time == 1) {
      return await resolve(mission, { minions:orders.minions });
    }

    await Promise.all(orders.minions.map(async id => {
      return await (await Character.findByPk(id)).update({
        currentDuty: 'mission',
        dutyCode: orders.code,
      });
    }));

    // TODO: State will need to include more details in the future I think.
    //       Some missions will have options that are set when the mission
    //       is started. At the very least though I need a place to store
    //       the minion ids.
    await MissionProgress.create({
      code: orders.code,
      day: 1,
      state: { minions:orders.minions }
    });
  }

  async function workMissions() {
    // TODO: Work Missions
  }

  async function resolve(mission, state) {
    console.log("=== Resolve Mission ===")
    console.log(mission.properties);
    console.log(state);
  }

  return {
    startMissions: startMissions,
    workMissions: workMissions,
  }

})();
