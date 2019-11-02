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

// Consumes materials. Materials should have the following form: { hide:2 }
// Before calling this function you should make sure that the consumed
// materials are actually in the inventory because I don't check that here.
Resource.consume = async function(materials) {
  await Promise.all(Object.keys(materials).map(async code => {
    const resource = await Resource.findOne({ where:{ code:code }});
    resource.count = resource.count - materials[code].count;
    resource.count > 1 ? await resource.save() : await Resource.destroy({ where:{ code:code }});
  }));
}
