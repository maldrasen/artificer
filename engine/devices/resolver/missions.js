Resolver.Missions = (function() {

  async function startMissions(missionWork) {
    if (missionWork && missionWork.length > 0) {
      console.log("=== Work Missions ===");
      console.log(missionWork);
    }
  }

  async function workMissions() {
    // TODO: Work Missions
  }

  return {
    startMissions: startMissions,
    workMissions: workMissions,
  }

})();
