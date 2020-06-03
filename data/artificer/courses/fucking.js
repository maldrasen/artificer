Course.build('fucking', {
  name: 'Fucking',
  category: 'sexual',
  requires: 'sex.fuckingPossible',

  sexAction: new SexAction({
    difficulty: 3,
    effects: 'ass-pussy',

    // Anal sex is always a possibility when fucking, all of the consent
    // calculations take both ass and pussy attributes into consideration.
    complementing: async context => {
      const aspects = ['anal-slut','breeder'];

      if (context.player.cock) { aspects.push('cock-lover'); }
      if (context.player.pussy) { aspects.push('pussy-lover'); }
      if (context.get('C').pussy) { aspects.push('pussy-slut'); }

      // TODO: Use the sexual scrutinizer to check for size differences and add
      //       size-queen if insertion is painful or if cock is very large.

      return aspects;
    },

    conflicting: async (player, minion) => {
      return ['anal-averse'];
    },

    styles:{
      rough:{ difficulty:4, complementing:['submissive'], conflicting:['dominant']},
      abusive:{ difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
    }
  }),

});
