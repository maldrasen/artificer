Components.PlanView.Projects = (function() {

  function init() {
    $(document).on('click','.show-available-tasks-button',    Elements.buttonAction(e => { showAvailable(getAvailableTasks());    }));
    $(document).on('click','.show-available-projects-button', Elements.buttonAction(e => { showAvailable(getAvailableProjects()); }));
    $(document).on('click','.show-available-missions-button', Elements.buttonAction(e => { showAvailable(getAvailableMissions()); }));

    // $(document).on('click', '#planView .available-project', selectAvailableProject);
    // $(document).on('click', '#planView .select-available-project', workSelectedProject);
  }

  function build(planData) {
  //   let current = $('#planView .current-project');
  //   let progress = $('#planView .current-progress');
  //
  //   if (planData.currentProject == null) {
  //     $('#planView').data('workingProjects',[]);
  //     current.append("Nothing (0/4)");
  //     current.data('committed',0);
  //   } else {
  //     let progressPercent = Math.floor(planData.currentProjectProgress / planData.currentProjectEffort * 100)
  //     current.append(`${planData.currentProjectName} (${progressPercent}% complete)`)
  //     current.data('committed',4);
  //     $('#planView .projects .lower-frame').addClass('hide');
  //   }
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

      let row = $('<tr>');
          row.append($('<td>').append(link));
          row.append($('<td>').append( $('<div>',{ class:'description' }).append(project.description) ));

      return row;
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

  // function selectAvailableProject(e) {
  //   if ($(this).hasClass('selected')) { return false; }
  //
  //   $('.available-project.selected').removeClass('selected');
  //   $(this).addClass('selected');
  //
  //   displaySelectedProject($(this).data('project'));
  // }
  //
  // function displaySelectedProject(project) {
  //   let assistance = (project.help.max == 0) ?
  //     `Assistance: I'll have to do this myself.`:
  //     `Assistance: ${project.help.min} - ${project.help.max} minions.`
  //
  //   let selected = $('#planView .selected-project').empty().append(`
  //     <div class='description'>${project.description}</div>
  //     <div class='effort'>${project.effort} man hours</div>
  //     <div class='help'>${assistance}</div>
  //   `)
  //
  //   if (project.readyState.ready == false) {
  //     selected.find('.description').append(` <span class='excuse'>I won't be able to work on this just yet. ${project.readyState.excuse}</span>`);
  //   }
  //
  //   if (project.readyState.ready && availableHoursFor(project)) {
  //     selected.append($('<a>',{ href:'#', class:'select-available-project button-primary' }).append('Select'));
  //   }
  // }
  //
  // // Most projects will have an effort level of 10 or more required hours.
  // //   Half day projects take 4 effort.
  // //   Quarter day projects take 2 effort.
  // // The committed value represents quarter chunks of the day.
  // function availableHoursFor(project) {
  //   let committed = $('#planView .current-project').data('committed');
  //   if (project.effort > 4) { return committed == 0; }
  //   if (project.effort == 4) { return comitted <= 2; }
  //   if (project.effort == 2) { return comitted <= 3; }
  //   throw `Bad number of hours in project ${project.code} effort - ${project.effort}`
  // }
  //
  // function workSelectedProject() {
  //   let project = Components.PlanView.getSelectedProject();
  //   let minions = Components.PlanView.getPlanData().minions;
  //
  //   // If this project doesn't allow helpers just add the project, no need to select minions
  //   if (project.help.max == 0) { return confirmSelectProject(); }
  //
  //   $('#planView .minion-select-frame').removeClass('hide');
  //   $('#planView .modal-cover').removeClass('hide');
  //
  //   let list = $('#planView .minion-select-frame .minions').empty();
  //
  //   each(minions, minion => {
  //     if (minion.currentDuty == 'role') {
  //       list.append($('<li>',{ class:'helper-minion' }).append(minion.name).data('id',minion.id));
  //     }
  //   });
  //
  //   setHelpStatus(project);
  // }
  //
  function setHelpStatus(project) {
  //   let selectedHelp = Components.PlanView.getSelectedHelperMinions();
  //   let status = `This project will take approximately ${project.effort} man hours of work to complete. `;
  //
  //   if (project.help.min == 0 && project.help.max == 0) { status += 'No one can help me on this project. '; }
  //   if (project.help.min == 0 && project.help.max == 1) { status += 'A single one of my minions can help you. ' }
  //   if (project.help.min == 0 && project.help.max > 1)  { status += `Up to ${project.help.max} of my minions can help me work to complete it. ` }
  //   if (project.help.min == 1 && project.help.max == 1) { status += `I'll need the help of one of my minions to complete it. ` }
  //   if (project.help.min >= 1 && project.help.max > 1)  { status += `I'll need the help of ${project.help.min} to ${project.help.max} of my minions to complete it. ` }
  //
  //   if (selectedHelp.length == 0) {
  //     let days = Math.ceil(project.effort/10);
  //     status += (days > 1) ?
  //       `Working by myself, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
  //       `Working by myself, this project will take <span class='fg-strong'>a day</span> to complete.`;
  //   } else {
  //     let work = (selectedHelp.length * 5) + 10;
  //     let days = Math.ceil(project.effort/work);
  //
  //     if (days == 1) {
  //       status += (selectedHelp.length == 1) ?
  //         `With the help of a minion, this project will take <span class='fg-strong'>a day</span> to complete.`:
  //         `With the help of ${selectedHelp.length} minions, this project will take <span class='fg-strong'>a day</span> to complete.`;
  //     } else {
  //       status += (selectedHelp.length == 1) ?
  //         `With the help of a minion, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
  //         `With the help of ${selectedHelp.length} minions, this project will take <span class='fg-strong'>${days} days</span> to complete.`;
  //     }
  //   }
  //
  //   $('#planView .minion-select-frame .status').empty().append(status);
  }

  return { init, build, setHelpStatus };

})();
