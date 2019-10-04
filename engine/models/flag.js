global.Flag = Database.instance().define('flag', {
  code: { type:Sequelize.STRING  },
  value: { type:Sequelize.STRING  },
},{
  timestamps: false,
});
