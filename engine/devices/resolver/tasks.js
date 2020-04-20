Resolver.Tasks = (function() {

  async function workTasks(taskWork) {
    await Promise.all((taskWork||[]).map(async task => {
      await workTask(task);
    }));
  }

  async function workTask(taskWork) {
    const task = Task.lookup(taskWork.code);

    if (taskWork.minions) {
      taskWork.minions = await Character.findAll({ where:{ id:taskWork.minions }});
      await Promise.all(taskWork.minions.map(async minion => {
        await minion.update({ currentDuty:'task' });
      }));
    }

    // The actual results of the task should be left up to the Task form's
    // execute() function. This should do whatever the task does and return the
    // resulting story title and text.
    Resolver.Report.addTask((await task.execute(taskWork)));
  }

  return { workTasks }

})();
