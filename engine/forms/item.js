global.Item = class Item extends Form {

  get plural() { return (this.pluralName == null) ? `${this.name}s` : this.pluralName; }

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
