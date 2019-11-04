describe('Item Flavor', function() {

  it("itemizes a list of flavors into items that can be put into the inventory", function() {
    let items = ItemFlavor.itemize({
      'fox-pelt':    1,
      'rabbit-meat': 1,
      'rat-meat':    2
    });

    expect(items.food).to.equal(6);
    expect(items.hide).to.equal(1);
  });

});
