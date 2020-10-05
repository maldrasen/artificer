global.Task = class Task extends Form {

  static async available() {
    return ArrayUtility.compact(
      (await Promise.all(Task.all().map(async task => {
        if ((await CentralScrutinizer.meetsRequirements(task.requires))) { return task; }
      })))
    );
  }

  static async availableForClient() {
    return (await Task.available()).map(task => { return task.properties });
  }

}
