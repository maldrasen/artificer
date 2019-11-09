Components.PlanView.Projects = (function() {

  function init() {
    $(document).on('click', '#planView .start-project-button', Elements.buttonAction(startProject));
    $(document).on('click', '#planView .show-available-projects-button', Elements.buttonAction(e => {
      Components.PlanView.showAvailable(getAvailableProjects());
    }));
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
    let minions = Components.PlanView.Minions.getFree();

    if (project.help.max == 0) {
      return confirmSelectProject(project, []);
    }

    Components.MinionSelectDialog.open({
      title: 'Available Minions',
      minions: minions,
      limit: project.help.max,
      onSelect: minions => { setStatus(project, minions); },
      onConfirm: minions => { confirmSelectProject(project, minions); }
    });

    setStatus(project,[]);
  }

  function confirmSelectProject(project, minions) {
    Components.PlanView.showAvailable([]);
    Components.PlanView.Minions.claim(minions, 'project');
    Components.PlanView.Current.addCommitted(4);
    Components.PlanView.Current.addProject({
      project: project,
      name: project.name,
      progress: 0,
      minions: minions,
    });
  }

  function setStatus(project, minions) {
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

  return { init };

})();
