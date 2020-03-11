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

  writeStory: async summoner => {
    const game = await Game.instance();
    const location = Location.lookup(game.location);
    const player = await Player.instance();
    const playerOutfit = await player.getEquipment('outfit');
    const playerCock = await player.getCock();
    const cockReaction = await summoner.character.reactToCock(playerCock);

    let story = `My dick is far too large for {{C::character.firstName}} to properly suck, but that doesn't mean
      {{C::gender.he}} can't use {{C::gender.his}} mouth to pleasure me in other ways.`;

    // TODO: Implement clothing.
    if (playerOutfit == null) {
      story += ` I'm nude, waiting for {{C::gender.him}} to arrive ${location.inTheName}.`;
    }

    story += ` I take my soft thick cock by the base and let it swing back and forth. `;
    story += cockReaction.text;

    const context = new WeaverContext();
    await context.addCharacter('C',summoner.character);
    return Weaver.weave(story,context);
  },

});
