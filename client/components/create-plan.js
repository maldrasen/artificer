Components.CreatePlan = (function() {
  const logger = new Logger('Create Plan', 'rgb(199, 219, 144)');

  function init() {
  }

  function build(event, data) {
    logger.info("Build Create Plan",data);
    Renderer.showCreatePlan();
  }

  return {
    init: init,
    build: build,
  };

})();
