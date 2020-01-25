global.Item = class Item extends Form {

  get plural() { return (this.pluralName == null) ? `${this.name}s` : this.pluralName; }
  get icon() { return ImageResource.lookup(this.iconCode || 'unknown-icon').url; }

}
