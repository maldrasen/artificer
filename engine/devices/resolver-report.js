Resolver.Report = (function() {

  function setProjectProgressText(project, minions) {
    let text = `I'm working on ${project.workingName}. `
    if (minions.length == 0) { text += `I've made some progress, but there's still work to do.` }
    if (minions.length == 1) { text += `${minions[0].firstName} and I've made some progress, but there's still work to do.` }
    if (minions.length > 1)  { text += `${EnglishUtility.NumberInEnglish(minions.length)} of my minions and I have made some progress, but there's still work to do.` }

    Resolver.currentReport().project = { text:text };
  }

  function setProjectCompletedText(project) {
    Resolver.currentReport().project = { text:`I've completed work on ${project.workingName}.` };
  }

  function setProjectIdleText() {
    Resolver.currentReport().project = { text:`I decided to take a day off, and was idle for most of the day.` };
  }

  return {
    setProjectProgressText: setProjectProgressText,
    setProjectCompletedText: setProjectCompletedText,
    setProjectIdleText: setProjectIdleText,
  }

})();
