global.Flag = Database.instance().define('flag', {
  code: { type:Sequelize.STRING  },
  value: { type:Sequelize.STRING  },
},{
  timestamps: false,
});

Flag.getAll = async function() {
  let flags = await Flag.findAll({ where:{} })

  let compact = {};
  each(flags, flag => {
    compact[flag.code] = flag.value
  });

  return compact;
}

Flag.alwaysFuckGenderList = async function() {
  let flags = await Flag.getAll();
  let always = []

  if (flags['player.fucksMen'] == 'always') { always.push('male'); }
  if (flags['player.fucksFutas'] == 'always') { always.push('futa'); }
  if (flags['player.fucksWomen'] == 'always') { always.push('female'); }

  return always;
}

Flag.maybeFuckGenderList = async function() {
  let flags = await Flag.getAll();
  let maybe = []

  if (flags['player.fucksMen'] == 'maybe') { maybe.push('male'); }
  if (flags['player.fucksFutas'] == 'maybe') { maybe.push('futa'); }
  if (flags['player.fucksWomen'] == 'maybe') { maybe.push('female'); }

  return maybe;
}
