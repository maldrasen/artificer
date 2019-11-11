Resolver.Missions = (function() {

  async function startMissions(missionWork) {
    if (missionWork && missionWork.length > 0) {
      await Promise.all(missionWork.map(async orders => {
        return await startMission(orders);
      }));
    }
  }

  async function startMission(orders) {
    const mission = Mission.lookup(orders.code);
    const minions = await Promise.all(orders.minions.map(async id => {
      return await Character.findByPk(id);
    }));

    // Minions still need to have their roles set even if the mission is
    // finished in the same day, otherwise they'll also do their normal work.
    await Promise.all(minions.map(async minion => {
      return await minion.update({
        currentDuty: 'mission',
        dutyCode: orders.code,
      });
    }));

    // Missions that only take a day are immeadietly resolved.
    if (mission.time == 1) {
      await resolve(mission, { minions:orders.minions }, minions);
      await resetDuty(minions);
      return;
    }

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
    await Promise.all((await MissionProgress.findAll()).map(async progress => {
      const mission = Mission.lookup(progress.code);
      const minions = await Promise.all(progress.state.minions.map(async id => {
        return await Character.findByPk(id);
      }));

      return (progress.day < mission.time) ?
        advanceMission(mission, progress, minions):
        completeMission(mission, progress, minions);
    }));
  }

  async function advanceMission(mission, progress, minions) {
    each(minions, minion => {
      Resolver.Report.setMinionData(minion, 'work', {});
      Resolver.Report.setMinionData(minion, 'awayText',`${minion.name} ${mission.awayText}`);
    });

    return await progress.update({ day:(progress.day+1) });
  }

  async function completeMission(mission, progress, minions) {
    await resolve(mission, progress.state, minions);
    await progress.destroy();
    await resetDuty(minions);
  }

  async function resolve(mission, state, minions) {
    await Promise.all(minions.map(async minion => {
      Resolver.Report.setMinionData(minion, 'work', {
        story: "[TODO: Finished mission story]",
        // flavors
        // notifications
        // injury
      });
    }));
  }

  // We have to wait until all the other resolver tasks are finished before
  // we set the minion's duty back to role. If this happens too soon they
  // will do their role work as well.
  async function resetDuty(minions) {
    Resolver.addFinisher(async () => {
      await Promise.all(minions.map(async minion => {
        return await minion.update({
          currentDuty: 'role',
          dutyCode: null,
        });
      }));
    });
  }

  return {
    startMissions: startMissions,
    workMissions: workMissions,
  }

})();
