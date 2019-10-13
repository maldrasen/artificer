global.ItemFlavor = class ItemFlavor extends Form {

  // Given an object of item flavors we want to create an object of items that
  // can be added to the inventory or to the game state. Some item flavors turn
  // into a larger quantity of an item than others.
  //
  //    { 'other-meat': 1, 'squirrel-meat': 1, 'rat-meat': 2 }
  //
  static itemize(flavors) {
    let items = {};

    each(flavors, (count, code) => {
      let flavor = ItemFlavor.lookup(code);
      if (items[flavor.becomes] == null) { items[flavor.becomes] = 0; }
      items[flavor.becomes] += (count * flavor.becomesCount);
    });

    return items;
  }

}
