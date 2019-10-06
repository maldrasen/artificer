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

    // The LoggerService won't exist in the specs.
    if (typeof LoggerService != 'undefined') {
      LoggerService.writeLogMessage({
        logger: this.name,
        color: this.color,
        severity: severity,
        message: formatted,
        payload: payload
      });
    }
  }
}
