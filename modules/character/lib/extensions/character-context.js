
(function() {
  // get actors() { return ObjectUtility.select(this._properties, (key, _) => key.length == 1 && key != 'P'); }
  // get player() { return this.get('P'); }
  //

  // async addCharacter(key, character) {
  //   if (key.length != 1) { throw `Actors in the context should have a single letter key.`; }
  //
  //   const everything = await character.getCompleteBody();
  //         everything.body.weight = await everything.body.getWeight();
  //
  //   this.set(key, { character, ...everything });
  // }
  //
  // async addPlayer() {
  //   const player = await Player.instance();
  //   if (player && this.get('P') == null) { await this.addCharacter('P',player); }
  // }
  //
  // async addActor(key, descriptive) {
  //   const character = await CharacterAgent.findActor(descriptive);
  //   if (character) {
  //     await this.addCharacter(key, character);
  //   }
  // }
  //
  // // I don't want to include all the minions in the context, but I still
  // // occationally need various data points, how many minions are doing what,
  // // that sort of thing.
  // async addMinionData() {
  //   if (this.get('minionData') != null) { return; }
  //
  //   const minions = await Character.findAll();
  //
  //   let data = {
  //     totalCount: 0,
  //     freeCount: 0,
  //     missionCount: 0,
  //     workingCount: 0,
  //     taskCount: 0,
  //   }
  //
  //   each(minions, minion => {
  //     data.totalCount++;
  //     if (minion.currentDuty == 'role') { data.freeCount++ }
  //     if (minion.currentDuty == 'mission') { data.missionCount++ }
  //     if (minion.currentDuty == 'project') { data.workingCount++ }
  //     if (minion.currentDuty == 'task') { data.taskCount++ }
  //   });
  //
  //   this.set('minionData', data);
  // }


})();
