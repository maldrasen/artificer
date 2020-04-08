global.Recipe = class Recipe extends Form {

  // === Static functions for the Plan View ===

  static async getRecipeListForPlan(state) {
    let available = await Recipe.getAvailableResources(state.reserved);

    let unlocked = Recipe.where(recipe => {
      return Flag.lookup(`recipe.${recipe.code}`) == 'unlocked';
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

  static timeSentence(time) {
    if (time == 4) { return "Building this will take the entire day."; }
    if (time == 3) { return "Building this will take at least six hours."; }
    if (time == 2) { return "Building this will take half a day."; }
    return "Building this will take a couple of hours.";
  }

  // === General Information ===

  buildsItem() {
    if (this.buildsType == 'equipment') { return Equipment.lookup(this.builds); }
    throw `I don't know what I build.`
  }

  buildsName() {
    return this.buildsItem().name;
  }

  // === Crafting this item ===

  async craft() {
    let form = Equipment.lookup(this.code);
    let condition = (typeof form.degrade == 'function') ? 100 : null;

    await Resource.consume(this.ingredients);

    return await CharacterEquipment.create({
      code: this.code,
      condition: condition,
    });
  }

  // === For the Plan View ===

  async forPlan(available) {
    let display = {
      code: this.code,
      builds: this.builds,
      buildsType: this.buildsType,
      buildsCount: (this.buildsCount || 1),
      ingredients: this.ingredients,
      time: (this.time || 1),
      enoughResources: (await this.enoughResources(available)),
    };

    display.note = display.enoughResources ?
      Recipe.timeSentence(this.time):
      Recipe.resourceSentence(available, this.ingredients);

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
