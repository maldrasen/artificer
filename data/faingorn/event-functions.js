global.EventFunctions = {

  // Really just needed a place to put random functions that events might be
  // calling from the events. One off stuff that doesn't belong in the engine
  // mostly.

  createFirstMinion: async function(gender) {
    const rat = await CharacterBuilder.build({ type:'pending', species:'scaven', gender:gender });
    await rat.addAspect('passive',{ level:1 });
    await rat.addAspect('androphilic',{ level:1 });
    await rat.addAspect('gynephilic',{ level:1 });
    await CharacterBuilder.addRandomAspects(rat,{ count:3 });
  },

}
