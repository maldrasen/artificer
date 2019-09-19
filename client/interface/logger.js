
// =============================================================================
// This Logger is used to write to the log window from the render thread if it
// exists. The log is usually only open when the application is in debug mode.
// =============================================================================

global.Logger = class Logger {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  debug(message, payload)   { this.log('debug', message, payload);   }
  info(message, payload)    { this.log('info', message, payload);    }
  warning(message, payload) { this.log('warning', message, payload); }
  error(message, payload)   { this.log('error', message, payload);   }

  log(severity, message, payload) {
    let formatted = message.
      replace(/\n/g,'<br><span style="margin-left:20px;"></span>').
      replace(/--/g,'—');

    if (typeof ipcRenderer != 'undefined') {
      ipcRenderer.send('log.write', {
        logger: this.name,
        color: this.color,
        severity: severity,
        message: formatted,
        payload: payload
      });
    }
  }
}
