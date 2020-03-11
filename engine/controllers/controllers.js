global.Controllers = (function() {

  function init() {
    CharacterController.init();
    DebugController.init();
    EquipmentController.init();
    GameController.init();
    ImageController.init();
    LocationController.init();
    PlanController.init();
    ResolverController.init();
  }

  return { init };

})();
