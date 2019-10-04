global.Event = class Event extends Form {

  static async finish(choices) {
    let finishFunction = Event.lookup(choices.event).finish;
    if (finishFunction) {
      await finishFunction(choices);
    }
  }

}
