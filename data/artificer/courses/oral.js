Course.build('oral', {
  name: 'Oral',
  category: 'sexual',
  description: normalDescription,

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
      rough: { difficulty:4, complementing:['submissive'], conflicting:['dominant'], description:roughDescription },
      abusive: { difficulty:5, complementing:['masochist'],  conflicting:['dominant'], description:abusiveDescription },
    }
  }),

  execute: async plan => { return { story:"Oral Story" }},
});

function position(context) {
  if (context.player.cock && context.player.pussy) { return 'both'; }
  return context.player.cock ? 'cock' : 'pussy';
}

async function normalDescription(context) {
  return {
    cock:  `I'm going to have {{C::character.firstName}} suck my cock, directing {{him}} to practice taking it as deep as {{he}} can while also working on building {{his}} stamina.`,
    both:  `I'm going to have {{C::character.firstName}} pleasure me with {{his}} mouth, both sucking my cock and eating my pussy.`,
    pussy: `I'm going to have {{C::character.firstName}} eat my pussy. I'd like to see how many times {{he}} can bring me to orgasm for the next hour or so.`,
  }[position(context)];
}

async function roughDescription(context) {
  return {
    cock:  `I'm going to roughly fuck {{C::character.firstName's}} face with my cock, ramming it as deep into {{his}} throat as I can.`,
    both:  `I'm going to roughly fuck {{C::character.firstName's}} face with my cock, ramming it as deep into {{his}} throat as I can.`,
    pussy: `I'm going to straddle {{C::character.firstName's}} face and smother him with my pussy, grinding my cunt into {{his}} face as {{he}} struggles for air underneath me.`,
  }[position(context)];
}

async function abusiveDescription(context) {
  return {
    cock:  `I'm going to pound my cock deep into {{C::character.firstName's}} throat, slapping and beating {{him}} as {{he}} choaks on my cock.`,
    both:  `I'm going to pound my cock deep into {{C::character.firstName's}} throat, slapping and beating {{him}} as {{he}} choaks on my cock.`,
    pussy: `I'm going to straddle {{C::character.firstName}} and grind my ass and pussy against {{his}} face while also abusing {{him}} in whatever way I feel like.`,
  }[position(context)];
}
