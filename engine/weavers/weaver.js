global.Weaver = (function() {

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
      var match = text.match(/{{([^}]+)::([^}]+)}}/)
      if (match) {
        text = text.replace(match[0], findValue(match[1].trim(), match[2].trim(), context));
      }
      else {
        working = false;
      }
    }

    return text;
  }

  function findValue(subject, token, context) {
    if (token.startsWith('character')) { return CharacterLoom.findValue(subject, token, context); }
    if (token.startsWith('gender')) { return GenderLoom.findValue(subject, token, context); }
    return error(`BadToken(${subject}::${token})`);
  }

  function error(message) {
    return `<span class='weaver-error error'>Error(${message})</span>`;
  }

  return { weave, error };

})();
