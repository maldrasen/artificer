

  global.Equipment = Database.instance().define('equipment', {
    equipped_by_id: Sequelize.INTEGER,
    type: Sequelize.STRING,
    worn_on: Sequelize.STRING,
    used_in: Sequelize.STRING,
    persistant: Sequelize.BOOLEAN,
    name: Sequelize.STRING,
    options: Sequelize.STRING(1024),
  },{
    timestamps: false,
  });

  global.EventQueue = Database.instance().define('eventQueue', {
    code: Sequelize.STRING,
    state: Sequelize.STRING(1024),
  },{
    timestamps: false,
  });

  global.Flag = Database.instance().define('flag',{
    code: { type:Sequelize.STRING, primaryKey:true },
    value: Sequelize.STRING,
  },{
    timestamps: false,
  });
