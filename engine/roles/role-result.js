global.RoleResult = class RoleResult {

  constructor(context) {
    this._context = context;
    this._story = '{{C::character.firstName}} did a work';

    this._flavors = [];
    this._items = [];
    this._notifications = [];
  }

  get character()     { return this.context.get('C').character; }
  get context()       { return this._context; }
  get flavors()       { return this._flavors; }
  get injury()        { return this._injury; }
  get items()         { return this._items; }
  get notifications() { return this._notifications; }
  get story()         { return this._story; }

  set story(text)   { this._story = text;   }
  set flavors(list) { this._flavors = list; }

  // Experience notifications should have the following attributes. These are
  // simply passed to the view to be rendered in the report.
  //    code         aspect.code,
  //    name         aspect.name,
  //    experience   experience,
  //    gainedLevel  (optional)
  addNotification(notification) {
    this._notifications.push(notification);
  }

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
