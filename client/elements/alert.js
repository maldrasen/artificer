Elements.Alert = class Alert {

  // TODO: May add other icons like icons and shit in the future.
  constructor(options) {
    this.title = options.title;
    this.message = options.message;
    this.position = options.position;
    this.classname = options.classname;

    if (options.position == 'center') { this.parent = $('#centerAlerts'); }
    if (options.position == 'event') { this.parent = $('#eventAlerts'); }
    if (options.position == 'side') { this.parent = $('#sideAlerts'); }

    this.buildElement();
  }

  buildElement() {
    this.element = $('<li>',{ class:`alert ${this.position} ${this.classname}` });

    if (this.title) {
      this.element.append($('<div>',{ class:'title' }).append(this.title));
    }

    this.element.append($('<div>',{ class:'message' }).append(this.message));
  }

  display() {
    this.parent.append(this.element);
    setTimeout(() => {
      this.element.addClass('fade');
      this.element.addClass('running');
      setTimeout(() => {
        this.element.removeClass('running');
        if (this.parent.find('.running').length == 0) {
          this.parent.empty();
        }
      },1000);
    },1000);
  }
}
