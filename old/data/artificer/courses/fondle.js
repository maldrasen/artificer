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

  const storyTeller = new StoryTeller({
    course: 'fondle',
    context: plan.context,
    consent: consent,
    status: { location:pickFondleLocation() }
  });

  await storyTeller.tellCharacterToJoinMe();
  await storyTeller.startSittingWhenCharacterArrives();
  await describeToCharacter(storyTeller);

  storyTeller.addSeparator();

  if (consent.level == 'enthusiastic') {
    plan.minion.adjustLoyalty(2);
    plan.minion.adjustLust(20);
    if (plan.minion.speciesCode == 'scaven') { await enthusiasticScavenStory(storyTeller, result); }
  }

  if (consent.level == 'consent') {
    plan.minion.adjustLoyalty(1);
    plan.minion.adjustLust(10);
    if (plan.minion.speciesCode == 'scaven') { await consentingScavenStory(storyTeller, result); }
  }

  if (consent.level == 'reluctant') {
    plan.minion.adjustLust(5);
    if (plan.minion.speciesCode == 'scaven') { await reluctantScavenStory(storyTeller, result); }
  }

  if (consent.level == 'rape') {
    plan.minion.adjustFear(2);
    if (plan.minion.speciesCode == 'scaven') { await rapeScavenStory(storyTeller, result); }
  }

  result.story = storyTeller.compile();
  return result;
}

async function enthusiasticScavenStory(storyTeller, result) {
  storyTeller.addSegment({ text:`TODO: {{C::character.firstName}} and I enthusiasticly fondle each other.` });
}

async function consentingScavenStory(storyTeller, result) {
  storyTeller.addSegment({ text:`TODO: {{C::character.firstName}} and I fondle each other.` });
}

async function reluctantScavenStory(storyTeller, result) {
  storyTeller.addSegment({ text:`TODO: I fondly {{C::character.firstName}} while {{he}} sits in my lap.` });
}

async function rapeScavenStory(storyTeller, result) {
  storyTeller.addSegment({ text:`TODO: {{C::character.firstName}} squirms and writes in my lap, trying to get away as I fondle {{him}}.` });
}

// Location code for where this event takes place. For right now, I think we
// can just always make this the great hall. Once the player has a different
// bedroom option, or there are more places that can be built in the keep we
// can randomly select from them, but that's for later.
function pickFondleLocation() { return 'great-hall' }

async function describeToCharacter(storyTeller) {
  const trainedBefore = await storyTeller.hasCharacterBeenTrainedThisWay();

  const start = Random.from([
    `I reach out to {{him}} saying`,
    `I pat my lap a couple times and say`,
    `I smile at {{him}} and say`,
  ]);

  const one = Random.from([
    `Come over here {{C::character.firstName}}.`,
    `Come here and sit with me for a while {{C::character.firstName}}.`,
  ]);

  let two;

  if (!trainedBefore) { two = Random.from([
    `I would like to get to know your body a little better.`,
    `I want to spend some time just touching you.`,
  ]); }

  if (trainedBefore) { two = Random.from([
    `Let me feel that sexy body of yours against me again.`,
    `Let's just hold each other for a little while.`,
    `I'd like to feel that sexy body of yours again.`,
    `I'd like to spend some more time just touching you.`,
  ]); }

  return storyTeller.addSegment({ playerSpeaking:true, text:`${start}, "${one} ${two}"` });
}
