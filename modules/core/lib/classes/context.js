global.Context = class Context {

  constructor(properties) {
    this._properties = properties || {};
  }

  get properties() { return this._properties; }
  get event() { return this._event; }

  get(key) { return this._properties[key]; }
  set(key, value) { this._properties[key] = value; }

  // The context is part of the core classes, because it's used across modules
  // to ensapsulate state. When an event is added to the context or when an
  // event's state is set we send a message informing the other modules that it
  // can add their own data to the context.
  
  async setEvent(event) {
    this._event = event;
    await Messenger.request('core.context.set-event',{ context:this, event:event });
  }

  async setEventState(state) {
    await Messenger.request('core.context.set-event-state',{ context:this, state:state });
  }

}
