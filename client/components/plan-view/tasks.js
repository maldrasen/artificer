Components.PlanView.Tasks = (function() {

  function init() {
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

  // All this only really applies to tasks, or maybe current.
  // Most projects will have an effort level of 10 or more required hours.
  //   Half day projects take 4 effort.
  //   Quarter day projects take 2 effort.
  // The committed value represents quarter chunks of the day.
  // function availableHoursFor(project) {
  //   let committed = $('#planView .current-project').data('committed');
  //   if (project.effort > 4) { return committed == 0; }
  //   if (project.effort == 4) { return comitted <= 2; }
  //   if (project.effort == 2) { return comitted <= 3; }
  //   throw `Bad number of hours in project ${project.code} effort - ${project.effort}`
  // }
  // let working = $('#planView').data('workingProjects');
  // let current = $('#planView .current-project').empty();
  // let committed = current.data('committed');
  //
  // if (project.effort > 4)  { committed += 4; }
  // if (project.effort == 4) { committed += 2; }
  // if (project.effort == 2) { committed += 1; }
  // current.data('committed',committed);
  //
  // working.push({
  //   code: project.code,
  //   minions: minions
  // });
  //
  // (working.length == 1) ?
  //   current.append(`${project.name} (${committed}/4)`):
  //   current.append(`Multiple Projects (${committed}/4)`);
  //
  // $('#planView').data('workingProjects',working);

  return { init };

})();
