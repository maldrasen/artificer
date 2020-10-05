Task.build('craft', {
  name: 'Craft',
  description: 'I will build something.',
  requires: ['flag.plan-view.tasks.craft'],
  control: 'craft-dialog',

  execute: async work => {
    const recipe = Recipe.lookup(work.recipe);
    await recipe.craft();

    times = {
      1: ['a couple of hours','a couple hours','a few hours','two hours'],
      2: ['half the day','about half the day','nearly four hours','around four hours'],
      3: ['six hours or so','just under six hours','nearly six hours','a bit over six hours'],
      4: ['all day','the entire day','most of the day']
    }[recipe.time]

    return {
      title:`Craft: ${recipe.buildsName()}`,
      text:`I spent ${Random.from(times)} making ${EnglishUtility.a_an(recipe.buildsName())}.`
    };
  }

});
