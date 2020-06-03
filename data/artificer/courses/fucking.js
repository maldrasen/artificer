Course.build('fucking', {
  name: 'Fucking',
  category: 'sexual',

  requires: 'sex.fuckingPossible',

  difficulty: 3,

  // Anal sex is always a possibility.
  complementing: async (player, minion) => {
    const aspects = ['anal-slut','breeder'];

    const playerCock = await player.getCock();
    const minionCock = await minion.getCock();
    const playerPussy = await player.getPussy();
    const minionPussy = await minion.getPussy();

    if (playerCock == null && minionCock == null) {
      // Then what? OK, list of courses need the minion.
    }

    if (playerCock)  { aspects.push('cock-lover');  }
    if (playerPussy) { aspects.push('pussy-lover'); }
    if (minionPussy) { aspects.push('pussy-slut');  }

    // TODO: Use the sexual scrutinizer to check for size differences and add
    //       size-queen if insertion is painful or if cock is very large.

    return aspects;
  },

  conflicting: async (player, minion) => {
    return ['anal-averse'];
  },

  styles:[
    { code:'rough',   difficulty:4, complementing:['submissive'], conflicting:['dominant']},
    { code:'abusive', difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
  ]

});
