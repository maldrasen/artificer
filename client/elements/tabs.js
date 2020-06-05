Elements.Tabs = class Tabs {

  static init() {
    $(document).on('click','.tab-button',Elements.buttonAction(function() {
      if ($(this).hasClass('active') == false) {
        $(this).closest('.tab-buttons').data('tabs').activate($(this));
      }
    }));
  }

  // Options:
  //    tabButtons
  //    tabContainer
  //    onTabChange
  constructor(options) {
    this._tabButtons = $(options.tabButtons);
    this._tabContainer = $(options.tabContainer);
    this._onTabChange = options.onTabChange;
    this.tabButtons.data('tabs',this);
  }

  get tabButtons() { return this._tabButtons; }
  get tabContainer() { return this._tabContainer; }
  get onTabChange() { return this._onTabChange; }
  get activeTabButton() { return this.tabButtons.find('.active'); }
  get activeTabContainer() { return this.tabContainer.find('.active'); }

  tabContainerFor(tabButton) {
    return this.tabContainer.find(tabButton.data('tab'));
  }

  activate(tabButton) {
    this.tabButtons.find('.active').removeClass('active');
    this.tabContainer.find('.active').removeClass('active');

    tabButton.addClass('active');
    this.tabContainerFor(tabButton).addClass('active');
    this.tabChanged();
  }

  tabChanged() {
    if (typeof this.onTabChange == 'function') { this.onTabChange(this); }
  }
}
