global.EventFunctions = {

  // Really just needed a place to put random functions that events might be
  // calling from the events. One off stuff that doesn't belong in the engine
  // mostly.

  // Your first minion has slightly better stats than most scaven. They are
  // always passive and bisexual as well.
  createFirstMinion: async function(gender) {
    const rat = await CharacterBuilder.build({ type:'pending', species:'scaven', gender:gender });
    await rat.addAspect('passive',    { strength:200+Random.upTo(400) });
    await rat.addAspect('androphilic',{ strength:200+Random.upTo(400) });
    await rat.addAspect('gynephilic', { strength:200+Random.upTo(400) });
    await CharacterBuilder.addRandomAspects(rat,{ count:3 });
    await CharacterNamer.execute(rat);

    if (rat.mental < 6) { rat.mental = 6 + Random.upTo(6) }
    if (rat.physical < 8) { rat.physical = 8 + Random.upTo(6) }
    if (rat.personal < 10) { rat.personal = 10 + Random.upTo(6) }

    if (Flag.lookup('player.goal') == 'followers') {
      rat.loyalty = rat.loyalty + 10;
    }

    await rat.save();
    await CharacterDescriber.updateAll(rat);

    Flag.set('character.first-scaven',rat.id);

    return rat;
  },

  // TODO: I can add more body adjustments or body parameters when I know
  //       what her portrait will look like. Hair color, etc.
  createSolstice: async function() {
    const solstice = await CharacterBuilder.build({
      firstName:    'Solstice',
      lastName:     'Blackriver',
      gender:       'futa',
      species:      'caprien',
      loyalty:      Random.between(51,57),
      portraitCode: 'solstice',
    });

    const adjustments = ['beautiful','magical','anal-slut.2','beast-lover.1','perverted.2'];

    if ((await Player.hasCock()))  { adjustments.push('androphilic'); }
    if ((await Player.hasPussy())) { adjustments.push('gynephilic'); }

    await CharacterAdjuster.applyAll(solstice, adjustments);
    await CharacterDescriber.updateAll(solstice);

    Flag.set('character.solstice',solstice.id);
  },

}
