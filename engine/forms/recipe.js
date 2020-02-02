global.Recipe = class Recipe extends Form {

  static async getRecipeListForPlan(state) {
    let flags = await Flag.getAll();
    let available = await Recipe.getAvailableResources(state.reserved);

    let unlocked = Recipe.where(recipe => {
      return flags[`recipe.${recipe.code}`] == 'unlocked'
    });

    let recipes = await Promise.all(unlocked.map(async recipe => {
      return recipe.forPlan(available);
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

  // Use the Listifier to get a list of missing resources.
  static resourceSentence(available, ingredients) {
    let list = [];

    each(ingredients, (count, code) => {
      let item = Item.lookup(code);
      let lacking = count - (available[code]||0);

      if (lacking > 0) {
        list.push({
          word: item.name.toLowerCase(),
          words: item.plural.toLowerCase(),
          count: lacking,
        });
      }
    });

    return `I need ${listify(list)} before I can make this.`;
  }

  async forPlan(available) {
    let display = {
      builds: this.builds,
      buildsType: this.buildsType,
      buildsCount: this.buildsCount || 1,
      ingredients: this.ingredients,
      enoughResources: (await this.enoughResources(available))
    };

    if (display.enoughResources == false) {
      display.resourceSentence = Recipe.resourceSentence(available, this.ingredients);
    }

    if (this.buildsType == 'equipment') {
      display.name = Equipment.lookup(this.builds).name;
    }

    return display;
  }

  async enoughResources(reserved) {
    let possible = true;

    each(this.ingredients, (count, code) => {
      if (reserved[code] == null || reserved[code] < count) { possible = false; }
    });

    return possible;
  }

}
