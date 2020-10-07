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

  static build(code, data) {
    if (this.name == 'Form') { throw "The build() function should only be called on a subclass of Form." }
    if (this.instances == null) { this.instances = {}; }
    if (code == null) { code = hash(data); }

    let instance = new this(code,data);
        instance.validate();

    this.instances[code] = instance;

    return instance;
  }

  // Used exclusivly by the specs to build temporary data objects that can be
  // removed all at once with the purgeTemp() function.
  static buildTemp(code, data) {
    let instance = this.build(code,data);
    if (this.tempInstances == null) { this.tempInstances = {}; }
    this.tempInstances[code] = instance;
  }

  static purgeTemp() {
    each(this.tempInstances, (form, key) => {
      delete this.instances[key];
    });
    this.tempInstances = {};
  }

  static all() {
    return this.where(i => { return true; });
  }

  static lookup(code) {
    let form = this.instances[code];
    if (form == null) {
      throw `Cannot find ${this.name} with code ${code}`;
    }
    return form;
  }

  // Get all forms that match the properties. There's prolly a way to map and
  // filter on an object like on an array?
  static where(filter) {
    let results = []
    each(this.instances, (instance, code) => {
      if (filter(instance)) {
        results.push(instance);
      }
    })
    return results
  }

  // When we send data to the client we have to serialize the form into a
  // normal javascript object with all of the functions stripped out.
  get properties() {
    let props = {};

    each(Object.getOwnPropertyNames(this), name => {
      if (typeof this[name] != 'function') {
        props[name] = this[name];
      }
    });

    return props;
  }

  // Child classes should overwrite this function to validate forms.
  validate() {}

}
