
  global.CharacterAspect = Database.instance().define('character_aspect', {
    character_id: Sequelize.INTEGER,
    code: Sequelize.STRING,
    strength: Sequelize.INTEGER,
  },{
    timestamps: false,
  });

  global.Cock = Database.instance().define('cock', {
    character_id: Sequelize.INTEGER,
    count: Sequelize.INTEGER,
    glow: Sequelize.STRING,
    knobHeightRatio: Sequelize.INTEGER,
    knotWidthRatio: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
    placement: Sequelize.STRING,
    shape: Sequelize.STRING,
    sheath: Sequelize.STRING,
    spineHeightRatio: Sequelize.INTEGER,
    urethraElasticity: Sequelize.INTEGER,
    urethraWidth: Sequelize.INTEGER,
    widthRatio: Sequelize.INTEGER,
  },{
    timestamps: false,
  });

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

  global.Nipples = Database.instance().define('nipples', {
    character_id: Sequelize.INTEGER,
    count: Sequelize.INTEGER,
    shade: Sequelize.INTEGER,
    shape: Sequelize.STRING,
    width: Sequelize.INTEGER,
    length: Sequelize.INTEGER,
    orificeWidth: Sequelize.INTEGER,
    orificeElasticity: Sequelize.INTEGER,
  },{
    timestamps: false,
  });

  global.Pussy = Database.instance().define('pussy', {
    character_id: Sequelize.INTEGER,
    cervixElasticity: Sequelize.INTEGER,
    cervixWidth: Sequelize.INTEGER,
    clitLength: Sequelize.INTEGER,
    clitWidth: Sequelize.INTEGER,
    elasticity: Sequelize.INTEGER,
    innerLabiaLength: Sequelize.INTEGER,
    outerLabiaSize: Sequelize.INTEGER,
    placement: Sequelize.STRING,
    prolapseLength: Sequelize.INTEGER,
    shape: Sequelize.STRING,
    urethraElasticity: Sequelize.INTEGER,
    urethraWidth: Sequelize.INTEGER,
    width: Sequelize.INTEGER,
  },{
    timestamps: false,
  });

  global.Tits = Database.instance().define('tits', {
    character_id: Sequelize.INTEGER,
    size: Sequelize.INTEGER,
    shape: Sequelize.STRING,
    count: Sequelize.INTEGER,
    productionMultiplier: Sequelize.INTEGER,
  },{
    timestamps: false,
  });
