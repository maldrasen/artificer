Elements.Alert = class Alert {

  // TODO: May add other icons like icons and shit in the future.
  constructor(options) {
    this.title = options.title;
    this.message = options.message;
    this.position = options.position;

    this.parent = (options.position == 'center') ? $('#centerAlerts') : $('#sideAlerts');
    this.buildElement();
  }

  buildElement() {
    this.element = $('<li>',{ class:`alert ${this.position}` });

    if (this.title) {
      this.element.append($('<div>',{ class:'title' }).append(this.title));
    }

    this.element.append($('<div>',{ class:'message' }).append(this.message));
  }

  display() {
    this.parent.append(this.element);
    setTimeout(() => {
      this.element.addClass('fade');
      setTimeout(() => {
        this.element.remove();
      },1000);
    },1000);
  }
}
