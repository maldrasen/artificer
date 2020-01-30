Components.PlanView.Tasks = (function() {

  function init() {
    $(document).on('click', '#planView .add-task-button', Elements.buttonAction(addTask));
    $(document).on('click', '#planView .show-available-tasks-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableTasks());
    }));
  }

  function build(planData) {
    if (planData.tasks.length > 0) {
      $('#planView .show-available-tasks-button').removeClass('hide');
      $('#planView #idleMessage').addClass('hide');
    }
  }

  function getAvailableTasks() {
    return Components.PlanView.getPlanData().tasks.map(task => {
      let link = $('<a>',{ class:'add-task-button button button-small' });
          link.append(task.name);
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

    if (Components.PlanView.Current.getCommitted() == 4) {
      Components.PlanView.showAvailable([]);
    }
  }

  return { init, build };

})();
