global.Model = class Model {
  constructor() {}

  get id() { return this._id; }

  // === Validations ===

  // Validate that the named attribute is between min and max, inclusive.
  validateValueBetween(name, value, min, max) {
    if (value < min || value > max) { throw `Bad value for ${name} > ${value}`; }
  }

  // Validate that the named attribute is within the list.
  validateValueIn(name, value, list) {
    if (list.indexOf(value) < 0) { throw `Bad value for ${name} > ${value}` }
  }
}
