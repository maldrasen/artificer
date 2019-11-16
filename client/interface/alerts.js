global.Alerts = (function() {

  function showAlert(alert) {
    console.log("Show Alert: ",alert)
  }

  function showEngineAlert(transport, alert) {
    showAlert({ engine:alert });
  }

  return {
    showAlert,
    showEngineAlert,
  }

})();
