StoryTeller.GeneralSegments = (function() {

  // The way all the training events start is pretty similar, so rather than
  // repeating this pretty boring part of the scene over and over again, I'm
  // using the startTraining() function to generate the initial sentence or
  // two of the summoning scene.
  //
  // Future Options: (Once I have an assistant or there are other flags)
  //    I ask my assistant to bring a minion to me.
  //    I have my assistant tie a minion up so they'll be ready for me. (bondage scene)
  //    A male minion is being fluffed in preperation for my arrival.
  //
  // Actually, I'm going to split this up into multiple functions. Some scenes
  // will have multiple starting options, but then this function should just
  // randomly select the starting function to call.
  //
  // async function startTraining(storyTeller) {
    // const location = storyTeller.location;
    // const playerOutfit = await storyTeller.getPlayerOutfit();
    // const cockToken = storyTeller.player.genderCode == 'female' ? '{{pussy}}' : '{{cock}}'
    //
    // let start = Random.fromFrequencyMap({
    //   already: 3,
    //   waiting: 10,
    //   meeting: 10,
    // });
    //
    // // The character is actually already here with you
    //
    // if (start == 'already') {
    //   let heHere = [
    //     { text:`I glance over at {{C::character.firstName}} who's here ${location.inTheName} with me.` },
    //     { text:`{{C::character.firstName}} is standing over by the wall.`, characterPosition:'standing' },
    //   ];
    //   let beckon = [
    //     { text:`I smile at {{him}} and beckon {{him}} to approach me.` },
    //     { text:`"{{C::character.firstName}}," I say, "come over here for a moment."`, playerSpeaking:true },
    //   ];
    //
    //   if (storyTeller.character.speciesCode == 'scaven') {
    //     heHere.push({ text:`{{C::character.firstName}}'s lingering in the shadows, trying to stay hidden or at least out of sight.` });
    //     heHere.push({ text:`{{C::character.firstName}}'s hiding in the shadows against the back wall, but I see {{him}} there.` });
    //     heHere.push({ text:`I see {{C::character.firstName}} hiding in the shadows against the back wall, trying to remain inconspicuous but available.` });
    //   }
    //   if (playerOutfit == null) {
    //     beckon.push({ text:`I'm already standing here nude so I give {{him}} a wink while reaching down to slowly stroke my ${cockToken}.`, playerPosition:'standing' });
    //     beckon.push({ text:`I'm standing here nude, so with a wave of my hand I beckon {{him}} to approach me.`, playerPosition:'standing' });
    //   }
    //
    //   storyTeller.addSegment(Random.from(heHere));
    //   storyTeller.addSegment(Random.from(beckon));
    //   return;
    // }
    //
    // // Otherwise the player arranges the meeting
    //
    // let joinMe = [
    //   { text:`I ask for {{C::character.firstName}} to join me ${location.inTheName}. ` },
    //   { text:`I tell {{C::character.firstName}} to meet me ${location.inTheName}. ` },
    // ];
    // let heArrives = [];
    //
    // if (start == 'waiting') {
    //   heArrives.push({ text:`{{He}} arrives not too long after myself.` });
    //   heArrives.push({ text:`{{He}}'s punctual, arriving not too long after myself.` });
    //   heArrives.push({ text:`{{He}} arrives a little later than I would have liked.` });
    //
    //   if (playerOutfit == null) {
    //     StoryTeller.addOptionsWith(heArrives,[
    //       `I'm standing nude up against a wall when {{he}} arrives.`,
    //       `I'm standing nude, up against a wall, ideally stroking my ${cockToken}, when {{he}} arrives.`,
    //     ],{ playerPosition:'standing' });
    //
    //     if (location.hasChair()) { MOVED }
    //     if (location.hasBed()) {
    //       StoryTeller.addOptionsWith(heArrives,[
    //         `I'm lying nude in bed when {{he}} arrives.`,
    //         `I'm nude in bed waiting for {{him}} to arrive, and when {{he}} does {{he}} finds me there ideally stroking my ${cockToken}.`,
    //       ],{ playerPosition:'laying' });
    //     }
    //   }
    // }
    //
    // if (start == 'meeting') {
    //   joinMe.push({ text:`I tell {{C::character.firstName}} to wait for me ${location.inTheName}.` });
    //   joinMe.push({ text:`I tell {{C::character.firstName}} to go ${location.toTheName}.` });
    //
    //   heArrives.push({ text:`{{He}}'s there waiting for me when I arrive.` });
    //   heArrives.push({ text:`Like a good pet, {{he}}'s waiting there for me when I arrive.` });
    // }
    //
    // storyTeller.addSegment(Random.from(joinMe))
    // storyTeller.addSegment(Random.from(heArrives));
  // }

  async function tellCharacterToJoinMe(storyTeller) {
    const meetMe = Random.from([
      `I tell {{C::character.firstName}} to meet me ${storyTeller.location.inTheName} tonight`,
      `I tell {{C::character.firstName}} to come to ${storyTeller.location.inTheName} tonight`,
    ]);

    if ((await storyTeller.hasCharacterBeenTrainedThisWay()) == false) {
      return storyTeller.addSegment({ text: meetMe + Random.from([
         `, and that tonight we're going to try something different.`,
         `, and that I have something special in mind for him tonight.`,
      ]) });
    }

    const options = []

    StoryTeller.addOptionsWith(options, [
      `${meetMe}, and that I have need of {{his}} body again this evening.`,
      `${meetMe} for some more&hellip; "training" this evening.`,
    ],{});

    StoryTeller.addOptionsWith(options, [
      `${meetMe}, and that when {{he}} does come, {{he}} should come naked.`,
      `${meetMe}, and that {{he}} should come naked.`,
    ],{ characterClothing:'nude' });

    storyTeller.addSegment(Random.from(options));
  }

  // Start the scene with the player sitting a chair, and the character arrives
  // and reacts to the player.
  async function startSittingWhenCharacterArrives(storyTeller) {
    const outfit = await storyTeller.getPlayerOutfit();
    const reaction = await storyTeller.character.reactToPlayer(storyTeller.consent.level);
    const cockToken = storyTeller.playerCock ? '{{cock}}' : '{{pussy}}';

    storyTeller.setStatus('playerPosition','sitting')
    if (storyTeller.playerCock) {
      storyTeller.setStatus('playerCock','soft');
    }

    if (outfit == null) {
      storyTeller.addSegment({ text:Random.from([
        `I'm sitting nude ${storyTeller.location.inAChair()} when {{he}} arrives. My legs are spread wide with one leg
         hooked over the arm of the chair. It's clear from my posture that I have something sexual in mind for {{him}}.`,

        `When {{he}} arrives {{he}} finds me sitting nude ${storyTeller.location.inAChair()}, ideally stroking my
         ${cockToken}. Just to make it clear to {{him}} that I have something sexual in mind for {{him}}.`,

        `I'm sitting ${storyTeller.location.inAChair()} when {{he}} arrives, and I beckon {{him}} to come closer to me.
         I'm in the nude, and while that's not unusual for me at this time of night, it's clear to {{him}} that I have
         something sexual in mind.`,
      ]) });
    }

    if (outfit != null) {
      throw 'TODO: Implement player clothing in description.'
    }

    storyTeller.addSegment(reaction);
  }

  // Height measurement is tricky when switching between metric and stupid,
  // because the sentence structure can change it's easier to just make two
  // different versions of the same sentence.
  // async function compareHeights(storyTeller) {
  //   const gender = storyTeller.character.gender;
  //   const pHeight = (await storyTeller.getPlayerBody()).height;
  //   const cHeight = (await storyTeller.getCharacterBody()).height;
  //
  //   if (Settings.Metric) {
  //     return `${gender.He}'s ${EnglishUtility.numberInEnglish(Math.round(cHeight/10))} centimeters tall and I'm ${EnglishUtility.numberInEnglish(Math.round(pHeight/10))}.`;
  //   }
  //
  //   let pInches = Math.round(ConversionUtility.milliToInches(pHeight));
  //   let pHigh = EnglishUtility.numberInEnglish(Math.floor(pInches / 12));
  //   let pLow = EnglishUtility.numberInEnglish(Math.floor(pInches % 12), { whenZero:'oh' });
  //
  //   let cInches = Math.round(ConversionUtility.milliToInches(cHeight));
  //   let cHigh = EnglishUtility.numberInEnglish(Math.floor(cInches / 12));
  //   let cLow = EnglishUtility.numberInEnglish(Math.floor(cInches % 12));
  //
  //   return `${gender.He}'s ${cHigh} foot ${cLow} inches tall and I'm ${pHigh} ${pLow}`
  // }

  return {
    startSittingWhenCharacterArrives,
    tellCharacterToJoinMe,
  };

})();
