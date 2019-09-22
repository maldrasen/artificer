Elements.Chooser = class Chooser {

  static init() {
    $(document).on('click','.chooser .choice',Elements.Chooser.selectChoice);
  }

  static selectChoice() {
    Elements.clearSelection();

    let choice = $(this);
    if (choice.hasClass('locked')) {
      return false;
    }

    choice.closest('.chooser').find('.active').removeClass('active');
    choice.addClass('active');
    choice.data('detail').addClass('active');
  }

  get element() { return this._element; }
  get selectedValue() { return this._element.find('.choice.active').data('value'); }

  // Options:
  //   - element           (required) div to turn into a chooser panel.
  //   - height / width    Height and width are both nessessary because the
  //                       chooser will be displaying images and I don't think
  //                       I want chooser images to scale.
  constructor(options) {
    this._element = options.element;
    this._title = options.title;
    this._height = options.height || 300;
    this._width = options.width || 500;
    this._imageWidth = options.imageWidth || 300;
    this.build();
  }

  build() {
    this.element.addClass('chooser');
    this.element.append($($('#chooserTemplate').html()));
    this.element.data('chooser',this);

    let elementHeight = this._height;

    if (this._title) {
      this.element.find('.chooser-title').removeClass('hide').append(this._title);
      elementHeight += 35;
    }

    this.element.css({ height:elementHeight, width:this._width });
    this.element.find('.scrolling-panel').css({ height:this._height });
    this.element.find('.chooser-left-panel').css({ width:(this._width - this._imageWidth) });
    this.element.find('.chooser-right-panel').css({ width:this._imageWidth });

    Elements.ScrollingPanel.build(this.element.find('.scrolling-panel'));
  }

  // Options:
  //   - value    (required) The value of the selected choice.
  //   - label    (required) The label to display on the choice.
  //   - body     (required) Body element to display in the choice detail.
  //   - image    (required) Every choice should have some image.
  //   - locked   Locked elements are displayed but cannot be selected.
  addChoice(options) {
    let detail = $('<div>',{ class:'choice-detail' });
    detail.append($('<div>',{ class:'choice-detail-body' }).append(options.body));
    detail.css({
      height: (this._height),
      'background-image': `url(${options.image})`,
      'background-size': `${this._imageWidth}px ${this._height}px`
    });
    this.element.find('.chooser-right-panel').append(detail);

    let choice = $('<li>',{ class:'choice' }).append(options.label);
    choice.data('detail',detail);
    choice.data('value',options.value);
    this.element.find('ul.choices').append(choice);

    if (options.locked) {
      choice.addClass('locked');
    }

    if (this.element.find('.choice.active').length == 0) {
      choice.addClass('active');
      detail.addClass('active');
    }

    Elements.ScrollingPanel.resize(this.element.find('.scrolling-panel'));
  }
}
