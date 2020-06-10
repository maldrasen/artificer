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

async function execute(plan) {
  const result = new TrainingResult(plan.context);
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
    if (skills.situation == 'same') { writeFumblingThrough(result); }
    if (skills.situation == 'stronger-minion') { writeShownBasics(result); }
    if (skills.situation == 'much-stronger-minion') { writeAssKicked(result); }
  }
  if (skills.player == 1) {
    if (skills.situation == 'stronger-player') { writeDecentTraining(result); }
    if (skills.situation == 'same') { writeEvenMatch(result); }
    if (skills.situation == 'stronger-minion') { writeGetTrained(result); }
  }
  if (skills.player == 2) {
    if (skills.situation == 'stronger-player') { writeTrainer(result); }
    if (skills.situation == 'same') { writeSparring(result); }
    if (skills.situation == 'stronger-minion') { writeLearnFromMaster(result);}
  }
  if (skills.player == 3) {
    if (skills.situation == 'much-stronger-player') { writeKickAss(result); }
    if (skills.situation == 'stronger-player') { writeMasterTrainer(result); }
    if (skills.situation == 'same') { writeMasterDuel(result); }
  }

  return result;
}

// ==============
// Story Segments
// ==============
// Not sure under what conditions all of these variations might become
// possible. I'm going to start out slowly for now, only implementing the
// stories that can actually happen. I haven't done it now, but I think I may
// need to limit the skill level that can be gained by just training with your
// minions. The upper tiers may need to be unlocked somehow. Something to
// figure out later though.

// You and your minion are not good fighters and fumble through your training.
function writeFumblingThrough(result) {
  result.story = 'TODO: Fumbling Through'
}

// You're not a good fighter, but your minion knows a thing or two.
function writeShownBasics(result) {
  result.story = `TODO: {{C::character.firstName}} shows me some basic techniques.`
}

// You're not a good fighter, and your minion kicks your ass.
function writeAssKicked(result) {
  result.story = `TODO: {{C::character.firstName}} completely kicks my ass.`
}

// You're an ok fighter, but your minion is worse. Show them a thing or two.
function writeDecentTraining(result) {
  result.story = `TODO: I'm able to teach {{C::character.firstName}} a few useful techniques.`
}

// You and your minion are just ok fighters and have an even match.
function writeEvenMatch(result) {
  result.story = `TODO: {{C::character.firstName}} and I are evenly matched and spar for a while.`
}

// You're an ok fighter, but your minion is better and trains you a bit.
function writeGetTrained(result) {
  result.story = `TODO: {{C::character.firstName}} teaches me some more advanced techniques.`
}

// You're a good fighter, and teach your minion how to fight.
function writeTrainer(result) {
  result.story = `TODO: I teach {{C::character.firstName}} a few more advanced techniques.`
}

// Both you and your minion are good fighters and spar well together.
function writeSparring(result) {
  result.story = `TODO: {{C::character.firstName}} and I are both good fighters and spar for a while.`
}

// You're a good fighter, but your minion is a true master.
function writeLearnFromMaster(result) {
  result.story = `TODO: {{C::character.firstName}} is a marshal arts master and trains me to become even better.`
}

// You're a marshal arts master, and kick your minion's ass.
function writeKickAss(result) {
  result.story = `TODO: I completely kick {{C::character.firstName's}} ass.`
}

// You're a marshal arts master and train your minion.
function writeMasterTrainer(result) {
  result.story = `TODO: I am a marshal arts master and I train {{C::character.firstName}} to become even better.`
}

// You and your minion are both marshal arts masters.
function writeMasterDuel(result) {
  result.story = `TODO: {{C::character.firstName}} and I are both marshal arts masters and have an epic duel.`
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
