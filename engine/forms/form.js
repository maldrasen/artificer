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

    let instance = new this(code,data);
    this.instances[code] = instance;
    return instance;
  }

  static lookup(code) {
    let form = this.instances[code];
    if (form == null) {
      throw `Cannot find ${this.name} with code ${code}`;
    }
    return form;
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

}
