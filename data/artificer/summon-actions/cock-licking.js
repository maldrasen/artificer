SummonAction.build('cock-licking', {
  category: 'Oral',
  name: 'Cock Licking',
  description: `I'm going to have {{C::character.firstName}} lick my cock until I cum all over {{C::gender.his}} face.`,

  requirements: [
    'player.has-cock',
    'canSuckCock(C,P).mouthFit=impossible'],

  difficulty:    1,
  effects:       'head',
  complementing: ['cock-lover','cum-lover','oral-slut','submissive'],
  conflicting:   ['dominant'],

  supportClass: () => SummonAction.CockLicking,
});

// The cock licking action is an oral event that's only available when the
// player's cock is far too large for a minion to suck. As a result they'll
// only be able to lick and kiss along the shaft, and rub their bodies along it.

SummonAction.CockLicking = (function() {

  async function writeEnthusiasticStory(summoner) {
    if (summoner.character.speciesCode == 'scaven') { return await enthusiasticScavenStory(summoner); }
    return "TODO: Enthusiastic Cock Licking Story."
  }

  async function writeConsentStory(summoner) {
    if (summoner.character.speciesCode == 'scaven') { return await consentingScavenStory(summoner); }
    return "TODO: Consenting Cock Licking Story."
  }

  async function writeReluctantStory(summoner) {
    if (summoner.character.speciesCode == 'scaven') { return await reluctantScavenStory(summoner); }
    return "TODO: Reluctant Cock Licking Story."
  }

  async function writeRapeStory(summoner) {
    if (summoner.character.speciesCode == 'scaven') { return await rapeScavenStory(summoner); }
    return "TODO: Rape Cock Licking Story."
  }

  // ===========================================================================
  //                         Scaven Specific Stories
  // ===========================================================================
  // Starting off with these. The scaven are pretty unique in all the summon
  // actions because they're so small. The player's cock can be as large as
  // they are and while licking they'll use their many nipples as well.

  async function normalStart(summoner) {
    const storyTeller = new Summoner.StoryTeller(summoner);
    await storyTeller.startSummoning();
    await storyTeller.addSegment(await summoner.character.reactToPlayer())
    await storyTeller.showCock();
    await storyTeller.addSegment(await summoner.character.reactToCock(await storyTeller.getPlayerCock()))

    return storyTeller;
  }

  async function enthusiasticScavenStory(summoner) {
    const storyTeller = await normalStart(summoner);
    return storyTeller.compile();
  }

  async function consentingScavenStory(summoner) {
    const storyTeller = await normalStart(summoner);
    const cock = storyTeller.getPlayerCock();
    const body = storyTeller.getCharacterBody();
    const sizeComparison = getSizeComparison(cock.length, body.height);

    // === Part One ===
    // The character approaches me and starts rubbing and licking my cock,
    // getting me hard if I'm not already.
    storyTeller.addSeparator();
    let options = [];

    // My cock is a managable size, so there's no need to focus on the size
    // comparison here.
    if (sizeComparison == 'average') {
      if (storyTeller.mightBe('playerPosition','standing')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{C::character.firstName}} reaches out and takes my cock in {{C::gender.his}} small hands and starts to
             slowly rub them up and down its full {{P::cock.sixInch}} length. {{C::character.He}}'s so much shorter
             than myself so {{C::gender.his}} face is right at dick level. {{C::character.He}} closes the space
             between us and nuzzles {{C::gender.his}} face against the side of my cock, opening {{C::gender.his}} mouth
             wide and letting {{C::gender.his}} tongue drag along its side as it grows hard in {{C::gender.his}}
             hands.`,

            `{{C::character.firstName}} closes the space between us and presses {{C::gender.his}} face against my
             shaft, nuzzling against it affectionately. {{C::gender.He}} opens {{C::gender.his}} mouth wide and lets
             {{C::gender.his}} tongue loll out of {{C::gender.his}} mouth, then drags it slowly up the length of my
             {{P::cock.sixInch}} long cock. And then again. And with each long lick my cock grows harder until it's
             standing straight up in front of me.`,

            `{{C::character.firstName}} reaches out and takes my cock in {{C::gender.his}} hands, lifting it, feeling
             it's weight. {{C::gender.He}} leans in closer and, nuzzles {{C::gender.his}} face down against my
             ballsack, licking and kissing the underside of my dangling balls before running {{C::gender.his}} tongue
             up the entire length of my hardening shaft. {{C::gender.He}}'s short enough that {{C::gender.he}} needs to
             stand on {{C::gender.his}} toes to reach the tip of my {{P::cock.sixInch}} long cock, now standing
             straight up in front of me.`,
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{C::character.firstName}} closes the distance between us and presses {{C::gender.his}} face against my
             hard throbbing member, nuzzling its hot flesh and planting kisses over its surface. {{C::gender.He}} opens
             {{C::gender.his}} mouth wide and drags {{C::gender.his}} tongue up its {{P::cock.sixInch}} length, taking
             long languid strokes from my dangling ballsack all the way to the tip, while softly stroking it with
             {{C::gender.his}} hands at the same time.`,

            `{{C::character.firstName}} opens {{C::gender.his}} mouth wide, extending {{C::gender.his}} tongue as
             {{C::gender.he}} presses {{C::gender.his}} face against my hard dick. {{C::gender.He}} starts taking long
             licks up and down my {{P::cock.sixInch}} long shaft, slowly, but with a pleasant amount of pressure. At
             the same time {{C::gender.he}} reaches up under my balls, softly caressing them with the sharp tips of
             {{C::gender.his}} claws as {{C::gender.he}} kisses and licks the shaft.`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','sitting')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{C::character.firstName}} leans down and rests {{C::gender.his}} head in my lap, nuzzling up against my
             ballsack. I feel {{C::gender.his}} wet tongue snake out between my balls and leg, licking the day's sweat
             off of me as {{C::gender.he}} takes hold of my soft cock and starts rubbing it against the side of
             {{C::gender.his}} face. My cock begins to grow hard from {{C::gender.his}} kissing and licking and soon
             {{C::gender.he}}'s licking the full {{P::cock.sixInch}} length of my cock. Slowly dragging
             {{C::gender.his}} tongue up and down the shaft.`,

            `{{C::character.firstName}} bends down and closes {{C::gender.his}} hands around my soft cock, squeezing it
             tightly so that the thick head bulges outward. {{C::gender.He}} sucks my cockhead into {{C::gender.his}}
             wide open mouth, completely filling it. My dick grows hard from the attention, and soon {{C::gender.he}}'s
             unable to keep it in {{C::gender.his}} mouth as it grows to its full {{P::cock.sixInch}} length.
             {{C::gender.He}} keeps {{C::gender.his}} mouth open wide as {{C::gender.he}} starts to rub it up and down
             the side my shaft. {{C::gender.His}} hand rubs against the other side of my cock, keeping it firmly
             pressed against {{C::gender.his}} face.`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Cock is already hard while sitting)`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','laying')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get cock hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Cock is already hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }
      }
    }

    // My cock is a third the length of her body, about a big as her arm. It's
    // size in comparison is worth mentioning, but the text here is essentially
    // the same as for an average sized cock.
    if (sizeComparison == 'third') {
      options.push({ text:'(TODO: Cock is very large)' })
    }

    // My cock is over half of her body length, it least as large as one of her
    // legs. It's becoming unweildly for her.
    if (sizeComparison == 'half') {
      if (storyTeller.mightBe('playerPosition','standing')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get huge cock hard while standing)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Huge cock is already hard while standing)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','sitting')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{C::character.firstName}} climbs up into my lap, spreading {{C::gender.his}} legs wide around my own.
             {{C::character.He}} takes my cock in {{C::gender.his}} small hands and starts to slowly rub them up and
             down its full {{P::cock.sixInch}} length, urging it to grow hard between us. {{C::character.He}} leans
             down and nuzzles his face against the head as it grows upward to meet him, then opens his mouth wide to
             let {{C::gender.his}} tongue swirl around the tip.`,

            `{{C::character.firstName}} puts {{C::gender.his}} head in my lap and nuzzles my soft cock with
             {{C::gender.his}} face. {{C::gender.He}} starts to kiss and lick me all over my shaft and balls. I feel
             {{C::gender.his}} tongue work it's way under my foreskin as he coaxes my cock to grow hard. Then, as my
             dick grows fully erect {{C::gender.he}} climbs up into my lap, dragging his tongue up its entire
             {{P::cock.sixInch}} length before pressing {{C::gender.his}} body against it, sandwiching it between us.`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `{{C::character.firstName}} climbs up into my lap, spreading {{C::gender.his}} legs wide around my own as
             {{C::gender.he}} presses {{C::gender.his}} body fully against my hard shaft. {{C::gender.He}} knows my
             {{P::cock.sixInch}} long cock is a bit too large for {{C::gender.him}} to really do much with so
             {{C::gender.he}} concentrates on pleasuring my cockhead with {{C::gender.his}} mouth and tongue while
             keeping his {{C::gender.his}} lithe body pressed against the shaft.`,

            `{{C::character.firstName}} starts low, pressing {{C::gender.his}} face into my lap, nuzzling against my
             ballsack while softly running {{C::gender.his}} claws up the length of my {{P::cock.sixInch}} long shaft.
             {{C::gender.He}} starts taking long slow licks up the entire length, ending each lick with a kiss on the
             top of my cockhead. Then, with his last lick he climbs up into my lap and presses his lithe body fully
             against my shaft, sandwiching it tightly between us.`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','laying')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get huge cock hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Huge cock is already hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }
      }
    }

    // My cock is about as large as she is. It's too large for her to lick in
    // it's entirety. She could just lay astride the entire thing, licking the
    // head while grinding against the shaft.
    if (sizeComparison == 'full') {
      if (storyTeller.mightBe('playerPosition','standing')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get unbelievably large cock hard while standing)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Unbelievably large cock is already hard while standing)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','sitting')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get unbelievably large cock hard while sitting)`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Unbelievably large cock is already hard while sitting)`
          ],{ playerPosition:'sitting', playerCock:'hard' });
        }
      }

      if (storyTeller.mightBe('playerPosition','laying')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Get unbelievably large cock hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }

        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(TODO: Huge unbelievably large is already hard while laying)`
          ],{ playerPosition:'laying', playerCock:'hard' });
        }
      }
    }

    storyTeller.addSegment(Random.from(options));

    // === Part Two ===
    // Licking and nibbling about the glans of my cock.

    options = [
      `{{C::gender.He}} pushes the head of my cock into {{C::gender.his}} open mouth, trying to open up as wide as
       {{C::gender.he}} can but {{C::gender.he}} can't quite get {{C::gender.his}} lips all the way around the
       {{P::cock.twoInch}} wide head. {{C::gender.His}} tongue playfully pokes at my urethra for a few seconds, but
       then moves down to lick and nibble along {{P::cock.theGlansOfHisCock}}.`,

      `{{C::gender.He}} opens {{C::gender.his}} mouth and tries to stuff as much of the {{P::cock.twoInch}} wide head
       into it as {{C::gender.he}} can manage. {{C::gender.He}} sucks hard on the head for a while before moving down
       to lick and nibble along {{P::cock.theGlansOfHisCock}}.`
    ];

    storyTeller.addSegment({ text:Random.from(options) });
    options = [];

    // === Part Three ===
    // Working the shaft.

    if (storyTeller.mightBe('playerPosition','standing')) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `(TODO: Work the shaft while standing.)`
      ],{ playerPosition:'standing' });
    }

    if (storyTeller.mightBe('playerPosition','sitting')) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `(TODO: Work the shaft while sitting.)`
      ],{ playerPosition:'sitting' });
    }

    if (storyTeller.mightBe('playerPosition','laying')) {
      Summoner.StoryTeller.addOptionsWith(options,[
        `(TODO: Work the shaft while laying.)`
      ],{ playerPosition:'laying' });
    }

    storyTeller.addSegment(Random.from(options));

    // === Part Four ===
    // Orgasm

    return storyTeller.compile();
  }

  async function reluctantScavenStory(summoner) {
    const storyTeller = await normalStart(summoner);
    return storyTeller.compile();
  }

  async function rapeScavenStory(summoner) {
    const storyTeller = await normalStart(summoner);
    return storyTeller.compile();
  }

  // Used specifically by the scaven versions of this action where the cock
  // length can potentially be a significant percentage of the character's
  // overall height.
  function getSizeComparison(cockLength, bodyHeight) {
    if (cockLength > bodyHeight * 0.8) { return 'full'; }
    if (cockLength > bodyHeight * 0.5) { return 'half'; }
    if (cockLength > bodyHeight * 0.3) { return 'third'; }
    return 'average';
  }

  return {
    writeEnthusiasticStory,
    writeConsentStory,
    writeReluctantStory,
    writeRapeStory,
  };

})();
