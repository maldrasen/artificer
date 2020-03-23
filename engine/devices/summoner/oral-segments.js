Summoner.OralSegments = (function() {

  // Position a character to give oral. This will depend on the player's
  // position, the character's height, and other factors, furniture in the room,
  // etc.
  //
  // Before we can set the character's position the player's position should
  // have already been determined. Other starting positions or an unset
  // starting position might be possible someday, but for now the player must
  // be standing, laying, or sitting.
  //
  async function positionCharacterForGivingCockOral(storyTeller) {
    const playerPosition = storyTeller.getStatus('playerPosition');
    const heightDifference = await storyTeller.heightDifference();

    if (ArrayUtility.contains(['laying','sitting','standing'],playerPosition) == false) {
      throw `Invalid player position - ${playerPosition}`
    }

    // The character is only about knee high, so standing isn't an option. The
    // player will need to lay down for this.
    if (heightDifference.name == 'miniCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with vase height difference.' });
    }

    // The positioning for tiny (less than waist high) and small (about waist
    // high) is the same when the player is sitting or laying down. The only
    // real difference is for standing players who will need to get lower.
    if (heightDifference.name == 'tinyCharacter') {
      if (playerPosition == 'laying') { await givingCockOralPositionWhenSmallLaying(storyTeller); }
      if (playerPosition == 'sitting') { await givingCockOralPositionWhenSmallSitting(storyTeller); }
      if (playerPosition == 'standing') { await givingCockOralPositionWhenTinyStanding(storyTeller); }
    }
    if (heightDifference.name == 'smallCharacter') {
      if (playerPosition == 'laying') { await givingCockOralPositionWhenSmallLaying(storyTeller); }
      if (playerPosition == 'sitting') { await givingCockOralPositionWhenSmallSitting(storyTeller); }
      if (playerPosition == 'standing') { await givingCockOralPositionWhenSmallStanding(storyTeller); }
    }

    // Most characters other than scaven, kobolds, and goblins will probably
    // fall into this category, unless the player is very tall.
    if (heightDifference.name == 'averageCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with basically no height difference.' });
    }
    if (heightDifference.name == 'bigCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with larger character.' });
    }
    if (heightDifference.name == 'giantCharacter') {
      storyTeller.addSegment({ text:'TODO: Position character with much larger character.' });
    }
  }

  // If the player is standing in front of a character that doesn't quite come
  // up to his waist, then the player needs to move and reposition the
  // character in a way that it's possible for some oral sex to happen. I'm
  // probably overcomplicating things here again. This function will set both
  // the player and the character positions, getting everything ready
  // essentially.
  //
  // TODO: When we do the enthuastic and reluctant versions of the actions we
  //       can extend this, limiting some of the descriptions to whatever
  //       the consent condition is. We'll also need a seperate rape version
  //       where the player forcibly puts the character where they want them.
  //       We'll probably need more furniture options as well.
  //
  async function givingCockOralPositionWhenTinyStanding(storyTeller) {
    const compareHeights = await storyTeller.compareHeights();
    const myBedroom = await storyTeller.inPlayerBedroom();
    const location = await storyTeller.getLocation();
    const bed = await location.hasBed();
    const chair = await location.hasChair();
    const table = await location.hasTable();

    // === Part 1 ===
    // The character is too damn short.

    let segment;
    let nextSegment;
    let options = [
      { text:`{{He}} closes the distance between us and hugs me tightly, resting {{his}} head on my thigh.` },
      { text:`{{He}} hugs me tightly around one of my legs, which is as far as {{he}} can reach given how short {{he}} is.` },
    ];

    if (storyTeller.mightBe('playerCock','soft')) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} approaches me, running {{his}} fingers up my legs as {{he}} looks up at my dangling cock.`,
        `{{He}} closes the distance between us, gazing up at my {{P::cock.big}} cock dangling over {{his}} head.`,
      ],{ playerCock:'soft' });
    }

    if (storyTeller.mightBe('playerCock','hard')) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} approaches me, running {{his}} fingers up my legs as {{he}} looks up at my trobbing cock.`,
        `{{He}} closes the distance between us, gazing up at my {{P::cock.big}} cock swawing in the air over {{his}} head.`,
      ],{ playerCock:'hard' });
    }

    // === Part 2 ===
    // Position the player.

    segment = Random.from(options);
    segment.text = `${segment.text} ${compareHeights}, so {{he}}'d have some trouble reaching my dick from down there.`;
    options = [];

    if (myBedroom) {
      if ((await Flag.lookupValue('player.bed-type')) == 'fur-pile') {
        Summoner.StoryTeller.addOptionsWith(options,[
          `I lead {{him}} over to the pile or furs I've been using as a bed and lay down, letting {{him}} climb on top of me.`,
          `I reach down and easily lift {{him}} up, then carry {{him}} over to the pile of furs I've been using as a bed. I drop down into them with {{him}} on top of me.`,
          `I lay down on the pile of furs I've been using as a bed and motion for {{him}} to come join me.`,
        ],{ playerPosition:'laying' });
      }
    }
    if (!myBedroom && bed) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `I lead {{him}} over to the bed and let {{him}} climb on top of me.`,
        `I reach down and easily lift {{him}} up, then carry {{him}} over to the bed, dropping down onto it with {{him}} on top of me.`,
        `I lay down on the bed and motion for {{him}} to come join me.`,
      ],{ playerPosition:'laying' });
    }

    if (chair) {
      if (storyTeller.mightBe('playerCock','soft')) {
        Summoner.StoryTeller.addOptionsWith(options,[
          `I take a seat and spread my legs slightly, to let my cock flop out in front of me.`,
          `I take a seat and spread my legs slightly, letting my soft cock lay out in front of me.`,
        ],{ playerPosition:'sitting', playerCock:'soft' });
      }
      if (storyTeller.mightBe('playerCock','hard')) {
        Summoner.StoryTeller.addOptionsWith(options,[
          `I take a seat and lean back a bit, letting my {{P::cock.big}} hard cock stand out boldly before me.`,
          `I take a seat and lean back a bit while slowly stroking my hard cock.`,
        ],{ playerPosition:'sitting', playerCock:'hard' });
      }
    }

    // If there's a table in the room the player can remain standing if they
    // position the character on the table.
    if (table) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `I gesture towards the table. {{He}} nods and climbs up onto the table, laying on {{his}} back with {{his}} head extending past the tabletop slightly.`,
        `I reach down and easily lift {{him}} up, then carry {{him}} over to the table, laying {{him}} on {{his}} back with {{his}} head extending past the tabletop slightly.`,
      ],{ playerPosition:'standing' });
    }

    // No other option but to lay on the ground.
    if (!(bed||chair||table)) {
      options.push({ text:`Seeing no other easy option, I lay down on the ground, and let {{him}} climb on top of me.`, playerPosition:'laying' });
    }

    // === Part 3 ===
    // Position the character to match the player.

    nextSegment = Random.from(options);
    segment.text = `${segment.text} ${nextSegment.text}`;
    segment.playerPosition = nextSegment.playerPosition;
    options = [];

    // The player is laying down, so the character should position herself on
    // top either on the player's leg facing up, or on their chest facing down.
    if (segment.playerPosition == 'laying') {
      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} straddles my thigh and rubs {{his}} face against my {{P::balls.twoInch}} wide {{ballsack}}.`,
        `{{He}} straddles my thigh, squeezing it tightly between {{his}} legs as {{he}} rests {{his}} face against my soft cock, nuzzling up against the hot flesh.`,
      ],{ characterPosition:'straddle' });

      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} straddles my chest, opening {{his}} legs wide and pointing {{his}} inviting ass up towards my face as {{he}} opens {{his}} mouth for the tip of my cock.`,
        `{{He}} straddles my chest, opening {{his}} legs wide and pointing {{his}} inviting ass up towards my face before planting a kiss on the tip of my dick.`,
      ],{ characterPosition:'reverse-straddle' });
    }

    if (segment.playerPosition == 'sitting') {
      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} pushes {{his}} body up between my legs, reaching down to gently stroke my balls while lowering {{his}} face to kiss the head of my cock.`,
        `Sitting in the chair puts {{him}} at just the right height to press {{his}} face against the hard flesh of my cock.`,
      ],{ characterPosition:'standing' });
    }

    // If the player is standing, the minion is already up on the tabletop. If
    // that's the case we really just have them gesture and set their position.
    if (segment.playerPosition == 'standing') {
      Summoner.StoryTeller.addOptionsWith(options,[
        `{{He}} smiles upside down at me and opens his mouth wide for my cock, letting {{his}} tongue hang out lewdly.`,
        `{{He}} smiles upside down at me then puts two fingers into {{his}} mouth, pulling it open wide for my cock.`,
      ],{ characterPosition:'table-on-back' });
    }

    nextSegment = Random.from(options);
    segment.text = `${segment.text} ${nextSegment.text}`;
    segment.characterPosition = nextSegment.characterPosition;

    storyTeller.addSegment(segment);
  }

  async function givingCockOralPositionWhenSmallLaying(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is laying.' });
  }

  async function givingCockOralPositionWhenSmallSitting(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is sitting.' });
  }

  async function givingCockOralPositionWhenSmallStanding(storyTeller) {
    storyTeller.addSegment({ text:'TODO: Position character, they are small, the player is standing.' });
  }

  return {
    positionCharacterForGivingCockOral,
  };

})();
