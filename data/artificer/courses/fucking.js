Course.build('fucking', {
  name: 'Fucking',
  category: 'sexual',
  requires: 'sex.fuckingPossible',
  description: normalDescription,

  sexAction: new SexAction({
    difficulty: 3,
    effects: 'ass-pussy',

    // Anal sex is always a possibility when fucking, all of the consent
    // calculations take both ass and pussy attributes into consideration.
    complementing: context => {
      const aspects = ['anal-slut','breeder'];

      if (context.player.cock) { aspects.push('cock-lover'); }
      if (context.player.pussy) { aspects.push('pussy-lover'); }
      if (context.get('C').pussy) { aspects.push('pussy-slut'); }

      // TODO: Use the sexual scrutinizer to check for size differences and add
      //       size-queen if insertion is painful or if cock is very large.

      return aspects;
    },

    conflicting: ['anal-averse'],

    styles:{
      rough:{ difficulty:4, complementing:['submissive'], conflicting:['dominant'], description:roughDescription },
      abusive:{ difficulty:5, complementing:['masochist'],  conflicting:['dominant'], description:abusiveDescription },
    }
  }),

});


function position(context) {
  return context.player.cock ?
    (context.get('C').cock ? 'giving-ass' : 'giving-ass/pussy'):
    (context.get('C').cock ? 'taking-ass/pussy' : 'dildos');
}

async function normalDescription(context) {
  return {
    'giving-ass':       `I'm going to fuck {{C::character.firstName}} in the ass.`,
    'giving-ass/pussy': `I'm going to fuck {{C::character.firstName}} in {{his}} ass and pussy.`,
    'taking-ass/pussy': `{{C::character.firstName}} is going to fuck me.`,
    'dildos':           `I'm going to fuck {{C::character.firstName's}} ass and pussy with something phallic.`,
  }[position(context)];
}

async function roughDescription(context) {
  return {
    'giving-ass':       `I'm going to slap {{C::character.firstName}} around while I fuck {{him}} in the ass as hard as I like.`,
    'giving-ass/pussy': `I'm going to slap {{C::character.firstName}} around while I fuck {{him}} hard in {{his}} ass and pussy.`,
    'taking-ass/pussy': `I'm going to straddle {{C::character.firstName}} and slap {{him}} around while I'm fucking {{him}}.`,
    'dildos':           `I'm going to stuff {{C::character.firstName's}} ass and pussy with with something big and phallic.`,
  }[position(context)];
}

async function abusiveDescription(context) {
  return {
    'giving-ass':       `I'm going to slap, choke, and abusively fuck the shit out of {{C::character.firstName}}.`,
    'giving-ass/pussy': `I'm going to slap, choke, and abusively fuck the shit out of {{C::character.firstName}}.`,
    'taking-ass/pussy': `I'm going to straddle {{C::character.firstName}} and harshly abuse {{him}} while I'm riding {{his}} cock.`,
    'dildos':           `I'll brutally pound {{C::character.firstName's}} fuck holes with something huge and phallic.`,
  }[position(context)];
}
