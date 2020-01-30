global.Recipe = class Recipe extends Form {

  static async getRecipeListForPlan(state) {
    let flags = await Flag.getAll();

    let unlocked = Recipe.where(recipe => {
      return flags[`recipe.${recipe.code}`] == 'unlocked'
    });

    let recipes = await Promise.all(unlocked.map(async recipe => {
      let display = {
        canBeBuilt: (await recipe.canBeBuilt(state.reserved)),
        ingredients: recipe.ingredients,
      };

      if (recipe.buildsType == 'equipment') {
        display.name = Equipment.lookup(recipe.builds).name;
      }

      return display;
    }))

    return { recipes };
  }

  async canBeBuilt(reserved) {
    return true;
  }

}
