global.Form = class Form {

  constructor(code, data) {
    this.instances = {};

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
    if (code == null) { code = hash(data); }

    let instance = new this(code,data);
        instance.validate();

    this.instances[code] = instance;

    return instance;
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

    console.log("Make sure Form.properties() still works:")
    console.log(this)
    console.log(props)

    return props;
  }

  // Child classes should overwrite this function to validate forms.
  validate() {}

  // Sometimes we need to add a Form to make a spec work, but we don't want to
  // leave them lying around after the spec. In these cases call this function
  // to clean up temporary data. This should never actually be called in the
  // app though.
  static remove(key) {
    delete this.instances[key];
  }

}
