global.Item = class Item extends Form {

  get plural() { return (this.pluralName == null) ? `${this.name}s` : this.pluralName; }

}
