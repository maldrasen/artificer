Components.PlanView.Projects = (function() {

  function init() {
    $(document).on('click', '#planView .show-available-tasks-button',    Elements.buttonAction(e => { showAvailable(getAvailableTasks());    }));
    $(document).on('click', '#planView .show-available-projects-button', Elements.buttonAction(e => { showAvailable(getAvailableProjects()); }));
    $(document).on('click', '#planView .show-available-missions-button', Elements.buttonAction(e => { showAvailable(getAvailableMissions()); }));
    $(document).on('click', '#planView .start-project-button',           Elements.buttonAction(startProject));
  }

  function build(planData) {
    // if (planData.currentProject) {
    //   let progressPercent = Math.floor(planData.currentProjectProgress / planData.currentProjectEffort * 100)
    //   current.append(`${planData.currentProjectName} (${progressPercent}% complete)`)
    //   current.data('committed',4);
    //   $('#planView .projects .lower-frame').addClass('hide');
    // }
  }

  function showAvailable(items) {
    $('#planView .available-actions').empty().append(items);
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

  function getAvailableProjects() {
    return Components.PlanView.getPlanData().projects.map(project => {
      let link = $('<a>',{ class:'start-project-button button button-small' });
          link.addClass(project.readyState.ready ? 'ready' : 'not-ready');
          link.append($('<div>',{ class:'name' }).append(project.name));
          link.data('project',project);

      return $('<tr>').
        append($('<td>').append(link)).
        append($('<td>').append(projectDescription(project)));
    });
  }

  function getAvailableMissions() {
    return Components.PlanView.getPlanData().missions.map(mission => {
      let link = $('<a>',{ class:'start-mission-button button button-small ready' });
          link.append($('<div>',{ class:'name' }).append(mission.name));
          link.data('mission',mission);

      let row = $('<tr>');
          row.append($('<td>').append(link));
          row.append($('<td>').append( $('<div>',{ class:'description' }).append(mission.description) ));

      return row;
    });
  }

  function projectDescription(project) {
    let assistance = (project.help.max == 0) ?
      `but I'll have to do this myself. `:
      `and I can have ${project.help.min} to ${project.help.max} minions help me with this. `;

    let description = `${project.description} This should take about ${project.effort} hours to complete ${assistance}`
    if (project.readyState.ready == false) {
      description += `<span class='excuse'>However, I won't be able to work on this just yet. ${project.readyState.excuse}</span>`;
    }

    return $('<div>',{ class:'description' }).append(description);
  }

  function startProject() {
    let project = $(this).data('project');
    let minions = Components.PlanView.getPlanData().minions.filter(minion => {
      return minion.currentDuty == 'role'
    });

    if (project.help.max == 0) {
      return confirmSelectProject(project, []);
    }

    Components.MinionSelectDialog.open({
      title: 'Available Minions',
      minions: minions,
      limit: project.help.max,
      onSelect: minions => { setHelpStatus(project, minions); },
      onConfirm: minions => { confirmSelectProject(project, minions); }
    });

    setHelpStatus(project,[]);
  }

  function confirmSelectProject(project, minions) {
    console.log("Confirm Project Start");
    console.log("Project:",project);
    console.log("Minions:",minions);

    // let working = $('#planView').data('workingProjects');
    // let current = $('#planView .current-project').empty();
    // let committed = current.data('committed');
    //
    // let project = Components.PlanView.getSelectedProject()
    // let minions = Components.PlanView.getSelectedHelperMinions();
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
    //
    // if (committed == 4) {
    //   $('#planView .projects .lower-frame').addClass('hide');
    // }
    //
    // each(minions, id => {
    //   $(`.plan-minion-list .minion-${id}`).removeClass('free').addClass('project');
    // })
    //

  }

  function setHelpStatus(project, minions) {
    let status = `This project will take approximately ${project.effort} man hours of work to complete. `;

    if (project.help.min == 0 && project.help.max == 0) { status += 'No one can help me on this project. '; }
    if (project.help.min == 0 && project.help.max == 1) { status += 'A single one of my minions can help me. ' }
    if (project.help.min == 0 && project.help.max > 1)  { status += `Up to ${project.help.max} of my minions can help me work to complete it. ` }
    if (project.help.min == 1 && project.help.max == 1) { status += `I'll need the help of one of my minions to complete it. ` }
    if (project.help.min >= 1 && project.help.max > 1)  { status += `I'll need the help of ${project.help.min} to ${project.help.max} of my minions to complete it. ` }

    if (minions.length == 0) {
      let days = Math.ceil(project.effort/10);
      status += (days > 1) ?
        `Working by myself, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
        `Working by myself, this project will take <span class='fg-strong'>a day</span> to complete.`;
    } else {
      let work = (minions.length * 5) + 10;
      let days = Math.ceil(project.effort/work);

      if (days == 1) {
        status += (minions.length == 1) ?
          `With the help of a minion, this project will take <span class='fg-strong'>a day</span> to complete.`:
          `With the help of ${minions.length} minions, this project will take <span class='fg-strong'>a day</span> to complete.`;
      } else {
        status += (minions.length == 1) ?
          `With the help of a minion, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
          `With the help of ${minions.length} minions, this project will take <span class='fg-strong'>${days} days</span> to complete.`;
      }
    }

    Components.MinionSelectDialog.setStatus(status);
  }


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

  return { init, build };

})();
