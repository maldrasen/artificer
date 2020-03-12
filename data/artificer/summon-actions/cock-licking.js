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

SummonAction.CockLicking = (function() {

  function writeEnthusiasticStory(summoner) {
    return "TODO: Enthusiastic Cock Licking Story."
  }

  function writeConsentStory(summoner) {
    return "TODO: Consenting Cock Licking Story."
  }

  function writeReluctantStory(summoner) {
    return "TODO: Reluctant Cock Licking Story."
  }

  function writeRapeStory(summoner) {
    return "TODO: Rape Cock Licking Story."
  }

  return {
    writeEnthusiasticStory,
    writeConsentStory,
    writeReluctantStory,
    writeRapeStory,
  };

})();


// const game = await Game.instance();
// const location = Location.lookup(game.location);
// const player = await Player.instance();
// const playerOutfit = await player.getEquipment('outfit');
// const playerCock = await player.getCock();
//
// const character = summoner.character;
// const characterBody = await character.getBody();
// const cockReaction = await summoner.character.reactToCock(playerCock);
//
//
// let story = `My dick is far too large for {{C::character.firstName}} to properly suck, but that doesn't mean
//   {{C::gender.he}} can't use {{C::gender.his}} mouth to pleasure me in other ways.`;
//
// // TODO: Implement clothing.
// if (playerOutfit == null) {
//   story += ` I'm nude, waiting for {{C::gender.him}} to arrive ${location.inTheName}.`;
// }
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
