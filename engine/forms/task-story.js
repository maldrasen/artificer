global.TaskStory = class TaskStory extends Form {

  static async select(code, minions) {
    return new TaskStory();
  }

  async execute() {
    return "SELECTED TASK TEXT"
  }

}
