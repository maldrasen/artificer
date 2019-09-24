global.KoboldNameGenerator = (function() {

  function getNames() {
    return new Promise((resolve, reject) => {
      resolve({
        first:'FIRST',
        last:'LAST',
      })
    });
  }

  return { getNames:getNames };

})();
