global.AnusScrutinizer = (function() {

  // Inspect specific cock attributes.
  function check(operation, data) {
    if (operation == 'anus.small')             { return data.anus.sizeClass == 'small' }
    if (operation == 'anus.average')           { return data.anus.sizeClass == 'average' }
    if (operation == 'anus.big')               { return data.anus.sizeClass == 'big' }
    if (operation == 'anus.huge')              { return data.anus.sizeClass == 'huge' }
    if (operation == 'anus.monster')           { return data.anus.sizeClass == 'monster' }
    if (operation == 'anus.normal')            { return data.anus.shape == 'normal' }
    if (operation == 'anus.puffy')             { return data.anus.shape == 'puffy' }
    if (operation == 'anus.horse')             { return data.anus.shape == 'horse' }
    if (operation == 'anus.mouth')             { return data.anus.shape == 'mouth' }
    if (operation == 'anus.condition.tight')   { return data.anus.condition == 'tight' }
    if (operation == 'anus.condition.average') { return data.anus.condition == 'average' }
    if (operation == 'anus.condition.loose')   { return data.anus.condition == 'loose' }
    if (operation == 'anus.condition.gaping')  { return data.anus.condition == 'gaping' }
    if (operation == 'anus.prolapsed')         { return data.anus.prolapseLength > 0; }
    if (operation == 'anus.not-prolapsed')     { return data.anus.prolapseLength == 0; }

    throw `Unknown Anus Operation - ${operation}`
  }

  return { check };

})();
