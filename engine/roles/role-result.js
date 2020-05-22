global.RoleResult = class RoleResult {

  constructor(context) {
    this._context = context;
    this._story = '{{C::character.firstName}} did a work';
  }

  get context() { return this._context; }
  get character() { return this.context.get('C').character; }

  get story() { return this._story; }
  get items() { return []; }
  get notifications() { return []; }
  get flavors() { return []; }
  get injury() { return null; }

  set story(text) { this._story = text; }

  // Because the report is rendered in the view, the result needs to be turned
  // into a plain object.
  async forReport() {
    return {
      story: (await Weaver.weave(this.story,this.context)),
      items: this.items,
      notifications: this.notifications,
      flavors: this.flavors,
      injury: this.injury
    }
  }



}
