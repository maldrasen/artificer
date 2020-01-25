global.ItemFlavor = class ItemFlavor extends Form {

  // Given an object of item flavors we want to create an object of items that
  // can be added to the inventory or to the game state. Some item flavors turn
  // into a larger quantity of an item than others.
  //
  //    { 'other-meat': 1, 'squirrel-meat': 1, 'rat-meat': 2 }
  //
  // TODO: We may want to make becomes an array for when multiple items can be
  //       harvested from a single item. A deer carcass may be turned into both
  //       hide and bone.
  static itemize(flavors) {
    let items = {};

    each((flavors||{}), (count, code) => {
      let flavor = ItemFlavor.lookup(code);

      // Some item flavors have food values. A fox hide instance both becomes
      // a hide, but it also becomes food.
      if (flavor.foodValue) {
        if (items.food == null) { items.food = 0; }
        items.food += count * flavor.foodValue;
      }

      // Some item flavors become other items when put into the inventory. For
      // instance, a fox hide becomes just a hide. When itemized a flavor can
      // become a set number of items or a slightly random number of items.
      if (flavor.becomes) {
        if (items[flavor.becomes] == null) { items[flavor.becomes] = 0; }

        if (flavor.becomesCount) {
          items[flavor.becomes] += (count * flavor.becomesCount);
        }
        if (flavor.becomesMin && flavor.becomesMax) {
          items[flavor.becomes] += (count * Random.between(flavor.becomesMin,flavor.becomesMax));
        }
      }
    });

    return items;
  }

  // Take a map of item flavors like { 'rabbit-pelt':2 }, and turns it into
  // a map that the client can know how to render.
  static forReport(raw) {
    return Object.keys(raw||{}).map(code => {
      let flavor = ItemFlavor.lookup(code);
      return {
        code: code,
        count: raw[code],
        name: flavor.name,
        icon: flavor.icon
      };
    });
  }

  get icon() {
    return ImageResource.lookup(this.iconCode || 'unknown-icon').url;
  }

}
