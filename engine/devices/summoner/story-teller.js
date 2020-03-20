Summoner.StoryTeller = class StoryTeller {

  constructor(summoner, status) {
    this._summoner = summoner;
    this._status = status || {};
    this._segments = [];
  }

  get summoner() { return this._summoner; }
  get character() { return this.summoner.character; }

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

  async getPlayer() {
    if (this._player == null) { this._player = await Player.instance(); }
    return this._player;
  }

  async getPlayerCock() {
    if (this._playerCock == null) { this._playerCock = await (await this.getPlayer()).getCock(); }
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
      this._playerOutfit = await (await this.getPlayer()).getEquipment('outfit');
      if (this._playerOutfit == null) {
        this.getStatus('playerNude',true);
      }
    }

    return this._playerOutfit;
  }

  // The way all the summon events start is pretty similar, so rather than
  // repeating this pretty boring part of the scene over and over again, I'm
  // using the startSummoning() function to generate the initial sentence or
  // two of the summoning scene.
  //
  // Future Options: For once I have an assistant or there are other flags
  //    I ask my assistant to bring a minion to me.
  //    I have my assistant tie a minion up so they'll be ready for me. (bondage scene)
  //    A male minion is being fluffed in preperation for my arrival.
  //    An orgy is already in progress when I arrive. (orgy scene)
  //
  async startSummoning() {
    const location = await this.getLocation();
    const player = await this.getPlayer();
    const playerOutfit = await this.getPlayerOutfit();
    const cockToken = player.genderCode == 'female' ? '{{pussy}}' : '{{cock}}'

    let start = Random.fromFrequencyMap({
      already: 3,
      waiting: 10,
      meeting: 10,
    });

    // === The character is actually already here with you ===

    if (start == 'already') {
      let heHere = [
        { text:`I glance over at {{C::character.firstName}} who's here ${location.inTheName} with me.` },
        { text:`{{C::character.firstName}} is standing over by the wall.`, characterPosition:'standing' },
      ];
      let beckon = [
        { text:`I smile at {{C::gender.him}} and beckon {{C::gender.him}} to approach me.` },
        { text:`"{{C::character.firstName}}," I say, "come over here for a moment."`, playerSpeaking:true },
      ];

      if (this.character.speciesCode == 'scaven') {
        heHere.push({ text:`{{C::character.firstName}}'s lingering in the shadows, trying to stay hidden or at least out of sight.` });
        heHere.push({ text:`{{C::character.firstName}}'s hiding in the shadows against the back wall, but I see {{C::gender.him}} there.` });
        heHere.push({ text:`I see {{C::character.firstName}} hiding in the shadows against the back wall, trying to remain inconspicuous but available.` });
      }
      if (playerOutfit == null) {
        beckon.push({ text:`I'm already standing here nude so I give {{C::gender.him}} a wink while reaching down to slowly stroke my ${cockToken}.`, playerPosition:'standing' });
        beckon.push({ text:`I'm standing here nude, so with a wave of my hand I beckon {{C::gender.him}} to approach me.`, playerPosition:'standing' });
      }

      this.addSegment(Random.from(heHere));
      this.addSegment(Random.from(beckon));
      return;
    }

    // === Otherwise the player arranges the meeting ===

    let joinMe = [
      { text:`I ask for {{C::character.firstName}} to join me ${location.inTheName}. ` },
      { text:`I tell {{C::character.firstName}} to meet me ${location.inTheName}. ` },
    ];
    let heArrives = [];

    if (start == 'waiting') {
      heArrives.push({ text:`{{C::gender.He}} arrives not too long after myself.` });
      heArrives.push({ text:`{{C::gender.He}}'s punctual, arriving not too long after myself.` });
      heArrives.push({ text:`{{C::gender.He}} arrives a little later than I would have liked.` });

      if (playerOutfit == null) {
        Summoner.StoryTeller.addOptionsWith(heArrives,[
          `I'm standing nude up against a wall when {{C::gender.he}} arrives.`,
          `I'm standing nude, up against a wall, ideally stroking my ${cockToken}, when {{C::gender.he}} arrives.`,
        ],{ playerPosition:'standing' });

        if (await location.hasChair()) {
          Summoner.StoryTeller.addOptionsWith(heArrives,[
            `I arrive before {{C::gender.him}} and when {{C::gender.he}} arrives I'm sitting in a chair, ideally stroking my ${cockToken}.`,
            `I'm sitting nude, legs spread wide with one leg hooked over the arm of the chair, when {{C::gender.he}} arrives.`,
          ],{ playerPosition:'sitting' });
        }
        if (await location.hasBed()) {
          Summoner.StoryTeller.addOptionsWith(heArrives,[
            `I'm lying nude in bed when {{C::gender.he}} arrives.`,
            `I'm nude in bed waiting for {{C::gender.him}} to arrive, and when {{C::gender.he}} does {{C::gender.he}} finds me there ideally stroking my ${cockToken}.`,
          ],{ playerPosition:'laying' });
        }
      }
    }

    if (start == 'meeting') {
      joinMe.push({ text:`I tell {{C::character.firstName}} to wait for me ${location.inTheName}.` });
      joinMe.push({ text:`I tell {{C::character.firstName}} to go ${location.toTheName}.` });

      heArrives.push({ text:`{{C::gender.He}}'s there waiting for me when I arrive.` });
      heArrives.push({ text:`Like a good pet, {{C::gender.he}}'s waiting there for me when I arrive.` });
    }

    this.addSegment(Random.from(joinMe))
    this.addSegment(Random.from(heArrives));
  }

  // The player pulls out his cock and beckons the character to come service it.
  // This is done in several different summon actions, mostly oral scenes where
  // a bit of cock worship and such is called for. This segment should always
  // set the player position and the player cock hardness status.
  async showCock() {
    const outfit = await this.getPlayerOutfit();
    let options = []

    // The player is already nude and can just present himself. This is the
    // default for now until clothing is implemented. Once it is this function
    // will have the player take his clothes off, or just pull his cock out.
    // I could also still add these segments after they player has removed his
    // clothing or pulled his cock out.
    if (outfit == null) {

      // The player standing is assumed to be the default position here.
      if (this.mightBe('playerPosition','standing')) {
        if (this.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `I hold my soft cock by the base of the shaft, letting it swing slowly back and forth.`,
            `I take my still soft cock in my hand and start slowly stroking it.`,
            `I grab my cock under the balls, bunching up my sack and pushing my cock forward.`,
          ],{ playerPosition:'standing', playerCock:'soft' });
        }
        if (this.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `My dick is already hard. I grab it by the base and let it sway in front of me.`,
            `I slowly stroke my shaft, rubbing my hand up and down its hard length.`,
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
      }

      // Only if the player is explicitly sitting, which they might be if
      // startSummoning() indicates that they're waiting in a chair. Could
      // probably use a couple more variations on this based on size and cock
      // shape.
      if (this.getStatus('playerPosition') == 'sitting') {
        if (this.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `I lean back and spread my legs slightly, letting my cock and balls lay out heavily in front of me.`,
          ],{ playerPosition:'laying', playerCock:'soft' });
        }
        if (this.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `I lean back, thrusting my stiff cock forward, letting it sway in the air in front of me.`,
            `I lean back while slowly stroking my already hard cock.`,
          ],{ playerPosition:'laying', playerCock:'hard' });
        }
      }

      // Only if the player is explicitly laying, which they might be if
      // startSummoning() indicates that they're laying down.
      if (this.getStatus('playerPosition') == 'laying') {
        if (this.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `My cock is soft and hanging over my left leg slightly.`,
            `I'm resting on my side, letting my cock hang down heavily before me.`,
          ],{ playerPosition:'laying', playerCock:'soft' });
        }
        if (this.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `My dick is already hard. I grab it by the base and let it sway in the air above me.`,
            `I stretch a bit, arching my back and letting my cock rise up in the air; it's hard length resting heavily on my stomach.`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }
      }
    }

    this.addSegment(Random.from(options));
  }

  // Utility function to add randomly selectable text to an options array that
  // all share common state values.
  static addOptionsWith(options, texts, state) {
    each(texts, text => {
      options.push(extend(state, { text }));
    });
  }

}
