global.SexEvent = Database.instance().define('sex_event', {
  eventType:    { type:Sequelize.STRING, validate:{ isIn:[['training','event']] }},
  character_id: { type:Sequelize.INTEGER },
  course:       { type:Sequelize.STRING },
  with:         { type:Sequelize.STRING },
  dayNumber:    { type:Sequelize.INTEGER },
  orgasmCount:  { type:Sequelize.INTEGER },
  assCount:     { type:Sequelize.INTEGER },
  cockCount:    { type:Sequelize.INTEGER },
  oralCount:    { type:Sequelize.INTEGER },
  pussyCount:   { type:Sequelize.INTEGER },
  cumInAss:     { type:Sequelize.INTEGER },
  cumInMouth:   { type:Sequelize.INTEGER },
  cumInPussy:   { type:Sequelize.INTEGER },
  details_json: { type:Sequelize.STRING },
},{
  timestamps: false,
  getterMethods: {
    details() { return JSON.parse(this.details_json||'{}') },
  },
  setterMethods: {
    details(json) { this.setDataValue('details_json',JSON.stringify(json)) },
  }
});

// === SexEvent.with ===
// Not sure where else to write this, but I need to state somewhere how I
// intend for the SexEvent.with string to be used. Most SexEvents will probably
// just be between the player and a minion. The SexEvents are used to record a
// minion's sexual history so in most cases 'with' will just be set to P. If a
// minion has sex with another minion, with can be set to C# where # is the
// other character's ID. In this case there should be two SexEvents created,
// one for each minion's perspective. If multiple minions are involved then
// with becomes a comma seperated list of characters, like "P,C2,C3" to
// indicate that this character had a foursome with the player and two other
// characters, or "P,A1" if they had sex with the player and one of the animals.
// We should only query events using the character_id, but once we have all of
// a character's sex events we can put together a map of how many times they've
// had sex with every other character. The with attribute should have the
// characters in order though so that the string always begins with P if the
// player is involved.

// SexEvents should be added with this function so that the default options are
// set when all the options are not included.
SexEvent.add = async function(options) {
  if (options.eventType == null) { throw 'An event type must be specified.' }

  return await SexEvent.create({
    eventType:    options.eventType,
    character_id: options.character_id || options.character.id,
    course:       options.course,
    with:         options.with || 'P',
    dayNumber:    Game.dayNumber(),
    orgasmCount:  options.orgasmCount || 0,
    assCount:     options.assCount    || 0,
    cockCount:    options.cockCount   || 0,
    oralCount:    options.oralCount   || 0,
    pussyCount:   options.pussyCount  || 0,
    cumInAss:     options.cumInAss    || 0,
    cumInMouth:   options.cumInMouth  || 0,
    cumInPussy:   options.cumInPussy  || 0,
    details_json: JSON.stringify(options.details||{}),
  });
}
