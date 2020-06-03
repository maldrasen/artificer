Course.build('oral', {
  name: 'Oral',
  category: 'sexual',

  difficulty: 2,
  complementing: async (player, minion) => {
    const aspects = ['oral-slut'];
    if ((await player.hasCock())) { ArrayUtility.addAll(aspects,['cock-lover','cum-lover']); }
    if ((await player.hasPussy())) { aspects.push('pussy-lover'); }
    return aspects
  },

  styles:[
    { code:'rough',   difficulty:4, complementing:['submissive'], conflicting:['dominant']},
    { code:'abusive', difficulty:5, complementing:['masochist'],  conflicting:['dominant']},
  ]
});
