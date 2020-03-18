global.ConversionUtility = {

  // Converts a measurement in millimeters to either centimeters, or inches.
  // Inches will round to the nearist quarter inch.
  milliToInches(milli) {
    return Settings.Metric ?
      Math.round(milli/10):
      Math.round((milli/25.4)*4) / 4;
  },

  // Grams to either pounds or kilograms.
  gramToPound(gram) {
    return Settings.Metric ?
      Math.round(gram/1000):
      Math.round(gram * 0.00220462);
  },

  gramsToOunces(gram) {
    return Settings.Metric ? gram : Math.round(gram * 0.035274);
  },

}
