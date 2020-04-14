global.TaskStory = class TaskStory extends Form {

  static build(taskCode, data) {
    return super.build(null,extend(data,{ taskCode:taskCode }));
  }

  static async select(code, work) {
    const context = new Context();
    await context.addPlayer();

    if (work.minions.length == 1) {
      await context.addCharacter('C',minions[0]);
    }
    if (work.minions.length > 1) {
      throw `TODO: Need to implement selecting a task story that involves more than one minion.`;
    }

    const stories = await Promise.all(TaskStory.all().map(async story => {
      return (await story.valid(code, context)) ? story : null;
    }));

    const story = Random.from(stories.filter(story => {
      return story != null;
    }));

    await story.execute(work);

    return Weaver.weave(story.text, context);
  }

  // If this TaskStory includes an onSelect() function (used to add further
  // adjustements to a character) then it's executed here.
  async execute(work) {
    if (typeof this.onSelect == 'function') { await this.onSelect(work) }
  }

  async valid(code, context) {
    if (this.taskCode == code) {
      return await CentralScrutinizer.meetsRequirements(this.requires, context);
    }
  }

}
