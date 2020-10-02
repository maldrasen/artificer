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

  // The problem with building immutable objects by defining properties like
  // this is that it breaks the console inspector, the JSON.stringify function,
  // Electron's IPC messages, and probably any other object serialization
  // function. To prevent this from causing problems, call this properties
  // function to get a POJO of the properties. We can't just do this every time
  // though because then we lose the prototype. So really this function is only
  // used for printing things and sending forms to the browser. Seems like
  // something that should just fucking be included in the language. Maybe it
  // is. I don't know, I'm not good at JavaScript.
  get properties() {
    let props = {};
    each(Object.getOwnPropertyNames(this), name => { props[name] = this[name]; });
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
