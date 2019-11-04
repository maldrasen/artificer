global.Flag = Database.instance().define('flag', {
  code: { type:Sequelize.STRING  },
  value: { type:Sequelize.STRING  },
},{
  timestamps: false,
});

Flag.lookup = async function(code) {
  return await Flag.findOne({ where:{ code:code } });
}

Flag.getAll = async function() {
  let flags = await Flag.findAll({ where:{}, order: [['code', 'ASC']] });

  let compact = {};
  each(flags, flag => {
    compact[flag.code] = flag.value
  });

  return compact;
}

Flag.printFlags = async function() {
  const flags = await Flag.getAll();
  console.log("\n=== Printing Flags ===");
  each(flags, (value,code) => { console.log(`    ${code}  -  ${value}`); });
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

Flag.genderPreferenceScores = async function() {
  let flags = await Flag.getAll();
  let scores = { male:0, female:0, futa:0 };

  if (flags['player.fucksMen'] == 'always')   { scores.male = 2; }
  if (flags['player.fucksMen'] == 'maybe')    { scores.male = 1; }
  if (flags['player.fucksWomen'] == 'always') { scores.female = 2; }
  if (flags['player.fucksWomen'] == 'maybe')  { scores.female = 1; }
  if (flags['player.fucksFutas'] == 'always') { scores.futa = 2; }
  if (flags['player.fucksFutas'] == 'maybe')  { scores.futa = 1; }

  return scores;
}
