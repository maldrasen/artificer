global.Alerts = (function() {

  function showAlert(alert) {
    if (alert.adjustment) { new Elements.Alert({ position:'event', message:alert.adjustment, classname:alert.classname }).display(); }
    if (alert.engine) { new Elements.Alert({ position:'side', message:alert.engine }).display(); }
    if (alert.unlock) { new Elements.Alert({ position:'center', title:'Unlocked', message:alert.unlock }).display(); }
  }

  function showEngineAlert(transport, alert) {
    showAlert({ engine:alert.message });
  }

  return {
    showAlert,
    showEngineAlert,
  };

})();
