Course.build('fighting', {
  name: 'Fighting',
  category: 'physical',
  description: description,
});

// The description for the fighting training is a little complicated. The
// effectiveness of the training should depend on how your skill compares to
// your minion. If you're both at about the same level you both improve a
// little. The improvement is one sided if one of you is better than the other
// though. Though we don't menion it, this training will also effect a minion's
// fear. If they're kicking your ass they won't fear you as much afterwards,
// and visa versa of course.
async function description(context) {
  const playerSkill = await context.player.character.getCharacterAspect('fighting');
  const minionSkill = await context.get('C').character.getCharacterAspect('fighting');
  const playerLevel = playerSkill == null ? -1 : playerSkill.level;
  const minionLevel = minionSkill == null ? -1 : minionSkill.level;
  const description = `{{C::character.firstName}} and I will spar together, using whatever weapons are available or
    just working on our hand to hand fighting skills.`;

  if (minionLevel - playerLevel == 2) { return `${description} {{He}}'s a better fighter than I am and I'd probably learn a thing or two while sparring with {{him}}.`; }
  if (minionLevel - playerLevel > 2)  { return `${description} {{He}}'s a much better fighter than I am and I'd probably learn a lot from sparring with {{him}}.`; }
  if (playerLevel - minionLevel == 2) { return `${description} I'm a better fighter than {{him}}. Sparring with me should help {{him}} get better.`; }
  if (playerLevel - minionLevel > 2)  { return `${description} I'm a much better fighter than {{he}} is. Sparring with me should improve {{his}} skill dramatically.`; }
  return `${description} Both {{he}} and I should improve from the training.`;
}
