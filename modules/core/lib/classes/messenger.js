global.Messenger = (function() {

  let listeners = {};
  let sequence = 1;

  function publish(channel, data={}) {
    each(listeners[channel]||[], listener => {
      listener.callback(data);
    });
  }

  function subscribe(channel, callback) {
    if (listeners[channel] == null) { listeners[channel] = []; }
    listeners[channel].push({ id:sequence++, callback });
  }

  async function request(channel) {
    
  }

  return {
    publish,
    subscribe,
    request,
  }

})();
