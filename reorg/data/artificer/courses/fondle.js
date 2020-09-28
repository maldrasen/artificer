Course.build('fondle', {
  name: 'Fondling',
  category: 'sexual',

  execute: execute,
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
  }),
});

async function execute(plan) {
  const consent = await plan.calculateConsent();
  const result = new TrainingResult(plan.context);

  if (consent.level == 'enthusiastic') {
    plan.minion.adjustLoyalty(2);
    plan.minion.adjustLust(20);
    if (plan.minion.speciesCode == 'scaven') { return await enthusiasticScavenStory(result); }
  }

  if (consent.level == 'consenting') {
    plan.minion.adjustLoyalty(1);
    plan.minion.adjustLust(10);
    if (plan.minion.speciesCode == 'scaven') { return await consentingScavenStory(result); }
  }

  if (consent.level == 'reluctant') {
    plan.minion.adjustLust(5);
    if (plan.minion.speciesCode == 'scaven') { return await reluctantScavenStory(result); }
  }

  if (consent.level == 'rape') {
    plan.minion.adjustFear(2);
    if (plan.minion.speciesCode == 'scaven') { return await rapeScavenStory(result); }
  }

  result.story = `TODO: {{C::character.firstName}} (a non-scaven) and I fondle each other.`
  return result;
}

async function enthusiasticScavenStory(result) {
  result.story = `TODO: {{C::character.firstName}} and I enthusiasticly fondle each other.`
  return result;
}

async function consentingScavenStory(result) {
  result.story = `TODO: {{C::character.firstName}} and I fondle each other.`
  return result;
}

async function reluctantScavenStory(result) {
  result.story = `TODO: I fondly {{C::character.firstName}} while {{he}} sits in my lap.`
  return result;
}

async function rapeScavenStory(result) {
  result.story = `TODO: {{C::character.firstName}} squirms and writes in my lap, trying to get away as I fondle {{him}}.`
  return result;
}
