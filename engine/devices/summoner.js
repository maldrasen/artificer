global.Summoner = class Summoner {

  constructor(id,code) {
    this._action = SummonAction.lookup(code);
    this._character_id = id;
  }

  // Initialize all of the database models and such used by the Summoner. I
  // could just return the consent details from the client, but I think it's
  // easier to just recalculate them here. There's no randomness in the
  // calculator, so this should bring the exact same results back.
  async init() {
    this._character = await Character.lookup(this._character_id);

    const calculator = new ConsentCalculator(this.character);
    await calculator.init();
    this._consent = await calculator.getConsentDetails(this.action);
  }

  get action() { return this._action; }
  get character() { return this._character; }
  get consent() { return this._consent; }
  get experience() { return this._experience; }
  get story() { return this._story; }

  async execute() {
    this._experience = await Summoner.Experience.calculate(this);
    this._story = "TODO: Compiling the story will be done in the next task."

    // TODO: Some actions might be exhausting and will set the character's
    //       energy to 0, which will prevent them from doing anything but
    //       resting today.
    await this.character.update({ energy:1 });
  }

  getResult() {
    return {
      possessive: EnglishUtility.possessive(this.character.singleName),
      story: this.story,
      experience: this.experience,
    };
  }

}
