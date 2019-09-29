global.Alerts = (function() {

  function showAlert(transport, alert) {
    console.log("Alert: ",alert)
  }

  return {
    showAlert: showAlert,
  }

})();
