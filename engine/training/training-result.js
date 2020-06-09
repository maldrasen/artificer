global.TrainingResult = class RoleResult {

  constructor(context) {
    this._context = context;
    this._story = '{{C::character.firstName}} did a training';
    this._notifications = [];
  }

  get context()       { return this._context; }
  get notifications() { return this._notifications; }
  get story()         { return this._story; }
  set story(text)     { this._story = text; }

  // Experience notifications should have the following attributes. These are
  // simply passed to the view to be rendered in the report. It's safe to pass
  // a null into this if the notification may or may not be generated.
  //    code         aspect.code,
  //    name         aspect.name,
  //    experience   experience,
  //    gainedLevel  (optional)
  //    lostLevel    (optional)
  addNotification(notification) {
    if (notification) { this._notifications.push(notification); }
  }

  // Because the report is rendered in the view, the result needs to be turned
  // into a plain object.
  async forReport() {
    const minion = this.context.get('C').character;
    return {
      minion: { name:minion.name, portrait:minion.portrait },
      story: (await Weaver.weave(this.story, this.context)),
      notifications: this.notifications,
    }
  }

  // === Current Report ===

  static startReport() { TrainingResult._currentReport = { results:[], playerNotifications:[] }; }
  static currentReport() { return TrainingResult._currentReport; }

  static addPlayerNotification(notification) {
    TrainingResult._currentReport.playerNotifications.push(notification);
  }

  static async addResult(result) {
    TrainingResult._currentReport.results.push(await result.forReport());
  }

  static async reportViewed() {
    await Game.setPhase('after-training');
    TrainingResult._currentReport = null;
  }

}
