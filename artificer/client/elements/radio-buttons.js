Elements.RadioButtons = class RadioButtons {

  static init() {
    $(document).on('click', '.radio-buttons .radio-button', function() {
      $(this).data('controller').setValue($(this).data('value'));
    });
  }

  // RadioButtons have the following options:
  //   currentValue:  Currently selected value.
  //   onSelect:      Select callback, only triggers when value changes.
  //   choices:       [{ label:'Yes', value:'Y' },...]
  constructor(options) {
    this._currentValue = options.currentValue;
    this._choices = options.choices;
    this._onSelect = options.onSelect;
    this._element = $('<div>',{ class:'radio-buttons' });

    each((options.choices||[]), choice => {
      this.addChoice(choice);
    });
  }

  get element() { return this._element; }
  get currentValue() { return this._currentValue; }

  addChoice(choice) {
    let button = $('<a>',{ href:'#', class:'radio-button' }).
      attr('data-value',choice.value).
      data('controller',this).
      append(choice.label);

    if (choice.value == this.currentValue) {
      button.addClass('on');
    }

    this.element.append(button);
  }

  setValue(value) {
    if (value != this.currentValue) {
      this._currentValue = value;
      this.element.find('.on').removeClass('on');
      this.element.find(`.radio-button[data-value="${value}"]`).addClass('on');

      if (typeof this._onSelect == 'function') {
        this._onSelect({ radioButtons:this, value:value });
      }
    }
  }

}
