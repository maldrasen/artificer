Resolver.Items = (function() {

  // When a character goes hunting or does some other role or mission that
  // results in getting resources or possessions they're added in this
  // function. We add everything to one big object at first, then add
  // everything at once at the end.
  function add(items) {
    const queue = Resolver.itemsToAdd();

    each(items, (count, code) => {
      if (queue[code] == null) { queue[code] = 0; }
      queue[code] += count;
    });
  }

  // Commit is an async function but we don't really need to wait on any of
  // this actually getting added. We add everything to one object initially in
  // order to avoid any situation where we might be updating the same item at
  // the same time. By creating a map first, this becomes atomic.

  async function commit() {
    const queue = Resolver.itemsToAdd();
    let newFood = 0;

    each(queue, (count, code) => {
      if (code == 'food') {
        newFood += count;
        Game.addFood(count);
      } else {
        commitItem(code, count);
      }
    });

    Resolver.Report.setNewFood(newFood);
  }

  async function commitItem(code, count) {
    const item = Item.lookup(code);
    if (item.type == 'resource') {
      return await Resource.add(code,count);
    }
    throw `How do I commit ${code}?`
  }

  return { add, commit }

})();
