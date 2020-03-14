Summoner.StoryTeller = class StoryTeller {

  constructor(summoner, status) {
    this._summoner = summoner;
    this._status = status || {};
    this._segments = [];
  }

  get summoner() { return this._summoner; }
  get character() { return this.summoner.character; }

  getStatus(key) { return this._status[key]; }
  setStatus(key, value) { this._status[key] = value; }

  // In addition to the text, when adding a segment you can specify the
  // following. These attributes update the scene status, or they format the
  // segment somehow.
  //
  //   playerSpeaking: true
  //   playerPosition: standing, sitting, laying, kneeling, bent-over
  //   playerCock: sofy, hard
  //   playerPussy: dry, wet
  //
  //   characterSpeaking: true
  //   characterPosition: standing, sitting, laying, kneeling, bent-over
  //   characterCock: soft, hard
  //   characterPussy: dry, wet
  //
  addSegment(segment) {
    if (segment.playerSpeaking)    { segment.text = QuoteTransformer.run(segment.text, { speaker:'player' }); }
    if (segment.characterSpeaking) { segment.text = QuoteTransformer.run(segment.text, { speaker:'other'  }); }

    let statusAttributes = [
      'playerPosition', 'playerCock', 'playerPussy',
      'characterPosition', 'characterPussy', 'characterCock'
    ];

    each(statusAttributes, attribute => {
      if (segment[attribute]) {
        console.log("  Set:",attribute,"=",segment[attribute]);
        this.setStatus(attribute, segment[attribute]);
      }
    })

    this._segments.push(segment.text);

    console.log("Added Segment:",segment)
  }

  compile() {
    return this._segments.join(' ');
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
      // waiting: 10,
      // meeting: 10,
    });

    // === The character is actually already here with you ===

    if (start == 'already') {
      let heHere = [
        { text:`I glance over at {{C::character.firstName}} who's here ${location.inTheName} with me.` },
        { text:`{{C::character.firstName}} is standing over by the wall.`, characterPosition:'standing' },
      ];
      let beckon = [
        { text:`I smile at {{C::gender.him}} and beckon {{C::gender.him}} to approach me.` },
        { text:`"{{C::character.firstName}}", I say, "come over here for a moment."`, playerSpeaking:true },
      ];

      if (this.character.speciesCode == 'scaven') {
        heHere.push({ text:`{{C::character.firstName}}'s lingering in the shadows, trying to stay hidden or at least out of sight.` });
        heHere.push({ text:`{{C::character.firstName}}'s hiding in the shadows against the back wall, but I see {{C::gender.him}} there.` });
        heHere.push({ text:`I see {{C::character.firstName}} hiding in the shadows against the back wall, trying to remain inconspicuous but available.` });
      }
      if (playerOutfit == null) {
        beckon.push({ text:`I'm already standing here nude so I give {{C::gender.him}} a wink while reaching down to slowly stroke my ${cockToken}.`, playerPosition:'standing' });
        beckon.push({ text:`I'm standing here nude, so with a wave of my hand I beckon him to approach me.`, playerPosition:'standing' });
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
        heArrives.push({ text:`I'm standing nude up against a wall when {{C::gender.he}} arrives.`, playerPosition:'standing' });
        heArrives.push({ text:`I'm standing nude, up against a wall, ideally stroking my ${cockToken}, when {{C::gender.he}} arrives.`, playerPosition:'standing' });

        if (await location.hasChair()) {
          heArrives.push({ text:`I arrive before {{C::gender.him}} and when {{C::gender.he}} arrives I'm sitting in a chair, ideally stroking my ${cockToken}.`, playerPosition:'sitting' });
          heArrives.push({ text:`I'm sitting nude, legs spread wide with one leg hooked over the arm of the chair, when {{C::gender.he}} arrives.`, playerPosition:'sitting' });
        }
        if (await location.hasBed()) {
          heArrives.push({ text:`I'm lying nude in bed when {{C::gender.he}} arrives. }`, playerPosition:'laying' });
          heArrives.push({ text:`I'm nude in bed waiting for {{C::gender.him}} to arrive, and when {{C::gender.he}} does he finds me there ideally stroking my ${cockToken}. }`, playerPosition:'laying' });
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
  // a bit of cock worship and such is called for.
  async showCock() {
    this.addSegment({ text:'Show him my dick!' })
  }

  //
  // // Do I though? That's one possibility.
  // story += ` I take my soft thick cock by the base and let it swing back and forth. `;
  // story += cockReaction.text;
  // story += ` I beckon for him to approach me.`;

}
