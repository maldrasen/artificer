global.Weaver = (function() {

  // Shortcut function for when you want to do some token replacement on a
  // single string and you only have a single character to put in the context.
  // Don't do this in a loop, adding a character looks up all of their body
  // parts and shit after all.
  async function weaveWithCharacter(text, key, character) {
    const context = new WeaverContext();
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
      var simpleMatch = text.match(/{{([^}]+)}}/);

      if (actorMatch) {
        text = text.replace(actorMatch[0], actorValue(actorMatch[1].trim(), actorMatch[2].trim(), context));
      } else if (utilityMatch) {
        text = text.replace(utilityMatch[0], utilityValue(utilityMatch[1].trim(), utilityMatch[2].trim(), context));
      } else if (simpleMatch) {
        text = text.replace(simpleMatch[0], simpleValue(simpleMatch[1].trim()));
      } else {
        working = false;
      }
    }

    return text;
  }

  function actorValue(subject, token, context) {
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
    if (utility.toLowerCase().startsWith('flag')) { return Weaver.FlagLoom.findValue(utility, argument, context); }
    if (utility.toLowerCase().startsWith('random')) { return Weaver.RandomLoom.findValue(utility, argument); }
    return error(`BadToken(${utility}|${argument})`);
  }

  function simpleValue(token) {
    if (token == 'sheath')    { return Random.from(['sheath','sheath','cocksheath']); }
    if (token == 'tit')       { return Random.from(['breast','tit']); }
    if (token == 'tits')      { return Random.from(['breasts','tits']); }
    if (token == 'throb')     { return Random.from(['throb','pulse']); }
    if (token == 'throbbing') { return Random.from(['throbbing','pulsing']); }
    if (token == 'wide')      { return Random.from(['wide','thick']); }
    if (token == 'unholy')    { return Random.from(['unholy','demonic','infernal','satanic','corrupt','blasphemous','cursed','accursed']); }
    if (token == 'maleDemon') { return Random.from(['Abaddon','Baal','Baphomet','Behemoth','Lucifer','Maldrasen','Mephistopheles','Satan','Slaanesh']); }

    return error(`BadToken(${token})`);
  }

  function error(message) {
    return `<span class='weaver-error error'>Error(${message})</span>`;
  }

  return { weaveWithCharacter, weave, error };

})();
