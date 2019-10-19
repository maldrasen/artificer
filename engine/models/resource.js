global.Resource = Database.instance().define('resource', {
  code:  { type:Sequelize.STRING  },
  count: { type:Sequelize.INTEGER },
},{ timestamps: false });

Resource.allForClient = async function() {
  const resources = await Resource.findAll();
  return resources.map(resource => {
    let item = Item.lookup(resource.code);
    return {
      name: item.name,
      icon: item.icon,
      count: resource.count,
    }
  });
}
