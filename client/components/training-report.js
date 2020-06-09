Components.TrainingReport = (function() {

  function build(event, data) {
    $('#mainContent').empty().append($('<div>',{ id:"trainingReport" }).append($('#trainingReportTemplate').html()));

console.log("Build:",data)

    each(data.results, result => $('#trainingReport .results').append(buildResult(result)));
  }

  function buildResult(result) {
    const resultElement = $('<div>',{ class:'minion-result' }).append($('#trainingReportResultTemplate').html());
    resultElement.find('.header .name').append(result.minion.name);
    resultElement.find('.story').append(result.story);
    return resultElement;
  }

  return { build };

})();
