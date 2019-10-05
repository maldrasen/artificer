global.Event = class Event extends Form {

  static async onFinish(choices) {
    let finishFunction = Event.lookup(choices.event).onFinish;
    if (finishFunction) {
      await finishFunction(choices);
    }
  }

}
