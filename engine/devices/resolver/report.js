Resolver.Report = (function() {

  async function start() {
    const report = Resolver.currentReport();
    const minions = await Character.findAll({where:{ type:'minion', status:'normal' }});

    report.minions = {};

    each(minions, minion => {
      report.minions[minion.id] = { name:minion.name };
    });
  }

  function setProjectProgressText(project, minions) {
    let text = `I'm working on ${project.workingName}. `
    if (minions.length == 0) { text += `I've made some progress, but there's still work to do.` }
    if (minions.length == 1) { text += `${minions[0].firstName} and I've made some progress, but there's still work to do.` }
    if (minions.length > 1)  { text += `${EnglishUtility.NumberInEnglish(minions.length)} of my minions and I have made some progress, but there's still work to do.` }

    Resolver.currentReport().project = { text:text };
  }

  function setProjectCompletedText(project) {
    Resolver.currentReport().project = { text:`I've finished ${project.workingName}.` };
  }

  function setProjectIdleText() {
    Resolver.currentReport().project = { text:`I decided to take a day off, and was idle for most of the day.` };
  }

  function setMinionData(minion, key, value) {
    Resolver.currentReport().minions[minion.id][key] = value;
  }

  return {
    start,
    setProjectProgressText,
    setProjectCompletedText,
    setProjectIdleText,
    setMinionData,
  }

})();
