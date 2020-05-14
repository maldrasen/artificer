global.Weaver = (function() {

  const MassiveList = ['massive','massively huge','enormous','mammoth','immense','monstrous','monstrously huge',
                       'titanic','giant','gigantic']

  const MaleDemonList = ['Abaddon','Baal','Baphomet','Behemoth','Lucifer','Maldrasen','Mephistopheles','Satan',
                         'Slaanesh']

  const UnholyList = ['unholy','demonic','infernal','satanic','corrupt','blasphemous','cursed','accursed']

  // Shortcut function for when you want to do some token replacement on a
  // single string and you only have a single character to put in the context.
  // Don't do this in a loop, adding a character looks up all of their body
  // parts and shit after all.
  async function weaveWithCharacter(text, key, character) {
    const context = new Context();
    await context.addCharacter(key, character);

    return weave(text, context);
  }

  // The weave function takes a string and recursivly itterates over it,
  // looking for {{ templates }} to replace with actual values. The context
  // defines things like which actors are in which position and so forth. If
  // for instance you're having a conversation between three prople the player
  // may be {{P}}, while the other two actors might be {{1}} and {{2}}.
  //
  // Everything that the weaver uses should already be in the context, that way
  // this function can remain synchronous.
  function weave(text, context) {
    var working = true;

    while(working) {
      var actorMatch = text.match(/{{([^}]+)::([^}]+)}}/);
      var utilityMatch = text.match(/{{([^}]+)\|([^}]+)}}/);
      var shortcutMatch = text.match(/{{(he|him|his)}}/i);
      var simpleMatch = text.match(/{{([^}]+)}}/);

      if (actorMatch) {
        text = text.replace(actorMatch[0], actorValue(actorMatch[1].trim(), actorMatch[2].trim(), context));
      } else if (utilityMatch) {
        text = text.replace(utilityMatch[0], utilityValue(utilityMatch[1].trim(), utilityMatch[2].trim(), context));
      } else if (shortcutMatch) {
        text = text.replace(shortcutMatch[0], shortcutValue(shortcutMatch[1].trim(), context));
      } else if (simpleMatch) {
        text = text.replace(simpleMatch[0], simpleValue(simpleMatch[1].trim()));
      } else {
        working = false;
      }
    }

    return text.replace(/\s+/g,' ');
  }

  function actorValue(subject, token, context) {
    if (token.startsWith('balls'))     { return Weaver.BallsLoom.findValue(subject, token, context); }
    if (token.startsWith('body'))      { return Weaver.BodyLoom.findValue(subject, token, context); }
    if (token.startsWith('character')) { return Weaver.CharacterLoom.findValue(subject, token, context); }
    if (token.startsWith('cock'))      { return Weaver.CockLoom.findValue(subject, token, context); }
    if (token.startsWith('gender'))    { return Weaver.GenderLoom.findValue(subject, token, context); }
    if (token.startsWith('nipples'))   { return Weaver.NipplesLoom.findValue(subject, token, context); }
    if (token.startsWith('species'))   { return Weaver.SpeciesLoom.findValue(subject, token, context); }
    if (token.startsWith('tits'))      { return Weaver.TitsLoom.findValue(subject, token, context); }
    return error(`BadToken(${subject}::${token})`);
  }

  function utilityValue(utility, argument, context) {
    if (utility.startsWith('flag')) { return Weaver.FlagLoom.findValue(argument, context); }
    if (utility.startsWith('game')) { return Weaver.GameLoom.findValue(argument, context); }
    if (utility.match(/^[rR]andom/)) { return Weaver.RandomLoom.findValue(utility, argument); }
    if (utility.match(/^(inch|foot|feet|yard|yards)/)) { return Weaver.MeasurementLoom.findValue(utility, argument); }
    return error(`BadToken(${utility}|${argument})`);
  }

  // The pronoun shortcuts are a little magical. They only work when there is a
  // a single actor or a 'C' actor in the scene. What that the case we don't
  // need to specify which actor is being talked about. We only do this for
  // pronouns though because they're by far the most used tokens. And {{him}}
  // is much easier to type and read than {{C::gender.him}}.
  function shortcutValue(token, context) {
    const keys = Object.keys(context.actors);
    if (keys.length == 1) { return (context.actors[keys[0]]).character.gender[token]; }
    if (context.actors['C']) { return (context.actors['C']).character.gender[token]; }
    throw `Pronoun shortcuts can only be used when there is only one actor in a scene, or when there is a 'C' actor.`;
  }

  function simpleValue(token) {
    if (token == 'ballsack')  { return Random.from(['ballsack','ballsack','scrotum']); }
    if (token == 'cock')      { return Random.from(['cock','cock','dick']); }
    if (token == 'pussy')     { return Random.from(['pussy','pussy','cunt']); }
    if (token == 'sheath')    { return Random.from(['sheath','cocksheath']); }
    if (token == 'testicles') { return Random.from(['testicles','balls']); }
    if (token == 'tit')       { return Random.from(['breast','tit']); }
    if (token == 'tits')      { return Random.from(['breasts','tits']); }
    if (token == 'throb')     { return Random.from(['throb','pulse']); }
    if (token == 'throbbing') { return Random.from(['throbbing','pulsing']); }
    if (token == 'wide')      { return Random.from(['wide','thick']); }

    if (token == 'maleDemon') { return Random.from(MaleDemonList); }
    if (token == 'unholy')    { return Random.from(UnholyList); }
    if (token == 'massive')   { return Random.from(MassiveList); }
    if (token == 'aMassive')  { return EnglishUtility.a_an(Random.from(MassiveList)); }

    // It's generally fine to assume meters and yards are equal. Use the
    // measurement loom though to get something in feet.
    if (token == 'meter')     { return Settings.Metric ? 'meter' : 'yard' }
    if (token == 'threeFeet') { return Settings.Metric ? 'a meter' : 'three feet' }
    if (token == 'meters')    { return Settings.Metric ? 'meters' : 'yards' }

    // Just for phrases like "every inch of his cock" where there's no actual length value
    if (token == 'inch') { return Settings.Metric ? 'centimeter' : 'inch' }

    return error(`BadToken(${token})`);
  }

  function error(message) {
    return `<span class='weaver-error error'>Error(${message})</span>`;
  }

  return { weaveWithCharacter, weave, error };

})();
