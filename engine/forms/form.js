global.Form = class Form {
  constructor(code, data) {

    Object.defineProperty(this, 'code', {
      get: () => { return code; }
    });

    each(data, (value, key) => {
      Object.defineProperty(this, key, {
        get: () => { return value; }
      });
    });
  }

  get code() { return code; }
}

Form.build = function(code, data) {
  if (this.name == 'Form') { throw "The build() function should only be called on a subclass of Form." }
  if (this.instances == null) { this.instances = {}; }

  let instance = new this(code,data);
  this.instances[code] = instance;
  return instance;
}

Form.lookup = function(code) {
  let form = this.instances[code];
  if (form == null) {
    throw `Cannot find ${this.name} with code ${code}`;
  }
  return form;
}
