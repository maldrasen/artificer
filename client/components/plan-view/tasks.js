Components.PlanView.Tasks = (function() {

  function init() {
    $(document).on('click', '#planView .add-task-button', Elements.buttonAction(addTask));
    $(document).on('click', '#planView .show-available-tasks-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableTasks());
    }));
  }

  function getAvailableTasks() {
    return Components.PlanView.getPlanData().tasks.map(task => {
      let link = $('<a>',{ class:'add-task-button button button-small ready' });
          link.append($('<div>',{ class:'name' }).append(task.name));
          link.data('task',task);

      let row = $('<tr>');
          row.append($('<td>').append(link));
          row.append($('<td>').append( $('<div>',{ class:'description' }).append(task.description) ));

      return row;
    });
  }

  function addTask() {
    let task = $(this).data('task');
    let minions = Components.PlanView.Minions.getFree();

    if (task.minionsUsed == null) {
      confirmAddTask(task);
    }

    let title = (task.minionsUsed == 1) ?
      `Choose one minion` :
      `Choose ${task.minionsUsed} minions.`;

    Components.MinionSelectDialog.open({
      title: title,
      minions: minions,
      limit: task.minionsUsed,
      minimum: task.minionsUsed,
      onConfirm: minions => { confirmAddTask(task, minions); }
    });
  }

  function confirmAddTask(task, minions) {
    console.log("Add Task:",task,minions);
    Components.PlanView.Current.addTask({
      task: task,
      name: task.name,
    });
  }

  return { init };

})();
