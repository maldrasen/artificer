Resolver.Report = (function() {

  async function start() {
    const report = Resolver.currentReport();
    const minions = await Character.getNormalMinions();

    report.food = null;
    report.minions = {};
    report.tasks = [];
    report.incidentals = [];

    each(minions, minion => {
      report.minions[minion.id] = {
        name: minion.name,
        portrait: minion.portrait.url,
      };
    });
  }

  function setProjectProgressText(project, minions) {
    let text = `I'm working on ${project.workingName}. `
    if (minions.length == 0) { text += `I've made some progress, but there's still work to do.` }
    if (minions.length == 1) { text += `${minions[0].singleName} and I've made some progress, but there's still work to do.` }
    if (minions.length > 1)  { text += `${EnglishUtility.NumberInEnglish(minions.length)} of my minions and I have made some progress, but there's still work to do.` }

    Resolver.currentReport().project = { text:text };

    each(minions, minion => {
      setMinionData(minion,'work',{ story:`${minion.singleName} spent the day ${project.workingName} with me.` });
    });
  }

  function setProjectCompletedText(project, minions) {
    Resolver.currentReport().project = { text:`I've finished ${project.workingName}.` };

    each(minions, minion => {
      setMinionData(minion,'work',{ story:`${minion.singleName} finished ${project.workingName} with me.` });
    });
  }

  function setProjectIdleText() {
    Resolver.currentReport().project = { text:`I decided to take a day off, and was idle for most of the day.` };
  }

  // The story object comes directly from the task form's execute() function.
  // Task stories may include images or other data at some point, but for now
  // we know they have titles and text.
  function addTask(story) {
    Resolver.currentReport().tasks.push(story);
  }

  function addIncidental(story) {
    Resolver.currentReport().incidentals.push(story);
  }

  function setMinionData(minion, key, value) {
    Resolver.currentReport().minions[minion.id][key] = value;
  }

  function producedFood(value) {
    Flag.set('report-view.produced-food',`Today my minions and I produced <b>${value}</b> food.`);
  }

  function ateFood(value) {
    if (Flag.lookup('report-view.show-food')) {
      Resolver.currentReport().food = `${Flag.lookup('report-view.produced-food')} We ate <b>${value}</b> food, leaving us with <b>${Game.food()}</b>.`;
    }
  }

  return {
    start,
    setProjectProgressText,
    setProjectCompletedText,
    setProjectIdleText,
    addTask,
    addIncidental,
    setMinionData,
    producedFood,
    ateFood,
  }

})();
