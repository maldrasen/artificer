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

    if (rat.mental < 6) { rat.mental = 6 + Random.upTo(6) }
    if (rat.physical < 8) { rat.physical = 8 + Random.upTo(6) }
    if (rat.personal < 10) { rat.personal = 10 + Random.upTo(6) }

    await rat.save();
    await CharacterDescriber.updateAll(rat);

    return rat;
  },

}
