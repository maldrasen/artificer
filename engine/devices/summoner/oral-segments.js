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

console.log("=== Positioning ===")
console.log("  Player Start:",playerPosition);
console.log("  Height Difference:",heightDifference);

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

console.log("Positioned:")
console.log("  Player Position:",storyTeller.getStatus('playerPosition'));
console.log("  Character Position:",storyTeller.getStatus('characterPosition'));

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

    console.log("Segment?",segment)

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














// Temp, use what we can

  // if (sizeComparison == 'huge') {
  //   if (storyTeller.mightBe('playerPosition','standing')) {
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} reaches out and takes my cock in {{C::gender.his}} small hands and starts to
  //          slowly rub them up and down its full {{P::cock.sixInch}} length. {{C::character.He}}'s so much shorter
  //          than myself so {{C::gender.his}} face is right at dick level. {{C::character.He}} closes the space
  //          between us and nuzzles {{C::gender.his}} face against the side of my cock, opening {{C::gender.his}} mouth
  //          wide and letting {{C::gender.his}} tongue drag along its side as it grows hard in {{C::gender.his}}
  //          hands.`,
  //
  //         `{{C::character.firstName}} closes the space between us and presses {{C::gender.his}} face against my
  //          shaft, nuzzling against it affectionately. {{C::gender.He}} opens {{C::gender.his}} mouth wide and lets
  //          {{C::gender.his}} tongue loll out of {{C::gender.his}} mouth, then drags it slowly up the length of my
  //          {{P::cock.sixInch}} long cock. And then again. And with each long lick my cock grows harder until it's
  //          standing straight up in front of me.`,
  //
  //         `{{C::character.firstName}} reaches out and takes my cock in {{C::gender.his}} hands, lifting it, feeling
  //          it's weight. {{C::gender.He}} leans in closer and, nuzzles {{C::gender.his}} face down against my
  //          ballsack, licking and kissing the underside of my dangling balls before running {{C::gender.his}} tongue
  //          up the entire length of my hardening shaft. {{C::gender.He}}'s short enough that {{C::gender.he}} needs to
  //          stand on {{C::gender.his}} toes to reach the tip of my {{P::cock.sixInch}} long cock, now standing
  //          straight up in front of me.`,
  //       ],{ playerPosition:'standing', playerCock:'hard' });
  //     }
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} closes the distance between us and presses {{C::gender.his}} face against my
  //          hard throbbing member, nuzzling its hot flesh and planting kisses over its surface. {{C::gender.He}} opens
  //          {{C::gender.his}} mouth wide and drags {{C::gender.his}} tongue up its {{P::cock.sixInch}} length, taking
  //          long languid strokes from my dangling ballsack all the way to the tip, while softly stroking it with
  //          {{C::gender.his}} hands at the same time.`,
  //
  //         `{{C::character.firstName}} opens {{C::gender.his}} mouth wide, extending {{C::gender.his}} tongue as
  //          {{C::gender.he}} presses {{C::gender.his}} face against my hard dick. {{C::gender.He}} starts taking long
  //          licks up and down my {{P::cock.sixInch}} long shaft, slowly, but with a pleasant amount of pressure. At
  //          the same time {{C::gender.he}} reaches up under my balls, softly caressing them with the sharp tips of
  //          {{C::gender.his}} claws as {{C::gender.he}} kisses and licks the shaft.`
  //       ],{ playerPosition:'standing', playerCock:'hard' });
  //     }
  //   }
  //
  //   if (storyTeller.mightBe('playerPosition','sitting')) {
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} leans down and rests {{C::gender.his}} head in my lap, nuzzling up against my
  //          ballsack. I feel {{C::gender.his}} wet tongue snake out between my balls and leg, licking the day's sweat
  //          off of me as {{C::gender.he}} takes hold of my soft cock and starts rubbing it against the side of
  //          {{C::gender.his}} face. My cock begins to grow hard from {{C::gender.his}} kissing and licking and soon
  //          {{C::gender.he}}'s licking the full {{P::cock.sixInch}} length of my cock. Slowly dragging
  //          {{C::gender.his}} tongue up and down the shaft.`,
  //
  //         `{{C::character.firstName}} bends down and closes {{C::gender.his}} hands around my soft cock, squeezing it
  //          tightly so that the thick head bulges outward. {{C::gender.He}} sucks my cockhead into {{C::gender.his}}
  //          wide open mouth, completely filling it. My dick grows hard from the attention, and soon {{C::gender.he}}'s
  //          unable to keep it in {{C::gender.his}} mouth as it grows to its full {{P::cock.sixInch}} length.
  //          {{C::gender.He}} keeps {{C::gender.his}} mouth open wide as {{C::gender.he}} starts to rub it up and down
  //          the side my shaft. {{C::gender.His}} hand rubs against the other side of my cock, keeping it firmly
  //          pressed against {{C::gender.his}} face.`,
  //       ],{ playerPosition:'sitting', playerCock:'hard' });
  //     }
  //
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} leans down and takes my cock in {{C::gender.his}} hands, pulling it towards
  //          {{C::gender.his}} open mouth. {{C::gender.He}} starts to kiss and swirl {{C::gender.his}} tongue around the
  //          tip as {{C::gender.his}} sharp claws lightly stroke up the sides of my {{P::cock.sixInch}} long cock.
  //          {{C::gender.He}} lets the head pop wetly out of {{C::gender.his}} mouth before running {{C::gender.his}}
  //          soft tongue down then back up the entire length of my shaft.`,
  //
  //         `I take my hard cock in one hand and the back of {{C::character.firstName's}} head in the other, guiding
  //          {{C::gender.his}} face down to my cock. {{C::gender.He}} opens {{C::gender.his}} mouth as wide as
  //          {{C::gender.he}} can as I push the head into it, completely stuffing {{C::gender.his}} mouth with its
  //          width. I hold {{C::gender.him}} there for a moment while {{C::gender.his}} small hands softly glide up and
  //          down my {{P::cock.sixInch}} long cock. Finally I release {{C::gender.him}} and {{C::gender.he}} begins to
  //          earnestly lick my cock, taking long slow licks along its entire length.`,
  //       ],{ playerPosition:'sitting', playerCock:'hard' });
  //     }
  //   }
  //
  //   // We want to make sure the player is actually laying down here. It
  //   // doesn't make sense for the character to "climb on top" of the player
  //   // if we don't know they're laying down yet, and if we do know we
  //   // don't want to mention it twice.
  //   if (storyTeller.getStatus('playerPosition') == 'laying') {
  //     let laying = [];
  //
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       if (storyTeller.character.genderCode == 'female') {
  //         laying.push(`{{C::character.firstName}} quickly slips out of {{C::gender.his}} clothing then climbs on top
  //           of me, straddling my leg. I feel {{C::gender.his}} pussy hot against my thigh as {{C::gender.he}} nuzzles
  //           {{C::gender.his}} face up against my ballsack. {{C::gender.He}} reaches out and grabs my balls in
  //           {{C::gender.his}} two small claws and pulls them upward, kissing and licking along the underside of my
  //           sack. My cock soon grows hard and {{C::gender.he}} slides up my leg slightly so that {{C::gender.he}} can
  //           lick the full length of my {{P::cock.sixInch}} long cock.`);
  //       }
  //       if (storyTeller.character.genderCode != 'female') {
  //         laying.push(`{{C::character.firstName}} quickly slips out of {{C::gender.his}} clothing then climbs on top
  //           of me, straddling my leg. I feel {{C::gender.his}} own cock hot and hardening against my thigh as
  //           {{C::gender.he}} nuzzles {{C::gender.his}} face up against my ballsack. {{C::gender.He}} reaches out and
  //           grabs my balls in {{C::gender.his}} two small claws and pulls them upward, kissing and licking along
  //           the underside of my sack. My own cock soon grows hard and {{C::gender.he}} slides up my leg slightly so
  //           that {{C::gender.he}} can lick the full length of my {{P::cock.sixInch}} long cock.`);
  //       }
  //     }
  //
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       if (storyTeller.character.genderCode == 'female') {
  //         laying.push(`{{C::character.firstName}} quickly slips out of {{C::gender.his}} clothing then climbs on top
  //           of me, straddling my leg. I feel {{C::gender.his}} pussy hot against my thigh as {{C::gender.he}} lowers
  //           {{C::gender.his}} face towards my hard {{P::cock.sixInch}} long cock. {{C::gender.He}} starts by planting
  //           light kisses all over my shaft, nuzzling and licking the hot flesh while reaching down to caress my
  //           balls. Soon though {{C::gender.he}} props himself up so that {{C::gender.he}} can firmly lick the entire
  //           length of my cock, rubbing {{C::gender.his}} pussy against my leg with each long lick.`);
  //       }
  //       if (storyTeller.character.genderCode != 'female') {
  //         laying.push(`{{C::character.firstName}} quickly slips out of {{C::gender.his}} clothing then climbs on top
  //           of me, straddling my leg. I feel {{C::gender.his}} own cock hot and hardening against my thigh as
  //           {{C::gender.he}} lowers {{C::gender.his}} face towards my hard {{P::cock.sixInch}} long cock.
  //           {{C::gender.He}} starts by planting light kisses all over my shaft, nuzzling and licking the hot flesh
  //           while reaching down to caress my balls. Soon though {{C::gender.he}} props himself up so that
  //           {{C::gender.he}} can firmly lick the entire length of my cock, rubbing {{C::gender.his}}
  //           {{C::cock.sixInch}} long dick against my leg with each long lick.`);
  //       }
  //     }
  //
  //     Summoner.StoryTeller.addOptionsWith(options, laying, { playerCock:'hard' });
  //   }
  // }
  //
  // // My cock is over half of her body length, it's least as large as one of
  // // her legs. We can skip these segments for now. They require an huge cock
  // // which is hard to get at the moment.
  // if (sizeComparison == 'massive') {
  //   if (storyTeller.mightBe('playerPosition','standing')) {
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `(TODO: Get massive cock hard while standing)`
  //       ],{ playerPosition:'standing', playerCock:'hard' });
  //     }
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `(TODO: Massive cock is already hard while standing)`
  //       ],{ playerPosition:'standing', playerCock:'hard' });
  //     }
  //   }
  //
  //   if (storyTeller.mightBe('playerPosition','sitting')) {
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} climbs up into my lap, spreading {{C::gender.his}} legs wide around my own.
  //          {{C::character.He}} takes my massive cock in {{C::gender.his}} small hands and starts to slowly rub them
  //          up and down its full {{P::cock.sixInch}} length, urging it to grow hard between us. {{C::character.He}}
  //          leans down and nuzzles {{C::gender.his}} face against the head as it grows upward to meet him, then opens
  //          {{C::gender.his}} mouth wide to let {{C::gender.his}} tongue swirl around the tip.`,
  //
  //         `{{C::character.firstName}} puts {{C::gender.his}} head in my lap and nuzzles my soft cock with
  //          {{C::gender.his}} face. {{C::gender.He}} starts to kiss and lick me all over my shaft and balls. I feel
  //          {{C::gender.his}} tongue work it's way under my foreskin as {{C::gender.he}} coaxes my cock to grow hard.
  //          Then, as my massive dick grows fully erect {{C::gender.he}} climbs up into my lap, dragging
  //          {{C::gender.his}} tongue up its entire {{P::cock.sixInch}} length before pressing {{C::gender.his}} body
  //          against it, sandwiching it between us.`
  //       ],{ playerPosition:'sitting', playerCock:'hard' });
  //     }
  //
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `{{C::character.firstName}} climbs up into my lap, spreading {{C::gender.his}} legs wide around my own as
  //          {{C::gender.he}} presses {{C::gender.his}} body fully against my hard shaft. {{C::gender.He}} knows my
  //          massive {{P::cock.sixInch}} long cock is far too large for {{C::gender.him}} to really do much with, so
  //          {{C::gender.he}} concentrates on pleasuring my cockhead with {{C::gender.his}} mouth and tongue while
  //          keeping {{C::gender.his}} lithe body pressed against the shaft.`,
  //
  //         `{{C::character.firstName}} starts low, pressing {{C::gender.his}} face into my lap, nuzzling against my
  //          ballsack while softly running {{C::gender.his}} claws up the length of my massive {{P::cock.sixInch}} long
  //          shaft. {{C::gender.He}} starts taking long slow licks up the entire length, ending each lick with a kiss
  //          on the top of my cockhead. Then, with {{C::gender.his}} last lick {{C::gender.he}} climbs up into my lap
  //          and presses {{C::gender.his}} lithe body fully against my shaft, sandwiching it tightly between us.`
  //       ],{ playerPosition:'sitting', playerCock:'hard' });
  //     }
  //   }
  //
  //   if (storyTeller.mightBe('playerPosition','laying')) {
  //     if (storyTeller.mightBe('playerCock','soft')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `(TODO: Get massive cock hard while laying)`
  //       ],{ playerPosition:'laying', playerCock:'hard' });
  //     }
  //
  //     if (storyTeller.mightBe('playerCock','hard')) {
  //       Summoner.StoryTeller.addOptionsWith(options,[
  //         `(TODO: Massive cock is already hard while laying)`
  //       ],{ playerPosition:'laying', playerCock:'hard' });
  //     }
  //   }
  // }




















  return {
    positionCharacterForGivingCockOral,
  };

})();
