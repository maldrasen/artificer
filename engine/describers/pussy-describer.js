global.PussyDescriber = class PussyDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }
    this._character = options.character;
    this._pussy = options.pussy;
  }

  get character() { return this._character; }
  get pussy() { return this._pussy; }

  async updateDescription() {
    if (this.pussy == null) { this._pussy = await this.character.getPussy(); }
    if (this.pussy == null) { return ""; }

    this.pussy.description = "[TODO: Pussy description]"

    await this.pussy.save();
    return this.pussy;
  }

}

// I think I need to make some changes on how both pussies and asses are
// implemented. We currently have the pussy condition, size, and scale, but I'm
// thinking I'm going to want events where we slowly stretch a pussy out. I
// think there first off needs to be a damage attribute. Which shows bruising,
// tearing, and other evidence of abuse. There should be a streching progress,
// attribute that tracks how far we are from changing the condition. For some
// reason size doesn't take condition into consideration? Not sure if size
// should stay static and condition becomes a multiplier or if size increases
// with condition? Stretching progress should add to size too though. So maybe
// progress is measured in mm, and once mm meets the next size threshold it
// changes? Progress drops over time though until the threshold is passed. I
// want to change labia lengths too. I should give outer and innter labia both
// a natural value of 1-3. Beyond that is unnatural growth that you cause
// somehow. Anus needs more shapes too, small, slightly protruding, wide and
// wrinkled, etc.
