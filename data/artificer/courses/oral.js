Course.build('oral', {
  name: 'Oral',
  category: 'sexual',

  sexAction: new SexAction({
    difficulty: 2,
    effects: 'head',

    complementing: async (player, minion) => {
      const aspects = ['oral-slut'];
      if ((await player.hasCock())) { ArrayUtility.addAll(aspects,['cock-lover','cum-lover']); }
      if ((await player.hasPussy())) { aspects.push('pussy-lover'); }
      return aspects
    },

    styles:{
      rough: { difficulty:4, complementing:['submissive'], conflicting:['dominant']},
      abusive: { difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
    }
  }),

});
