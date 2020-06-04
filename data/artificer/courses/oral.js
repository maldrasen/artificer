Course.build('oral', {
  name: 'Oral',
  category: 'sexual',

  sexAction: new SexAction({
    difficulty: 2,
    effects: 'head',

    complementing: context => {
      let aspects = ['oral-slut'];
      if (context.player.cock)  { aspects = [...aspects, 'cock-lover', 'cum-lover']; }
      if (context.player.pussy) { aspects.push('pussy-lover'); }
      return aspects
    },

    styles:{
      rough: { difficulty:4, complementing:['submissive'], conflicting:['dominant']},
      abusive: { difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
    }
  }),

});
