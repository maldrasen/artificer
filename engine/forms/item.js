global.Item = class Item extends Form {

  get plural() { return (this.pluralName == null) ? `${this.name}s` : this.pluralName; }

  static listify(items) {
    return listify(Object.keys(items).map(code => {
      let item = Item.lookup(code);
      return {
        word: item.name,
        words: item.pluralName,
        count: items[code]
      };
    }));
  }

  // forClient() is used when building the icon cache for items.
  static forClient() {
    let data = {};
    each(Item.instances, (item, code) => {
      data[code] = {
        name: item.name,
        url: ImageResource.getIcon('item',code).url }
    });
    return data;
  }

}
