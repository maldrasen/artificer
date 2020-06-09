Course.build('bonding', {
  name: 'Bonding',
  category: 'social',
  execute: execute,

  description: `{{C::character.firstName}} and I will spend some time together, just chatting about things and getting
    to know each other better. {{He}}'ll grow to like and trust me more if we spend time together which will make
    {{him}} more loyal to me in the long run.`,
});

// The amount of loyalty that a minion can gain from bonding is based on
// their current loyalty. If they don't trust you all all it's hard to gain
// their trust, and it's harder to further increase their trust in the higher
// tiers. I start out with these number for now, and tweak them if I feel
// loyalty builds too quickly or too slowly.
async function execute(plan) {
  const result = new TrainingResult(plan.context);
  const loyalty = plan.minion.getLoyaltyWord();

  if (loyalty != 'absolute') {
    await plan.minion.increaseLoyalty({
      traitorous:    1,
      untrustworthy: 2,
      wavering:      3,
      loyal:         6,
      faithful:      3,
      dedicated:     1,
    }[loyalty]);
  }

  if (plan.minion.isTraitorous) { result.story = traitorousStory(plan); }
  if (plan.minion.isRebellious || loyalty == 'traitorous') { result.story = rebelliousStory(plan); }
  if (loyalty == 'untrustworthy') { result.story = untrustworthyStory(plan); }
  if (loyalty == 'wavering') { result.story = waveringStory(plan); }
  if (loyalty == 'loyal') { result.story = loyalStory(plan); }
  if (loyalty == 'faithful') { result.story = faithfulStory(plan); }
  if (loyalty == 'dedicated') { result.story = dedicatedStory(plan); }

  return result;
}

// The isTraitorous() function on the character model also takes fear into
// account. If a minion is traitorous they may rebel or mutiny soon.
function traitorousStory(plan) {
  let action = `I spend some time with {{him}} trying to make {{him}} feel a bit better about {{his}} situation
    while {{he}} mostly sits silently and glares at me.`;

  if (plan.minion.speciesCode == 'scaven') {
    action = [`{{He}}'s a scaven, so I spend some time reminding {{him}} of {{his}} duties to {{his}} tribe. That
      however else {{he}} might feel the fate of the tribe matters more than {{his}} personal feelings.`];
  }

  return `{{C::character.firstName}} doesn't like me. In fact, sometimes I catch {{him}} looking at me with absolute
    hatred. ${action} It's difficult, but I feel like I'm making some slow progress with {{him}}.`;
}

// If the character isn't traitorous, but still has a very low loyalty,
// they're probably terrified of the player.
function rebelliousStory(plan) {
  let action = `{{He}} doesn't really seem comfortable talking, so I spend most our time together talking to
    {{him}} about all the great things I plan on doing and how {{he}} fits into those plans.`;

  if (plan.minion.speciesCode == 'scaven') {
    action = `{{He}} doesn't really seem comfortable talking, but {{he}}'s a scaven so I spend most of our time
      together telling {{him}} how great and powerful our tribe will become, which does seem to have a positive
      effect on {{his}} attitude.`
  }

  return `{{C::character.firstName}} doesn't trust me at all. ${action} It's difficult, but I feel like I'm making some
    slow progress with {{him}}.`;
}

function untrustworthyStory(plan) {
  let options = [
    `{{He}} and I chat for a bit about how {{he}}'s doing, working though any problems {{he}} might be having.`,
  ];

  if (plan.minion.speciesCode == 'scaven') {
    options = [...options,
      `We chat for a bit about the future of our tribe, how great and powerful we will become.`,
    ];
  }

  return `{{C::character.firstName}} doesn't really trust me very much. ${Random.from(options)} {{He}}'s starting to
    open up a bit to me, but progress is slow.`;
}

function waveringStory(plan) {
  let options = [
    `We have a good chat though, talking through the things that worry {{him}}.`,
    `We spend some time talking about my plans for {{Faingorn}}.`,
  ];

  if (plan.minion.isForager) { options = [...options,
    `{{He}} opens up a bit though once we start talking about {{his}} trips out into the Hinterlands.`
  ]; }

  if (plan.minion.isHunter) { options = [...options,
    `{{He}} opens up a bit though once we start talking about {{his}} hunting.`
  ]; }

  if (plan.minion.speciesCode == 'scaven') { options = [...options,
    `{{He}} spends a little time telling me about the Deep Hole Scaven and what it was like for {{him}} growing up in the tribe.`,
  ]; }

  return `{{C::character.firstName}} seems a little uncomfortable talking with me. ${Random.from(options)} We made some
    progress today, and I feel like {{he}}'s starting to trust me more.`;
}

function loyalStory(plan) {
  let options = [
    `We chat for a bit about inconsequential things.`,
    `We chat for a bit about the future, talking about {{his}} hopes and goals.`,
  ];

  if (plan.minion.isForager) { options = [...options,
    `We talk for a while about some of the interesting things he saw while out foraging today.`,
  ]; }

  if (plan.minion.isHunter) { options = [...options,
    `We talk for a while about some of the interesting things he saw while out hunting today.`,
  ]; }

  if (plan.minion.speciesCode == 'scaven') { options = [...options,
    `{{He}} tells me an amusing anecdote about a scaven who got her whole face stuck inside of a wild boar.`
  ]; }

  return `{{C::character.firstName}} and I spend some quality time together. ${Random.from(options)} I feel like we're
    getting along well now and that {{he}} really trusts me.`;
}

// We'll expand on the higher levels of loyalty later. I'd like for the later
// levels to include more stuff from the character's aspects and personality
// and such, but a lot of that hasn't been written yet.

function faithfulStory(plan) {
  let options = ['We spend some good quality time together, laughing and joking with each other.'];
  return `${Random.from(options)} {{He}}'s a good and loyal minion, and I feel like we grew a little closer today.`;
}

function dedicatedStory(plan) {
  let options = ['We spend some good quality time together, laughing and joking with each other.'];
  return `${Random.from(options)} {{His}} devotion to me is unmistakable.`;
}

// Perhaps the minion should also have their lust raised when spending time
// with the player when they're absolutely loyal. If they've had sex together
// often and if the minion has the right aspects, they might even start
// masterbating.
function absoluteStory(plan) {
  let options = [
    '{{He}} spends most of our time together letting me know how lucky {{he}} is to have me as {{his}} {{master}}.',
  ];

  return `{{C::character.firstName's}} is overjoyed when I suggest that {{he}} and I spending some quality time
    together. ${Random.from(options)} Though it was nice spending some time with {{him}}, {{his}} dedication to me is
    already absolute.`;
}
