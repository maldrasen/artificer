Resolver.Tasks = (function() {

  async function workTasks(taskWork) {
    if (taskWork && taskWork.length > 0) {
      await Promise.all(taskWork.map(async task => {
        return workTask(task);
      }));
    }
  }

  async function workTask(taskWork) {
    const task = Task.lookup(taskWork.code);

    if (taskWork.minions) {
      taskWork.minions = await Character.findAll({ where:{ id:taskWork.minions }});
      await Promise.all(taskWork.minions.map(async minion => {
        return minion.update({ currentDuty:'task' });
      }));
    }

    // The actual results of the task should be left up to the Task form's
    // execute() function. This should do whatever the task does and return the
    // resulting story title and text.
    Resolver.Report.addTask((await task.execute(taskWork)));
  }

  return { workTasks }

})();
