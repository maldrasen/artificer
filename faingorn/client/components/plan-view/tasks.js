Components.PlanView.Tasks = (function() {

  function init() {
    $(document).on('click', '#planView .add-task-button', Elements.buttonAction(addTask));
    $(document).on('click', '#planView .show-available-tasks-button', Elements.buttonAction(showAvailableTasks));
  }

  function build(planData) {
    if (planData.tasks.length > 0) {
      $('#planView .show-available-tasks-button').removeClass('hide');
      $('#planView #idleMessage').addClass('hide');
    }
  }

  // Show the list of available tasks in the plan view. If the plan is full we
  // should show that nothing is available to add.
  function showAvailableTasks() {
    Components.PlanView.showAvailable(Components.PlanView.Current.getCommitted() == 4 ? [] : getAvailableTasks())
  }

  function getAvailableTasks() {
    return Components.PlanView.getPlanData().tasks.map(task => {
      if (shouldBeAvailable(task) == false) { return; }

      let link = $('<a>',{ class:'add-task-button button button-small' });
      link.append(task.name);
      link.data('task',task);

      let row = $('<tr>');
      row.append($('<td>').append(link));
      row.append($('<td>').append( $('<div>',{ class:'description' }).append(task.description) ));

      return row;
    }).filter(i => { return i != null });
  }

  // If a task has a limit set, the task is still available only if the
  // currently planned tasks are under that limit. Some tasks like meditate
  // have a hard limit of one per day. Tasks that include a minion may have a
  // limit per minion, but can be done multiple times with different minions.
  //
  // TODO: Implement limits for tasks that involve minions.
  function shouldBeAvailable(task) {
    if (task.limit) {
      return Components.PlanView.Current.getTaskWork().filter(plannedTask => {
        return plannedTask.code == task.code;
      }) < task.limit;
    }

    return true;
  }

  function addTask() {
    let task = $(this).data('task');
    let minions = Components.PlanView.Minions.getFree();

    if (task.control == 'craft-dialog') { return Components.PlanView.Crafting.open(); }
    if (task.minionsUsed == null) { return confirmAddTask(task,[]); }

    let title = (task.minionsUsed == 1) ?
      `Choose one minion` :
      `Choose ${task.minionsUsed} minions.`;

    Components.MinionSelectDialog.open({
      title: title,
      minions: minions,
      limit: task.minionsUsed,
      minimum: task.minionsUsed,
      onConfirm: ids => { confirmAddTask(task, ids); }
    });
  }

  function confirmAddTask(task, ids) {
    Components.PlanView.Minions.claim(ids, 'task');
    Components.PlanView.Current.addCommitted(task.time);
    Components.PlanView.Current.addTask({
      task: task,
      name: task.name,
      minions: ids,
    });

    // Refresh the list of available tasks when one is added in case a task has
    // a limit set on it.
    showAvailableTasks();
  }

  return { init, build, showAvailableTasks };

})();
