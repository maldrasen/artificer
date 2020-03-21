Summoner.StoryTeller = class StoryTeller {

  constructor(summoner, status) {
    this._summoner = summoner;
    this._status = status || {};
    this._segments = [];
  }

  get summoner() { return this._summoner; }
  get character() { return this.summoner.character; }
  get player() { return this.summoner.player; }

  // The scene status keeps track of all of the positions and conditions that
  // might change over the course of the scene. It's likely for a status key to
  // be null. If that's the case then whatever is being talked about just
  // hasn't been set in stone yet, so assume it's whatever you need it to be.
  // Just set it after it's been declaired to be in some state.

  getStatus(key) { return this._status[key]; }
  setStatus(key, value) { this._status[key] = value; }
  mightBe(key, value) { return this.getStatus(key) == null || this.getStatus(key) == value }

  // In addition to the text, when adding a segment you can specify the
  // following. These attributes update the scene status, or they format the
  // segment somehow. The variables below are the common ones, but they could
  // be set to anything scene specific really.
  //
  //   playerSpeaking: true
  //   playerPosition: standing, sitting, laying, kneeling, bent-over
  //   playerCock: soft, hard
  //   playerPussy: dry, wet
  //
  //   characterSpeaking: true
  //   characterPosition: standing, sitting, laying, kneeling, bent-over
  //   characterCock: soft, hard
  //   characterPussy: dry, wet
  //
  //   cockDesirability: (-10 to 10 or so)
  //
  addSegment(segment) {
    if (segment.playerSpeaking)    { segment.text = QuoteTransformer.run(segment.text, { speaker:'player' }); }
    if (segment.characterSpeaking) { segment.text = QuoteTransformer.run(segment.text, { speaker:'other'  }); }

    let statusAttributes = [
      'playerPosition', 'playerCock', 'playerPussy',
      'characterPosition', 'characterPussy', 'characterCock',
      'cockDesirability',
    ];

    each(statusAttributes, attribute => {
      if (segment[attribute]) { this.setStatus(attribute, segment[attribute]); }
    })

    this._segments.push(segment.text);
  }

  addSeparator() {
    this._segments.push(`</p><p>`);
  }

  compile() {
    return `<p>${this._segments.join(' ')}</p>`;
  }

  // Model cache. If I need to look something up in the database, I might as
  // well cache it in case another function needs to use it. I have no idea
  // what might be needed though as the story is written so there's no point in
  // preloading anything.

  async getGame() {
    if (this._game == null) { this._game = await Game.instance(); }
    return this._game;
  }

  async getPlayerBody() {
    if (this._playerBody == null) { this._playerBody = await this.player.getBody(); }
    return this._playerBody;
  }

  async getPlayerCock() {
    if (this._playerCock == null) { this._playerCock = await this.player.getCock(); }
    return this._playerCock;
  }

  async getCharacterBody() {
    if (this._characterBody == null) { this._characterBody = await this.character.getBody(); }
    return this._characterBody;
  }

  async getLocation() {
    return Location.lookup((await this.getGame()).location);
  }

  // Getting the player outfit will attempt to get the clothes the player is
  // wearing. If the player is nude this will return null. If the character
  // becomes nude at some point in the scene set playerNude to true so that
  // they will remain nude.
  async getPlayerOutfit() {
    if (this.getStatus('playerNude')) { return null; }

    if (this._playerOutfit == null) {
      this._playerOutfit = await this.player.getEquipment('outfit');
      if (this._playerOutfit == null) {
        this.getStatus('playerNude',true);
      }
    }

    return this._playerOutfit;
  }

  // ===========================================================================
  //                          Canned Story Segments
  // ===========================================================================

  async showCock() { await Summoner.CockSegments.showCock(this); }
  async startSummoning() { await Summoner.GeneralSegments.startSummoning(this); }

  // ===========================================================================
  //                            Utilities & Helpers
  // ===========================================================================

  // Utility function to add randomly selectable text to an options array that
  // all share common state values.
  static addOptionsWith(options, texts, state) {
    each(texts, text => {
      options.push(extend(state, { text }));
    });
  }

  // Get a quick estimate of the height difference between the player and the
  // character. These might need to be tweeked over time. Not sure yet how
  // common these different classes will be.
  async heightDifference() {
    const pHeight = (await this.getPlayerBody()).height;
    const cHeight = (await this.getCharacterBody()).height;

    if (cHeight <= pHeight * 0.2)                            { return { scale:0, name:"miniCharacter"}; }    // character is smaller than knee high.
    if (cHeight > pHeight * 0.2 && cHeight <= pHeight * 0.4) { return { scale:1, name:"tinyCharacter"}; }    // character is smaller than waist high.
    if (cHeight > pHeight * 0.4 && cHeight <= pHeight * 0.6) { return { scale:2, name:"smallCharacter"}; }   // character is about waist high to me.
    if (cHeight > pHeight * 0.6 && cHeight <= pHeight * 1.3) { return { scale:3, name:"averageCharacter"}; } // character is about my height.
    if (cHeight > pHeight * 1.3 && cHeight <= pHeight * 1.6) { return { scale:4, name:"bigCharacter"}; }     // character is significantly taller than me.
    if (cHeight > pHeight * 1.6)                             { return { scale:5, name:"giantCharacter"}; }   // character is gigantic.
  }

}
