Weaver.MeasurementLoom = (function() {

  // Measurement Utility Tokens:
  //   These utility tokens will get a measurement in english, in metric or
  //   american depending on what the user preference is currently set to.
  //
  // TODO: Add feet, foot, yard, and yards when they're needed.
  //
  function findValue(utility, argument) {
    if (utility == 'inch')   { return inches(argument,false); }
    if (utility == 'inches') { return inches(argument,true);  }

    return Weaver.error(`Bad random token(${utility})`);
  }

  // Turns a token like {{inches|4}} into "four inches" or "ten centimeters"
  function inches(value, plural) {
    const cm = plural ? 'centimeters' : 'centimeter';
    const inch = plural ? 'inches' : 'inch';

    if (value == 1) {
      return Settings.Metric ? `two ${cm}` : 'an inch';
    }

    return Settings.Metric ?
      `${EnglishUtility.numberInEnglish(Math.round(value * 2.54))} ${cm}` :
      `${EnglishUtility.numberInEnglish(value)} ${inch}`;
  }

  return { findValue };

})();
