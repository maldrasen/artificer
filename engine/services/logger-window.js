
// ==========================================
// This script is included in the logger.html
// ==========================================

global.$ = global.jQuery = require('jquery');

let electron = require('electron');
let ipcRenderer = electron.ipcRenderer;
let util = require('util');

ipcRenderer.on('log.write', (event, message) => { writeToLog(message) });
ipcRenderer.on('log.clear', (event) => { clearLog() });

function clearLog() {
  $('#logEvents').empty();
  writeToLog({
    logger: 'Logger',
    color: 'rgb(100,100,100)',
    severity: 'debug',
    message: 'Ready'
  });
}

function writeToLog(message) {
  let content = $($('#eventTemplates').html());

  content.find('.logger-name').append(message.logger).css({
    color: message.color
  });

  content.find('.severity').append(`[${message.severity.toUpperCase()}]`);
  content.find('.message').append(message.message);

  if (message.payload) {
    content.find('.payload').append(util.inspect(message.payload));
  }

  $('#logEvents').append($('<li>', { class:'log-event' }).
    addClass(`level-${message.severity}`).append(content));

  window.scrollTo(0,document.body.scrollHeight);
}

$(document).ready(clearLog);
