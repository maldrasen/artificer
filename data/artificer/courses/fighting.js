Course.build('fighting', {
  name: 'Fighting',
  category: 'physical',
  description: description,
  execute: execute,
});

// The description and stories for the fighting training is a little
// complicated. The effectiveness of the training should depend on how your
// skill compares to your minion. If you're both at about the same level you
// both improve a little. The improvement is one sided if one of you is better
// than the other though. Though we don't menion it, this training will also
// effect a minion's fear. If they're kicking your ass they won't fear you as
// much afterwards, and visa versa of course.
async function getSkills(context) {
  const playerSkill = await context.player.character.getCharacterAspect('fighting');
  const minionSkill = await context.get('C').character.getCharacterAspect('fighting');
  const playerLevel = playerSkill == null ? -1 : playerSkill.level;
  const minionLevel = minionSkill == null ? -1 : minionSkill.level;
  const difference = minionLevel - playerLevel;

  let situation = 'same';
  if (difference == 2)  { situation = 'stronger-minion' }
  if (difference > 2)   { situation = 'much-stronger-minion' }
  if (difference == -2) { situation = 'stronger-player' }
  if (difference < -2)  { situation = 'much-stronger-player' }

  return {
    player: playerLevel,
    minion: minionLevel,
    situation: situation,
  };
}

async function description(context) {
  const difference = (await getSkills(context)).difference;
  const description = `{{C::character.firstName}} and I will spar together, using whatever weapons are available or
    just working on our hand to hand fighting skills.`;

  if (difference == 2)  { return `${description} {{He}}'s a better fighter than I am and I'd probably learn a thing or two while sparring with {{him}}.`; }
  if (difference > 2)   { return `${description} {{He}}'s a much better fighter than I am and I'd probably learn a lot from sparring with {{him}}.`; }
  if (difference == -2) { return `${description} I'm a better fighter than {{him}}. Sparring with me should help {{him}} get better.`; }
  if (difference < -2)  { return `${description} I'm a much better fighter than {{he}} is. Sparring with me should improve {{his}} skill dramatically.`; }
  return `${description} Both {{he}} and I should improve from the training.`;
}

async function execute(plan, result) {
  const skills = await getSkills(plan.context);
  const report = {};

  if (skills.situation == 'same') {
    TrainingResult.addPlayerNotification(await improveSkill(plan.player,2));
    result.addNotification(await improveSkill(plan.minion,2));
  }
  if (skills.situation == 'stronger-minion') {
    TrainingResult.addPlayerNotification(await improveSkill(plan.player,3));
    result.addNotification(await improveSkill(plan.minion,1));
    result.addNotification(adjustFear(plan.minion,-5));
  }
  if (skills.situation == 'much-stronger-minion') {
    TrainingResult.addPlayerNotification(await improveSkill(plan.player,4));
    result.addNotification(adjustFear(plan.minion,-10));
  }
  if (skills.situation == 'stronger-player') {
    TrainingResult.addPlayerNotification(await improveSkill(plan.player,1));
    result.addNotification(await improveSkill(plan.minion,3));
    result.addNotification(adjustFear(plan.minion,3));
  }
  if (skills.situation == 'much-stronger-player') {
    result.addNotification(await improveSkill(plan.minion,4));
    result.addNotification(adjustFear(plan.minion,6));
  }

  if (skills.player <= 0) {
    if (skills.situation == 'same') {  }
    if (skills.situation == 'stronger-minion') { }
    if (skills.situation == 'much-stronger-minion') { }
  }

  result.story = 'Did a fighting'
}

// The improveSkill() function will get training level from 1 to 4 which is
// then turned into an experience range.
async function improveSkill(character, level) {
  let value = ({
    1: _ => Random.between(1,5),
    2: _ => Random.between(5,10),
    3: _ => Random.between(8,15),
    4: _ => Random.between(10,20),
  }[level])()

  return await TrainingExperience.addExperience(character, 'fighting', value)
}

function adjustFear(character, value) {
  let random = value + Random.between(-2,2);
  return (random != 0) ? { code:'fear', name:'Fear', experience:random } : null;
}
