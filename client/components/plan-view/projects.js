Components.PlanView.Projects = (function() {

  function init() {
    $(document).on('click', '#planView .start-project-button', Elements.buttonAction(startProject));
    $(document).on('click', '#planView .show-available-projects-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableProjects());
    }));
  }

  function build(planData) {
    if (planData.projects.length > 0) {
      $('#planView .show-available-projects-button').removeClass('hide');
      $('#planView #idleMessage').addClass('hide');
    }
  }

  function getAvailableProjects() {
    return Components.PlanView.getPlanData().projects.map(project => {
      let link = $('<a>',{ class:'start-project-button button button-small' });
          link.append(project.name);
          link.data('project',project);

      if (!project.readyState.ready) {
        link.addClass('disabled-button');
      }

      return $('<tr>').
        append($('<td>').append(link)).
        append($('<td>').append(projectDescription(project)));
    });
  }

  function projectDescription(project) {
    let assistance = `and I can have ${project.help.min} to ${project.help.max} minions help me with this. `
    if (project.help.max == project.help.min) {
      if (project.help.max == 1) { assistance = `but I will need the aid of one of my minions. `; }
      if (project.help.max == 2) { assistance = `but I will need the aid of two of my minions. `; }
      if (project.help.max == 3) { assistance = `but I will need the aid of three of my minions. `; }
    }
    if (project.help.max == 0) { assistance = `but I'll have to do this myself. `; }

    let description = `${project.description} This should take about ${project.effort} hours to complete ${assistance}`
    if (project.readyState.ready == false) {
      description += `<span class='excuse'>However, I won't be able to work on this just yet. ${project.readyState.excuse}</span>`;
    }

    return $('<div>',{ class:'description' }).append(description);
  }

  function startProject() {
    let project = $(this).data('project');
    let minions = Components.PlanView.Minions.getFree();

    if (project.help.max == 0) {
      return confirmSelectProject(project, []);
    }

    Components.MinionSelectDialog.open({
      title: 'Available Minions',
      minions: minions,
      limit: project.help.max,
      onSelect: minions => { setStatus(project, minions); },
      onConfirm: ids => { confirmSelectProject(project, ids); }
    });

    setStatus(project,[]);
  }

  function confirmSelectProject(project, ids) {
    Components.PlanView.showAvailable([]);
    Components.PlanView.Minions.claim(ids, 'project');
    Components.PlanView.Current.addCommitted(4);
    Components.PlanView.Current.addProject({
      project: project,
      name: project.name,
      progress: 0,
      minions: ids,
    });
  }

  function setStatus(project, minions) {
    Components.MinionSelectDialog.disable();

    let status = `This project will take approximately ${project.effort} man hours of work to complete. `;

    if (project.help.min == 0 && project.help.max == 0) { status += 'No one can help me on this project. '; }
    if (project.help.min == 0 && project.help.max == 1) { status += 'A single one of my minions can help me. ' }
    if (project.help.min == 0 && project.help.max > 1)  { status += `Up to ${project.help.max} of my minions can help me work to complete it. ` }
    if (project.help.min == 1 && project.help.max == 1) { status += `I'll need the help of one of my minions to complete it. ` }
    if (project.help.min >= 1 && project.help.max > 1)  { status += `I'll need the help of ${project.help.min} to ${project.help.max} of my minions to complete it. ` }

    if (minions.length == 0 && project.help.min == 0) {
      let days = Math.ceil(project.effort/10);
      status += (days > 1) ?
        `Working by myself, this project will take <span class='fg-strong'>${days} days</span> to complete.`:
        `Working by myself, this project will take <span class='fg-strong'>a day</span> to complete.`;
    }
    else if (minions.length == 0 && project.help.min > 0) {
      // Then add nothing else.
    }
    else {
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

    if (minions.length >= project.help.min && minions.length <= project.help.max) {
      Components.MinionSelectDialog.enable();
    }

    Components.MinionSelectDialog.setStatus(status);
  }

  return { init, build };

})();
