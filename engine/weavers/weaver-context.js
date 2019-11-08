global.WeaverContext = class WeaverContext {

  constructor(properties) {
    this._properties = properties || {};
  }

  get properties() { return this._properties; }

  get(key) { return this._properties[key]; }
  set(key, value) {
    this._properties[key] = value;
  }

  async setEvent(event) {
    this._event = event;

    await this.addGame();
    await this.addPlayer();
    await this.addMinionData();
    await this.addFlags();

    await Promise.all(Object.keys(event.actors||[]).map(async key => {
      await this.addActor(key, event.actors[key]);
    }));
  }

  async addGame() {
    const game = await Game.instance();
    this.set('game', game);
  }

  async addCharacter(key, character) {
    const everything = await character.getCompleteBody();
          everything.body.weight = await everything.body.getWeight();

    this.set(key, extend(everything, { character:character }));
  }

  async addPlayer() {
    const player = await Player.instance();
    if (player) {
      await this.addCharacter('P',player)
    }
  }

  async addActor(key, descriptive) {
    const character = await CharacterAgent.findActor(descriptive);
    if (character) {
      await this.addCharacter(key, character);
    }
  }

  async addFlags() {
    const flags = await Flag.getAll();
    this.set('flags', flags);
  }

  // I don't want to include all the minions in the context, but I still
  // occationally need various data points, how many minions are doing what,
  // that sort of thing.
  async addMinionData() {
    const minions = await Character.findAll();

    let data = {
      totalCount: 0,
      freeCount: 0,
      missionCount: 0,
      workingCount: 0,
      taskCount: 0,
    }

    each(minions, minion => {
      data.totalCount++;
      if (minion.currentDuty == 'role') { data.freeCount++ }
      if (minion.currentDuty == 'mission') { data.missionCount++ }
      if (minion.currentDuty == 'project') { data.workingCount++ }
      if (minion.currentDuty == 'task') { data.taskCount++ }
    });

    this.set('minionData', data);
  }

}
