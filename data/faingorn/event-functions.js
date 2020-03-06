global.EventFunctions = {

  // Really just needed a place to put random functions that events might be
  // calling from the events. One off stuff that doesn't belong in the engine
  // mostly.

  createFirstMinion: async function(gender) {
    const rat = await CharacterBuilder.build({ type:'pending', species:'scaven', gender:gender });
    await rat.addAspect('passive',    { strength:200+Random.upTo(400) });
    await rat.addAspect('androphilic',{ strength:200+Random.upTo(400) });
    await rat.addAspect('gynephilic', { strength:200+Random.upTo(400) });
    await CharacterBuilder.addRandomAspects(rat,{ count:3 });
    return rat;
  },

}
