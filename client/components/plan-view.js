Components.PlanView = (function() {
  const logger = new Logger('Plan View', 'rgb(199, 219, 144)');

  function init() {

  }

  function build(event, data) {
    logger.info("Build Plan View",data);

    let template = $('<div>',{ id:"planView" }).append($('#planTemplate').html());

    $('#mainContent').empty().append(template);
  }

  return {
    init: init,
    build: build,
  };

})();
