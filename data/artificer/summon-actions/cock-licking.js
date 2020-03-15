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

  // === Scaven Specific Stories ===
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
    let options = [];

    // My cock is a managable size, so there's no need to focus on the size
    // comparison here.
    if (sizeComparison == 'average') {
      if (storyTeller.mightBe('playerPosition','standing')) {
        if (storyTeller.mightBe('playerCock','soft')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(Get cock hard)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
        if (storyTeller.mightBe('playerCock','hard')) {
          Summoner.StoryTeller.addOptionsWith(options,[
            `(Cock is hard)`
          ],{ playerPosition:'standing', playerCock:'hard' });
        }
      }
    }

    // My cock is a third the length of her body, about a big as her arm. It's
    // size in comparison is worth mentioning.
    if (sizeComparison == 'third') {

    }

    // My cock is over half of her body length, it least as large as one of her
    // legs. It's becoming unweildly for her.
    if (sizeComparison == 'half') {

    }

    // My cock is about as large as she is. It's too large for her to lick in
    // it's entirety. She could just lay astride the entire thing, licking the
    // head while grinding against the shaft.
    if (sizeComparison == 'full') {
    }

    storyTeller.addSegment(Random.from(options));
    options = [];

    // Part Two - Licking and nibbling about the glans of my cock.
    // Part Three - Orgasm

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


//
//
//   story += ` {{C::gender.He}} only stands about {{C::body.fiveFootTenInches}} tall, which puts {{C::gender.him}} right at eye level with my dick.`;
//   story += ` I take {{C::gender.him}} by the back of the head and push his face against it.`
// }
//
// if (character.speciesCode != 'scaven') {
//   story += "TODO: Complete this event for taller species."
// }
