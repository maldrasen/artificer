global.Resource = Database.instance().define('resource', {
  code:  { type:Sequelize.STRING  },
  count: { type:Sequelize.INTEGER },
},{ timestamps: false });
