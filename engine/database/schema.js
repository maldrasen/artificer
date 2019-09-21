




  global.Body = Database.instance().define('body', {
    character_id: Sequelize.INTEGER,
    height: Sequelize.INTEGER,
    weight: Sequelize.INTEGER,
    furColor: Sequelize.STRING,
    furShade: Sequelize.INTEGER,
    hairColor: Sequelize.STRING,
    scaleColor: Sequelize.STRING,
    skinColor: Sequelize.STRING,
    skinShade: Sequelize.INTEGER,
    tailShape: Sequelize.STRING,
  },{
    timestamps: false,
  });

  global.Character = Database.instance().define('character', {
    master_id: Sequelize.INTEGER,
    role: Sequelize.STRING,
    preName: Sequelize.STRING,
    givenName: Sequelize.STRING,
    postName: Sequelize.STRING,
    fullName: Sequelize.STRING,
    gender: Sequelize.STRING,
    profession: Sequelize.STRING,
    district: Sequelize.STRING,
    stamina: Sequelize.INTEGER,
    race: Sequelize.STRING,
    physical: Sequelize.INTEGER,
    mental: Sequelize.INTEGER,
    personal: Sequelize.INTEGER,
    magical: Sequelize.INTEGER,
  },{
    timestamps: false,
  });

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

  global.Mouth = Database.instance().define('mouth', {
    character_id: Sequelize.INTEGER,
    shape: Sequelize.STRING,
    width: Sequelize.INTEGER,
    elasticity: Sequelize.INTEGER,
    throatWidth: Sequelize.INTEGER,
    throatElasticity: Sequelize.INTEGER,
    tongueLength: Sequelize.INTEGER,
    tongueShape: Sequelize.STRING,
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
