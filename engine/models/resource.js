global.Resource = Database.instance().define('resource', {
  code:  { type:Sequelize.STRING  },
  count: { type:Sequelize.INTEGER },
},{
  getterMethods: {
    item() { return Item.lookup(this.code); },
    name() { return this.item.name; },
    plural() { return this.item.plural; },
  },
  timestamps: false,
});

Resource.allForClient = async function() {
  const resources = await Resource.findAll();
  return resources.map(resource => {
    let item = Item.lookup(resource.code);
    return {
      code: item.code,
      name: item.name,
      icon: item.icon,
      count: resource.count,
    }
  });
}

// Similar to the client list, but only includes the codes and counts in a map.
Resource.counts = async function() {
  const resources = await Resource.findAll();
  const counts = {};

  each(resources, resource => {
    counts[resource.code] = resource.count;
  });

  return counts;
}

Resource.lookup = async function(code) {
  return await Resource.findOne({ where:{ code:code } });
}

// Add all resources given an item object. { code:count... }
Resource.addAll = async function(items) {
  await Promise.all(Object.keys(items).map(async code => {
    await Resource.add(code,items[code]);
  }));
}

// Add a single resource. If the resource hasn't been created this function
// creates it, otherwise it increases the resource quentity.
Resource.add = async function(code, count) {
  const resource = await Resource.lookup(code);
  const item = Item.lookup(code);

  if (resource == null) {
    if (item.maxStock != null && count > item.maxStock) { count = maxStock; }
    Resource.create({ code:code, count:count });
  } else {
    resource.count += count;
    if (item.maxStock != null && resource.count > item.maxStock) { resource.count = item.maxStock; }
    await resource.save();
  }
}

// Consumes materials. Materials should have the following form: { hide:2 }
// Before calling this function you should make sure that the consumed
// materials are actually in the inventory because I don't check that here.
Resource.consume = async function(materials) {
  await Promise.all(Object.keys(materials||{}).map(async code => {
    const resource = await Resource.findOne({ where:{ code:code }});
          resource.count = resource.count - materials[code];

    if (resource.count > 1) {
      return await resource.save();
    }

    await Resource.destroy({ where:{ code:code }});
  }));
}
