global.TaskStory = class TaskStory extends Form {

  static build(taskCode, data) {
    return super.build(null,extend(data,{ taskCode:taskCode }));
  }

  static async select(code, minions) {
    const context = new WeaverContext();
    await context.addPlayer();

    if (minions.length == 1) {
      await context.addCharacter('C',minions[0]);
    }
    if (minions.length > 1) {
      throw `TODO: Need to implement selecting a task story that involves more than one minion.`;
    }

    const stories = await Promise.all(TaskStory.all().map(async story => {
      return (await story.valid(code, context)) ? story : null;
    }));

    const story = Random.from(stories.filter(story => {
      return story != null;
    }));

    await story.execute(minions);

    return Weaver.weave(story.text, context);
  }

  // If this TaskStory includes an onSelect() function (used to add further
  // adjustements to a character) then it's executed here.
  async execute(minions) {
    if (typeof this.onSelect == 'function') { await this.onSelect(minions) }
  }

  async valid(code, context) {
    if (this.taskCode == code) {
      return await CentralScrutinizer.meetsRequirements(this.requires, context);
    }
  }

}
