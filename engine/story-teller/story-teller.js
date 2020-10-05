global.StoryTeller = class StoryTeller {

  // The StoryTeller may be used for sex events other than the training events,
  // so I think we should have some options with how they're built. The
  // training action will build them with a weaver context and a consent levels
  // object. If some other class needs a StoryTeller and it doesn't have either
  // one of those we can add an async static constructor function to the
  // StoryTeller to build them out.
  constructor(options) {
    this._consent = options.consent;
    this._context = options.context;
    this._segments = [];
    this._status = options.status;

    if (options.course) { this._course = Course.lookup(options.course); }
  }

  get consent() { return this._consent; }
  get context() { return this._context; }
  get course() { return this._course; }
  get character() { return this.context.get('C').character; }
  get player() { return this.context.player.character; }
  get status() { return { ...this._status }; }
  get playerBody() { return this.context.player.body; }
  get playerCock() { return this.context.player.cock; }
  get characterBody() { return this.context.get('C').body; }
  get location() { return Location.lookup(this._status.location); }

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
  //   playerClothing: outfit, cockOut, titsOut, nude
  //   playerCock: soft, hard
  //   playerPussy: dry, wet
  //
  //   characterSpeaking: true
  //   characterPosition: standing, sitting, laying, kneeling, bent-over, straddle, reverse-straddle, table-on-back
  //   characterClothing: outfit, cockOut, titsOut, nude
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

  // async getCharacterCanSuckCock() {
  //   if (this._characterCanSuckCock == null) { this._characterCanSuckCock = await this.character.canSuckCock(this.playerCock); }
  //   return this._characterCanSuckCock;
  // }
  //
  // async getCharacterCockDesirability() {
  //   if (this._characterCockDesirability == null) { this._characterCockDesirability = await this.character.getCockDesirability(this.playerCock); }
  //   return this._characterCockDesirability;
  // }

  async hasCharacterBeenTrained() { return await this.character.hasBeenTrained(); }
  async hasCharacterBeenTrainedThisWay() { return await this.character.hasBeenTrained(this.course.code); }
  async hasCharacterHadSexWithPlayer() { return await this.character.hasHadSexWithPlayer(); }

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

  // Canned General Segments
  // async compareHeights() { return await StoryTeller.GeneralSegments.compareHeights(this); }
  // async startTraining() { await StoryTeller.GeneralSegments.startTraining(this); }
  async startSittingWhenCharacterArrives() { await StoryTeller.GeneralSegments.startSittingWhenCharacterArrives(this); }
  async tellCharacterToJoinMe() { await StoryTeller.GeneralSegments.tellCharacterToJoinMe(this); }

  // Canned Cock Segments
  // async showCock() { await StoryTeller.CockSegments.showCock(this); }

  // Canned Oral Segments
  // async positionCharacterForGettingCockOral() {}
  // async positionCharacterForGettingPussyOral() {}
  //
  // async positionCharacterForGivingCockOral() {
  //   (this.summoner.consent.level == 'rape') ?
  //      (await StoryTeller.OralSegments.CockPositioning.positionRoughly(this)):
  //      (await StoryTeller.OralSegments.CockPositioning.positionGently(this));
  // }
  //
  // async positionCharacterForGivingPussyOral() {
  //   (this.summoner.consent.level == 'rape') ?
  //      (await StoryTeller.OralSegments.PussyPositioning.positionRoughly(this)):
  //      (await StoryTeller.OralSegments.PussyPositioning.positionGently(this));
  // }
  //
  // async startFrontBlowjob()     { await StoryTeller.OralSegments.BlowjobSegments.startFrontBlowjob(this); }
  // async startOnBackBlowjob()    { await StoryTeller.OralSegments.BlowjobSegments.startOnBackBlowjob(this); }
  // async continueFrontBlowjob()  { await StoryTeller.OralSegments.BlowjobSegments.continueFrontBlowjob(this); }
  // async continueOnBackBlowjob() { await StoryTeller.OralSegments.BlowjobSegments.continueOnBackBlowjob(this); }
  // async cumFromBlowjob()        { await StoryTeller.OralSegments.BlowjobSegments.cumFromBlowjob(this); }

  // ===========================================================================
  //                            Utilities & Helpers
  // ===========================================================================

  // Utility function to add randomly selectable text to an options array that
  // all share common state values.
  static addOptionsWith(options, texts, state) {
    each(texts, text => options.push({ text, ...state }));
  }

  inPlayerBedroom() {
    return Flag.lookup('player.bed-location') == this.location.code;
  }

  // Get a quick estimate of the height difference between the player and the
  // character. These might need to be tweeked over time. Not sure yet how
  // common these different classes will be.
  // async heightDifference() {
  //   const pHeight = (await this.getPlayerBody()).height;
  //   const cHeight = (await this.getCharacterBody()).height;
  //
  //   if (cHeight <= pHeight * 0.2)                            { return { scale:0, name:"miniCharacter"}; }    // character is smaller than knee high.
  //   if (cHeight > pHeight * 0.2 && cHeight <= pHeight * 0.4) { return { scale:1, name:"tinyCharacter"}; }    // character is smaller than waist high.
  //   if (cHeight > pHeight * 0.4 && cHeight <= pHeight * 0.6) { return { scale:2, name:"smallCharacter"}; }   // character is about waist high to me.
  //   if (cHeight > pHeight * 0.6 && cHeight <= pHeight * 1.3) { return { scale:3, name:"averageCharacter"}; } // character is about my height.
  //   if (cHeight > pHeight * 1.3 && cHeight <= pHeight * 1.6) { return { scale:4, name:"bigCharacter"}; }     // character is significantly taller than me.
  //   if (cHeight > pHeight * 1.6)                             { return { scale:5, name:"giantCharacter"}; }   // character is gigantic.
  // }

}
