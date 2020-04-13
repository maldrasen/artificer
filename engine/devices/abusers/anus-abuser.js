Abuser.AnusAbuser = (function() {

  // Add injuries to both the anus and the ass in general. The anus class is
  // really just supposed to be about the asshole, but because an ass whipping
  // should qualify as a painful body part injury and not a critical body
  // injury, within the context of injuries, the ass is part of the anus.
  async function addInjury(character, hazard) {
    const anus = await character.getAnus();

    if (hazard.type == 'smash')  { await addSmashInjury(character, anus, hazard);  }

    const context = new WeaverContext();
    await context.addCharacter('C',character);

    const describer = new AnusDescriber(context);
    await describer.updateDescription();
  }

  // Add smash injury. This represents a bruised ass. An ass bruise can have a
  // shape (whip, hand) or it can be left indistinct. The last ass injury will
  // overwrite the shape of the previous injury.
  async function addSmashInjury(character, anus, hazard) {
    anus.smashLevel = Abuser.raiseLevel(anus.smashLevel, hazard.level, 5);
    anus.smashCount += hazard.count || 1;
    anus.smashHealing = 0;
    anus.smashShape = ObjectUtility.fetch(hazard,'details','shape');

    await anus.save();
  }

  return { addInjury };

})();
