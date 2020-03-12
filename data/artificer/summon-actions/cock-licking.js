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

  async function enthusiasticScavenStory(summoner) {
    return "TODO: Enthusiastic Scaven Cock Licking Story."
  }

  async function consentingScavenStory(summoner) {
    return "TODO: Consenting Scaven Cock Licking Story."
  }

  async function reluctantScavenStory(summoner) {

    console.log("Writing...")
    const character = summoner.character;
    let story = await StoryTeller.startSummoning({ character });

    console.log("Story:")
    console.log(story)

    return story;
  }

  async function rapeScavenStory(summoner) {
    return "TODO: Rape Scaven Cock Licking Story."
  }

  return {
    writeEnthusiasticStory,
    writeConsentStory,
    writeReluctantStory,
    writeRapeStory,
  };

})();


// const playerCock = await player.getCock();
//
// const character = summoner.character;
// const characterBody = await character.getBody();
// const cockReaction = await summoner.character.reactToCock(playerCock);
//
//
//
//
// // Do I though? That's one possibility.
// story += ` I take my soft thick cock by the base and let it swing back and forth. `;
// story += cockReaction.text;
// story += ` I beckon for him to approach me.`;
//
// if (character.speciesCode == 'scaven') {
//
//   let sizeComp = 'small';
//   if (playerCock.length > characterBody.height/3) { sizeComp = 'third'; }
//   if (playerCock.length > characterBody.height/2) { sizeComp = 'half'; }
//   if (playerCock.length > characterBody.height) { sizeComp = 'full'; }
//
//   story += ` {{C::gender.He}} only stands about {{C::body.fiveFootTenInches}} tall, which puts {{C::gender.him}} right at eye level with my dick.`;
//   story += ` I take {{C::gender.him}} by the back of the head and push his face against it.`
// }
//
// if (character.speciesCode != 'scaven') {
//   story += "TODO: Complete this event for taller species."
// }
