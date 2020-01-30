global.Recipe = class Recipe extends Form {

  static async getRecipeListForPlan(state) {
    let flags = await Flag.getAll();
    let available = await Recipe.getAvailableResources(state.reserved);

    let unlocked = Recipe.where(recipe => {
      return flags[`recipe.${recipe.code}`] == 'unlocked'
    });

    let recipes = await Promise.all(unlocked.map(async recipe => {
      let display = {
        enoughResources: (await recipe.enoughResources(available)),
        ingredients: recipe.ingredients,
      };

      if (recipe.buildsType == 'equipment') {
        display.name = Equipment.lookup(recipe.builds).name;
      }

      return display;
    }))

    return recipes;
  }

  static async getAvailableResources(reserved) {
    let available = {};
    let resources = await Resource.findAll();

    each(resources, resource => {
      available[resource.code] = resource.count - (reserved[resource.code]||0)
    });

    return available;
  }

  async enoughResources(reserved) {
    let possible = true;

    each(this.ingredients, (count, code) => {
      if (reserved[code] == null || reserved[code] < count) { possible = false; }
    });

    return possible;
  }

}
