Course.build('fondle', {
  name: 'Fondling',
  category: 'sexual',

  description: `{{C::character.firstName}} and I will sit together for a while, fondling and exploring each other's
    bodies. {{He}}'ll grow more comfortable with me touching {{him}} and hopefully it will leave {{him}} horny for more.`,

  sexAction: new SexAction({
    difficulty: 0,

    complementing: context => {
      const aspects = [];
      if (context.player.tits) { aspects.push('tit-lover'); }
      if (context.get('C').tits) { aspects.push('tit-slut'); }
      return aspects;
    },

    conflicting: ['bound','dominant','masochist','perverted','sadist'],
    execute: async plan => { return { story:"Fondling Story" }},
  }),

});
