Task.build('craft', {
  name: 'Craft',
  description: 'I will build something.',
  requires: ['flag.plan-view.tasks.craft'],
  control: 'craft-dialog',

  execute: async work => {
    const recipe = Recipe.lookup(work.recipe);
    await recipe.craft();

    // TODO: When I have more things to build the craft() function should
    //       return a more interesting story or at the very least should reflect
    //       the correct number of hours this took.
    return {
      title:`I made ${EnglishUtility.a_an(recipe.buildsName())}`,
      text:'It took a few hours, but it turned out pretty well.'
    };
  }

});
